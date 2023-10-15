
const nombreInput = document.getElementById("nombre");
const preguntasDiv = document.getElementById("preguntas");
const mensajeP = document.getElementById("mensaje");
const resultadoP = document.getElementById("resultado");
const respuestas = [1, 2, 2, 1, 3, 2, 1, 1, 3, 2]; // Respuestas correctas

localStorage.setItem("respuestas", JSON.stringify(respuestas));

let nombre = "";
let preguntaActual = 0;
let respuestasCorrectas = 0;

let boton = document.getElementById("btnInicio")
boton.addEventListener("click", respuestaClick)
function respuestaClick() {
    alert("Bienvenido " + nombre + ",te deseamos muchisima suerte en el quiz, vamos a ver que tan Argento sos!!!")
}

function iniciarQuiz() {
    nombre = nombreInput.value;
    if (nombre) {
        nombreInput.style.display = "none";
        preguntasDiv.style.display = "block";
        mostrarSiguientePregunta();
    }
}

function mostrarSiguientePregunta() {
    if (preguntaActual < preguntas.length) {
        mensajeP.textContent = preguntas[preguntaActual].pregunta;
        const opciones = preguntas[preguntaActual].opciones;
        const botones = preguntasDiv.querySelectorAll("button");
        for (let i = 0; i < opciones.length; i++) {
            botones[i].textContent = opciones[i];
        }
    } else {
        mostrarResultado();
    }
}

function responder(opcion) {
    if (opcion === respuestas[preguntaActual]) {
        respuestasCorrectas++;
    }
    preguntaActual++;
    mostrarSiguientePregunta();
}

function mostrarResultado() {
    preguntasDiv.style.display = "none";
    resultadoP.style.display = "block";
    resultadoP.textContent = "felicitaciones!!!" + nombre + " , haz acertado " + respuestasCorrectas + " de " + preguntas.length + " preguntas.";

}

const preguntas = [
    { pregunta: "Primera pregunta, cual es el Primer nombre de Messi?", opciones: ["Lionel", "Andres", "Luis"] },
    { pregunta: "Segunda pregunta, cuantas copas del mundo gano Argentina?", opciones: ["2", "3", "4"] },
    { pregunta: "Tercera pregunta, cuantos mundiales jugo Lionel Messi?", opciones: ["4", "5", "6"] },
    { pregunta: "Cuarta pregunta, que dorsal utiliza Damian Emiliano Martinez en la seleccion Argentina?", opciones: ["23", "1", "12"] },
    { pregunta: "Quinta pregunta, cual de los siguientes jugadores anoto un gol en TODAS las finales que disputo la Scaloneta?", opciones: ["Lautaro Martinez", "Julian Alvarez", "Angel Di Maria"] },
    { pregunta: "Sexta pregunta, Cual fue el mayor numero de partidos invictos que mantuvo el conjunto de Scaloni?", opciones: ["30", "36", "40"] },
    { pregunta: "Septima pregunta, a que pais le gano Argentina en la final de la copa America?", opciones: ["Brasil", "Uruguay", "Venezuela"] },
    { pregunta: "Octava pregunta, Quien es el maximo goleador de la Era Scaloni?", opciones: ["Lionel Messi", "Lautaro Martinez", "Angel Di Maria"] },
    { pregunta: "Novena pregunta, Cuantos titulos tiene Lionel Messi con la Celeste y blanca? ", opciones: ["3", "6", "5"] },
    { pregunta: "Decima pregunta, esta es para verdaderos aficionados, Ante el partido de eliminatorias contra Paraguay, Emiliano Martinez rompio un record, El arquero del combinado nacional se convirtió en el Arquero con mayor tiempo sin que le conviertan goles, cuanto tiempo fue? ", opciones: ["550 minutos", "622 minutos", "300 minutos"] },
];

function reiniciarCuestionario() {
    nombre = "";
    preguntaActual = 0;
    respuestasCorrectas = 0;
    
    const reiniciarButton = document.getElementById("reiniciar");
    reiniciarButton.style.display = "none";

    
    nombreInput.style.display = "block";
    preguntasDiv.style.display = "none";
    resultadoP.style.display = "none";
    resultadoOpinionP.style.display = "none";

    
    nombreInput.value = "";
    mensajeP.textContent = "";
    resultadoP.textContent = "";
    opinionInput.value = "";
    resultadoOpinionP.textContent = "";


    iniciarButton.style.display = "block";
}


