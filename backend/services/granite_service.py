import os
from dotenv import load_dotenv

from ibm_watsonx_ai import Credentials
from ibm_watsonx_ai.foundation_models import ModelInference

load_dotenv()

credentials = Credentials(
    url=os.getenv("IBM_URL"),
    api_key=os.getenv("IBM_API_KEY")
)

PROJECT_ID = os.getenv("IBM_PROJECT_ID")

model = ModelInference(
    model_id="ibm/granite-4-h-small",
    credentials=credentials,
    project_id=PROJECT_ID,
    params={
        "decoding_method": "greedy",
        "max_new_tokens": 800,
        "min_new_tokens": 50,
        "temperature": 0.1,
        "repetition_penalty": 1.05
    }
)


def generate_tikz(user_prompt):

    prompt = f"""
You are a professional LaTeX TikZ engineer.

Your task is to generate ONLY valid TikZ code.

Rules:
- Return ONLY TikZ code.
- Do NOT explain.
- Do NOT write English text.
- Do NOT use Markdown.
- Output must start with \\begin{{tikzpicture}}
- Output must end with \\end{{tikzpicture}}

User Request:
{user_prompt}
"""

    response = model.generate_text(prompt=prompt)

    return response