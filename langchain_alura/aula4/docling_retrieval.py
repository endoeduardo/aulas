from pathlib import Path
from tempfile import mkdtemp
from docling.chunking import HybridChunker
from langchain_ollama.llms import OllamaLLM
from langchain_ollama import OllamaEmbeddings
from langchain_docling import DoclingLoader
from langchain_docling import DoclingLoader
from langchain_docling.loader import ExportType
from langchain_core.prompts import PromptTemplate
from langchain_community.vectorstores import FAISS
from langchain.chains import RetrievalQA

# HF_TOKEN = _get_env_from_colab_or_os("HF_TOKEN")
FILE_PATH = "aula4/input_folder/download.pdf"
EMBED_MODEL_ID = "sentence-transformers/all-MiniLM-L6-v2"
GEN_MODEL_ID = "mistralai/Mixtral-8x7B-Instruct-v0.1"
EXPORT_TYPE = ExportType.DOC_CHUNKS
QUESTION = "Which are the main AI models in Docling?"
PROMPT = PromptTemplate.from_template(
    "Context information is below.\n---------------------\n{context}\n---------------------\nGiven the context information and not prior knowledge, answer the query.\nQuery: {input}\nAnswer:\n",
)
TOP_K = 3
MILVUS_URI = str(Path(mkdtemp()) / "docling.db")


loader = DoclingLoader(
    file_path=FILE_PATH,
    export_type=EXPORT_TYPE,
    chunker=HybridChunker(tokenizer=EMBED_MODEL_ID),
)

docs = loader.load()
splits = docs

embeddings = OllamaEmbeddings(
    model="llama3",
    base_url="http://localhost:11434"
)
db = FAISS.from_documents(splits, embeddings)

model = OllamaLLM(
    model="llama3:latest",
    base_url="http://localhost:11434",
    verbose=True
)

qa_chain = RetrievalQA.from_chain_type(model, retriever=db.as_retriever())

pergunta = "Quais são as conclusões do artigo? Em português"
resultado = qa_chain.invoke({ "query" : pergunta})
print(resultado)

with open("aula4/results/article_summary.md", "w", encoding="utf-8") as file:
    file.write(resultado.get("result"))