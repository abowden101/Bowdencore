from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from pydantic import BaseModel
import ollama
from typing import Optional
import os

app = FastAPI(title="Bowden Tech Local Grok MCP - Orlando MSP")

class MCPQuery(BaseModel):
    prompt: str
    mode: Optional[str] = "general"   # "general" or "ticket"

# Default Context
DEFAULT_CONTEXT = """You are GrokMCP, the private AI assistant for Bowden Tech Solutions, a lean Orlando-based MSP.

Mission: Deliver reliable, affordable managed IT and cybersecurity to Central Florida SMBs with fast same-day local response and flat-rate pricing.

Key Strengths:
- Same-day onsite response in Orlando, Winter Park, Lake Nona, Kissimmee, Maitland & Altamonte Springs
- Honest flat-rate monthly pricing with no long contracts
- Founder-led by Antonio Bowden (Network & Security Engineer)
- Practical, cost-conscious solutions for dental offices, law firms, property management, and other Central Florida SMBs

Always be helpful, proactive, and emphasize local advantage."""

# Ticket Assistant Mode Context (Stronger for Phase 2)
TICKET_CONTEXT = """You are GrokMCP Ticket Assistant for Bowden Tech Solutions (Orlando MSP).

Your job is to help Antonio process client tickets quickly and professionally.

When a client email or ticket is provided:
1. Categorize the ticket (Hardware, Software, Network, Security, Cloud, Onboarding, Other)
2. Assess urgency (Low, Medium, High, Critical)
3. Suggest clear next steps (remote fix, onsite visit, escalation)
4. Draft a professional, friendly reply email
5. Recommend any preventive measures or upsell opportunities (e.g. better backup, security package)

Always keep replies clear, empathetic, and action-oriented.
Emphasize our local Orlando advantage and flat-rate value when appropriate.
Current location: Orlando, Florida."""

@app.post("/mcp/query")
async def query_mcp(q: MCPQuery):
    try:
        system_prompt = TICKET_CONTEXT if q.mode == "ticket" else DEFAULT_CONTEXT
        
        response = ollama.chat(
            model='llama3.2:3b',
            messages=[
                {'role': 'system', 'content': system_prompt},
                {'role': 'user', 'content': q.prompt}
            ]
        )
        return {"status": "success", "response": response['message']['content']}
    except Exception as e:
        error_msg = str(e)
        if "model" in error_msg.lower() and "not found" in error_msg.lower():
            error_msg = "Model not found. Run: ollama pull llama3.2:3b"
        return {"status": "error", "response": error_msg}

@app.get("/health")
async def health():
    return {"status": "online", "message": "Bowden Tech Local Grok MCP is running 🚀 | Orlando MSP Edition"}

@app.get("/chat", response_class=HTMLResponse)
async def get_chat():
    try:
        with open("chat.html", "r", encoding="utf-8") as f:
            return f.read()
    except FileNotFoundError:
        return "<h1>chat.html not found. Please create the file.</h1>"

if __name__ == "__main__":
    print("🚀 Bowden Tech Local Grok MCP Starting...")
    print("   General Chat: http://127.0.0.1:8000/chat")
    print("   Health: http://127.0.0.1:8000/health")
    print("\nTip: Use mode='ticket' for ticket analysis and email drafting.")
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)