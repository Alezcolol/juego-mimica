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

let usedIndices = [];
let correctCount = 0;
let incorrectCount = 0;
let timerInterval;
let timer = 60;
let gameStarted = false;
let awaitingHorizontal = false;

document.getElementById('startButton').addEventListener('click', startGame);

function startGame() {
    usedIndices = [];
    correctCount = 0;
    incorrectCount = 0;
    timer = 60;
    document.getElementById('score').innerText = `Correctas: ${correctCount} | Incorrectas: ${incorrectCount}`;
    document.getElementById('timer').innerText = `Tiempo: ${timer}`;
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('wordDisplay').style.display = 'block';
    document.body.style.backgroundColor = '#87CEEB'; // Azul cielo
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
    if (usedIndices.length >= words.length) {
        document.getElementById('wordDisplay').innerText = "¡Juego terminado!";
        clearInterval(timerInterval);
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * words.length);
    } while (usedIndices.includes(randomIndex));

    usedIndices.push(randomIndex);
    document.getElementById('wordDisplay').innerText = words[randomIndex];
    awaitingHorizontal = true;
}

function endGame() {
    gameStarted = false;
    document.getElementById('wordDisplay').innerText = "¡Juego terminado!";
    document.getElementById('startButton').style.display = 'inline-block';
}

function handleOrientation(event) {
    if (!gameStarted && Math.abs(event.gamma) > 70 && Math.abs(event.beta) < 20) {
        document.getElementById('startButton').style.display = 'inline-block';
    }

    if (gameStarted && awaitingHorizontal && Math.abs(event.gamma) < 20 && Math.abs(event.beta) < 20) {
        document.body.style.backgroundColor = '#87CEEB'; // Azul cielo
        awaitingHorizontal = false;
        showRandomWord();
    }

    if (gameStarted && !awaitingHorizontal) {
        if (event.beta > 45) {
            // Incorrect - phone facing down
            document.body.style.backgroundColor = 'red';
            setTimeout(() => {
                incorrectCount++;
                document.getElementById('score').innerText = `Correctas: ${correctCount} | Incorrectas: ${incorrectCount}`;
                awaitingHorizontal = true;
            }, 1000);
        } else if (event.beta < -45) {
            // Correct - phone facing up
            document.body.style.backgroundColor = 'green';
            setTimeout(() => {
                correctCount++;
                document.getElementById('score').innerText = `Correctas: ${correctCount} | Incorrectas: ${incorrectCount}`;
                awaitingHorizontal = true;
            }, 1000);
        }
    }
}

window.addEventListener('deviceorientation', handleOrientation);
