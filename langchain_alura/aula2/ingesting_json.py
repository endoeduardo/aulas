import json
from pathlib import Path
from langchain_core.prompts import PromptTemplate
from langchain_ollama.llms import OllamaLLM
from langchain_core.pydantic_v1 import Field, BaseModel
from langchain_core.output_parsers import JsonOutputParser

model = OllamaLLM(
    model="llama3:latest",
    base_url="http://localhost:11434",
    verbose=True
)

class Provider(BaseModel):
    provider_name = Field("provider name")
    provider_id = Field("provider id")
    address1 = Field("Street address of the provider")
    city = Field("city of the provider")
    state = Field("state where provider is located, abbreviated and uppercased")
    zip_code = Field("zip code of the provider's location, as 5 digits")
    specialty = Field("specialty of the provider")

parser = JsonOutputParser(pydantic_object=Provider)

template = """
    Command: Given this JSON containing the provider's details, I want to extract the details
    
    {provider_detail}
    
    Command: and I want to output as a the following JSON format output
    
    {output_format}
"""

prompt = PromptTemplate(
    template=template,
    input_variables=["provider_detail"],
    partial_variables={"output_format": parser.get_format_instructions()}
)

chain = prompt | model | parser


filepath = Path("aula2/parsed_providers")
filepath.mkdir(parents=True, exist_ok=True)

with open("aula2/input_data/medical.json", "r", encoding="utf-8") as json_file:
    json_data = json.load(json_file)
    for detail in json_data:
        result = chain.invoke({"provider_detail": detail})
        file = result["provider_name"] + ".json"
        file = filepath / file
        with open(file, "w", encoding="utf-8") as document:
            json.dump(result, document, indent=4)