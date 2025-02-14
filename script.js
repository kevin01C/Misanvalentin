const botonNo = document.getElementById("no");
const botonYes = document.getElementById("yes");
const noMessage = document.getElementById("noMessage");
const card = document.getElementById("card");
let clickCount = 0;

// Mensajes personalizados para cada clic en "No"
const mensajesNo = [
    "¿Estás segura que no? 😢",
    "¿No me quieres? 💔",
    "¿Por qué no? 🥺",
    "Di que sí... 🙏",
    "Estoy triste porque me dices que no... 😞",
    "¿De verdad no quieres serlo? 😭",
    "Ya veo que no quieres serlo... 😔"
];

botonNo.addEventListener("click", function () {
    if (clickCount < mensajesNo.length) {
        noMessage.textContent = mensajesNo[clickCount]; // Muestra el mensaje correspondiente
        clickCount++;
    }

    if (clickCount === mensajesNo.length) {
        botonNo.disabled = true; // Desactiva el botón "No" después del séptimo clic
        noMessage.textContent = "Ya no puedes decir que no... 😓";
    }
});

botonYes.addEventListener("click", function () {
    document.querySelector(".container").style.display = "none"; // Oculta la pregunta
    card.style.display = "block"; // Muestra la carta con mensaje bonito
    card.classList.add("open-card"); // Agrega clase para animación de apertura
});

// Crear corazones que caen
function createFallingHearts() {
    for (let i = 0; i < 5; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart-fall");
        heart.textContent = "❤️";
        document.body.appendChild(heart);
    }
}

createFallingHearts();
