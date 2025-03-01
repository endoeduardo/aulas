from langchain.globals import set_debug
from langchain_ollama.llms import OllamaLLM
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory

set_debug(True)

model = OllamaLLM(
    model="llama3:latest",
    base_url="http://localhost:11434",
    verbose=True
)

memory = ConversationBufferMemory()

conversation = ConversationChain(
    llm=model,
    verbose=True,
    memory=memory
)

mensagens = [
    "Quero visitar um lugar no Brasil famoso por suas praias e cultura. Pode me recomendar?",
    "Qual é o melhor período do ano para visitar em termos de clima?",
    "Quais tipos de atividades ao ar livre estão disponíveis?",
    "Alguma sugestão de acomodação eco-friendly por lá?",
    "Cite outras 20 cidades com características semelhantes às que descrevemos até agora. Rankeie por mais interessante, incluindo no meio ai a que você já sugeriu.",
    "Na primeira cidade que você sugeriu lá atrás, quero saber 5 restaurantes para visitar. Responda somente o nome da cidade e o nome dos restaurantes.",
]

for mensagem in mensagens:
    resposta = conversation.predict(input=mensagem)
    print(resposta)
