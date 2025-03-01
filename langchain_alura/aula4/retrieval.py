from langchain_ollama.llms import OllamaLLM
from langchain_ollama import OllamaEmbeddings
from langchain.globals import set_debug
from langchain_community.document_loaders import TextLoader
from langchain_community.vectorstores import FAISS
from langchain_text_splitters import CharacterTextSplitter
from langchain_core.output_parsers import StrOutputParser
from langchain.chains import RetrievalQA

set_debug(True)

model = OllamaLLM(
    model="llama3:latest",
    base_url="http://localhost:11434",
    verbose=True
)

carregador = TextLoader("aula4/nubank.txt", encoding="utf-8")
documentos = carregador.load()

quebrador = CharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
textos = quebrador.split_documents(documentos)
# print(textos)

embeddings = OllamaEmbeddings(
    model="llama3",
    base_url="http://localhost:11434"
)
db = FAISS.from_documents(textos, embeddings)

qa_chain = RetrievalQA.from_chain_type(model, retriever=db.as_retriever())

pergunta = "Quais são as vantagens do Nubank Ultravioleta?"
resultado = qa_chain.invoke({ "query" : pergunta})
print(resultado)
