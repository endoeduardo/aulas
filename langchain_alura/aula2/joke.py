from langchain_core.prompts import PromptTemplate
from langchain_ollama.llms import OllamaLLM

model = OllamaLLM(
    model="llama3:latest",
    base_url="http://localhost:11434",
    # verbose=True
)

template = """
    Tell me a joke based on this theme {theme}
"""
prompt = PromptTemplate(template=template)

chain = prompt | model

print(chain.invoke({"theme": "clown"}))
