@echo off
title Bowden Tech Solutions - Local Grok MCP
echo ================================================
echo   Bowden Tech Solutions
echo   Orlando MSP • Local Grok MCP
echo ================================================

cd /d C:\BowdenTech\GrokMCP

echo [1] Starting Ollama engine...
start "Ollama" ollama serve

timeout /t 12 /nobreak >nul

echo [2] Starting MCP Server...
start "MCP Server" python mcp_server.py

timeout /t 5 /nobreak >nul

echo [3] Opening Grok Chat Widget...
start "" http://127.0.0.1:8000/chat

echo.
echo All services launched successfully!
echo You can now use your private MSP AI assistant.
pause