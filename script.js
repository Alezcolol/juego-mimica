const words = [
    "Correr", "Nadar", "Leer", "Cantar", "Bailar", 
    "Cocinar", "Jugar", "Dibujar", "Escribir", "Dormir",
    "Viajar", "Caminar", "Saltar", "Luchar", "Pintar",
    "Pescar", "Cazar", "Hornear", "Escalar", "Patinar",
    "Esquiar", "Cortar", "Tocar guitarra", "Montar en bicicleta", "Navegar",
    "Surfear", "Tomar fotos", "Meditar", "Trabajar", "Estudiar",
    "Comprar", "Vender", "Lavar", "Planchar", "Coser",
    "Tejer", "Llorar", "Reír", "Hablar", "Susurrar",
    "Gritar", "Estornudar", "Bostezar", "Cepillarse", "Afeitarse"
];

let timerInterval;
let timer = 60;
let gameStarted = false;

document.getElementById('startButton').addEventListener('click', startGame);

function startGame() {
    document.getElementById('startButton').style.display = 'none';
    startTimer();
    showRandomWord();
    gameStarted = true;
}

function startTimer() {
    timerInterval = setInterval(() => {
        timer--;
        document.getElementById('timer').innerText = `Tiempo: ${timer}`;
        if (timer <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

function showRandomWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    document.getElementById('wordDisplay').innerText = words[randomIndex];
}

function endGame() {
    gameStarted = false;
    document.getElementById('wordDisplay').innerText = "¡Juego terminado!";
    document.getElementById('startButton').style.display = 'inline-block';
}
