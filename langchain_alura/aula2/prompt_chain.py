from operator import itemgetter
from langchain_core.prompts import PromptTemplate, ChatPromptTemplate
from langchain_ollama.llms import OllamaLLM
from langchain_core.pydantic_v1 import Field, BaseModel
from langchain_core.output_parsers import JsonOutputParser, StrOutputParser

model = OllamaLLM(
    model="llama3:latest",
    base_url="http://localhost:11434",
    verbose=True
)

class Destination(BaseModel):
    city = Field("City to visit")
    motive = Field("Explanation of why the city is interesting")

parser = JsonOutputParser(pydantic_object=Destination)

template = """
    Choose a city given my interest in {theme}.
    {output_format}
"""

prompt_choose_city = PromptTemplate(
    template=template,
    input_variables=["theme"],
    partial_variables={"output_format": parser.get_format_instructions()}
)

prompt_restaurants = ChatPromptTemplate.from_template("Suggest 3 restaurants for this {city}")
prompt_sightseeing = ChatPromptTemplate.from_template("Suggest 2 must see sightseeing in {city}")
prompt_messages = ChatPromptTemplate.from_messages([
    ("ai", "I would suggest this {city} to visit"),
    ("ai", "You can go to these restaurants {restaurants}"),
    ("ai", "And you must see this sightseeings {sightseeing}"),
    ("system", "Combine all the messages and summarize them to create an itinerary.")
])

chain1 = prompt_choose_city | model | parser
chain2 = prompt_restaurants | model | StrOutputParser()
chain3 = prompt_sightseeing | model | StrOutputParser()
chain4 =  prompt_messages| model | StrOutputParser()

final_chain = (
    chain1 | {
        "restaurants": chain2,
        "sightseeing": chain3,
        "city": itemgetter("city")       
    } |
    chain4
)

print(final_chain.invoke({"theme": "Brazil, Curitiba"}))