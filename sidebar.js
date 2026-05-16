let apiKey = localStorage.getItem("grokApiKey") || "";
let memory = JSON.parse(localStorage.getItem("grokMemory") || "[]");

function addMessage(text, isUser) {
  const chat = document.getElementById("chat");
  const msg = document.createElement("div");
  msg.className = isUser ? "text-right" : "text-left";
  msg.innerHTML = `<div class="${isUser ? 'bg-indigo-600 ml-auto' : 'bg-zinc-800'} inline-block max-w-[80%] p-3 rounded-2xl">${text}</div>`;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

async function sendMessage() {
  const input = document.getElementById("input");
  const text = input.value.trim();
  if (!text) return;
  
  addMessage(text, true);
  input.value = "";
  
  setTimeout(() => {
    addMessage("I'm here to help with this page. What would you like me to do?", false);
  }, 800);
}

function teachGrok() {
  const teaching = prompt("What do you want to teach Grok?");
  if (teaching) {
    memory.push(teaching);
    localStorage.setItem("grokMemory", JSON.stringify(memory));
    alert("Taught! Grok will remember this.");
  }
}

function openSettings() {
  const key = prompt("Enter your Grok API key (optional for full power):");
  if (key) {
    localStorage.setItem("grokApiKey", key);
    alert("API key saved!");
  }
}

window.onload = () => {
  addMessage("Hi! I'm Grok, ready to help on any page. Try asking me to fill forms or remember work tasks.", false);
};