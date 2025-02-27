from langchain_community.llms.ollama import Ollama

if __name__ == "__main__":
    
    llm = Ollama(
        model="llama3:latest",
        base_url="http://localhost:11434",
        verbose=True
    )

    prompt = """Tell me a Joke"""
    response = llm.invoke(prompt)
    print(response)