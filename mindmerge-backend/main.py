from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
  
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class QuestionRequest(BaseModel):
    text: str

@app.post("/improve")
async def improve_question(req: QuestionRequest):

    # 🔹 STEP 1: STRUCTURE DATA (SOURCE OF TRUTH)

    structured = {
        "title": "Why does React useState log the previous state value after updating?",
        "sections": [
            {
                "type": "text",
                "label": "Problem Description",
                "content": "I am using React's useState hook..."
            },
            {
                "type": "code",
                "label": "Code Example",
                "content": req.text,
                "language": "javascript"
            },
            {
                "type": "text",
                "label": "Observed Behavior",
                "content": "UI updates correctly but console shows old value"
            },
            {
                "type": "text",
                "label": "Main Question",
                "content": "Why is state not updated immediately?"
            }
        ]
    }

    # 🔹 STEP 2: BUILD BLOCKS (FOR UI CONTROL)

    blocks = []

    # title
    blocks.append({
        "type": "title",
        "content": structured["title"]
    })

    # sections
    for section in structured["sections"]:
        blocks.append({
            "type": section["type"],
            "label": section["label"],
            "content": section["content"],
            "language": section.get("language")
        })

    # 🔹 STEP 3: BUILD MARKDOWN (FOR QUICK RENDER)

    md_parts = [f"## {structured['title']}"]

    for section in structured["sections"]:
        md_parts.append(f"\n### {section['label']}")

        if section["type"] == "code":
            md_parts.append(f"```{section.get('language', '')}\n{section['content']}\n```")
        else:
            md_parts.append(section["content"])

    markdown = "\n".join(md_parts)

    # 🔹 FINAL RESPONSE

    return {
        "markdown": markdown,
        "blocks": blocks
    }