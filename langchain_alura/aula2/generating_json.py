from pathlib import Path
import json
from langchain_core.prompts import PromptTemplate
from langchain_ollama.llms import OllamaLLM
from langchain_core.pydantic_v1 import Field, BaseModel
from langchain_core.output_parsers import JsonOutputParser

model = OllamaLLM(
    model="llama3:latest",
    base_url="http://localhost:11434",
    verbose=True
)

class AppIdea(BaseModel):
    title = Field("App title")
    description = Field("App Description")
    features = Field("App features")

parser = JsonOutputParser(pydantic_object=AppIdea)

template = """
    Suggest an app my interest in {theme}.
    {format_instructions}
"""

prompt_choose_city = PromptTemplate(
    template=template,
    input_variables=["theme"],
    partial_variables={"format_instructions": parser.get_format_instructions()}
)


chain1 = prompt_choose_city | model | parser

folder = Path().cwd() / "aula2" / "output"
folder.mkdir(parents=True, exist_ok=True)
for theme in ["dog", "cat"]:
    result = chain1.invoke({"theme": theme})
    filename = theme + ".json"
    filename = folder / filename
    with open(filename, "w", encoding="utf-8") as json_file:
        json.dump(result, json_file, indent=4)