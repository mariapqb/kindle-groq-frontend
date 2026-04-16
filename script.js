const form = document.getElementById("chat-form");
const promptInput = document.getElementById("prompt");
const responseBox = document.getElementById("response");

// Cambia esta URL por la de tu backend publicado
const API_URL = "https://TU-BACKEND.onrender.com/ask";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const prompt = promptInput.value.trim();
  if (!prompt) return;

  responseBox.textContent = "Consultando...";

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`);
    }

    const data = await res.json();
    responseBox.textContent = data.response || "Sin respuesta.";
  } catch (error) {
    responseBox.textContent = "Error al consultar el backend: " + error.message;
  }
});