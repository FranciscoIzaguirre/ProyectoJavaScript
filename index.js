const btnInicio = document.getElementById("btnInicio");
const reiniciarButton = document.getElementById("reiniciar");
const nombreInput = document.getElementById("nombre");
const preguntasDiv = document.getElementById("preguntas");
const mensajeP = document.getElementById("mensaje");
const resultadoP = document.getElementById("resultado");
const opcionesButtons = preguntasDiv.querySelectorAll("button");

btnInicio.addEventListener("click", iniciarQuiz);

opcionesButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const opcion = button.getAttribute("data-opcion");
        responder(parseInt(opcion)); 
    });
});

reiniciarButton.addEventListener("click", reiniciarCuestionario);

let nombre = "";
let preguntaActual = 0;
let respuestasCorrectas = 0;

let boton = document.getElementById("btnInicio")
boton.addEventListener("click", respuestaClick)
function respuestaClick() {
    Swal.fire({
        title: "Bienvenido " + nombre + ",te deseamos muchisima suerte en el quiz, vamos a ver que tan Argento sos!!!",
        icon: 'success',
        showConfirmButton: false,
        timer: 2000
    })
}
function iniciarQuiz() {
    const preguntasJSON = localStorage.getItem("preguntas");
    const preguntas = JSON.parse(preguntasJSON);

    if (preguntas) {
        nombre = nombreInput.value;
        if (nombre) {
            nombreInput.style.display = "none";
            preguntasDiv.style.display = "block";
            mostrarSiguientePregunta();
        }
    } else {
        console.error("No se pudieron cargar las preguntas desde el localStorage.");
    }

    fetch("preguntas.json")
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem("preguntas", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error al obtener las preguntas:", error);
    });
}

function mostrarSiguientePregunta() {
    const preguntas = JSON.parse(localStorage.getItem("preguntas"));

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
        Swal.fire({
            title: "Respuesta Correcta",
            text: "MUCHAAACHOOOSSS!!!",
            icon: "success",
        });
    } else {
        Swal.fire({
            title: "Respuesta Incorrecta",
            text: "mmm, sos Frances?",
            icon: "error",
        });
    }

    preguntaActual++;
    mostrarSiguientePregunta();
}

function mostrarResultado() {
    preguntasDiv.style.display = "none";
    resultadoP.style.display = "block";
    resultadoP.textContent = "Felicitaciones, " + nombre + ", haz acertado " + respuestasCorrectas + " de " + preguntas.length + " preguntas.";
}

function reiniciarCuestionario() {
    nombre = "";
    preguntaActual = 0;
    respuestasCorrectas = 0;
    
    reiniciarButton.style.display = "none";
    nombreInput.style.display = "block";
    preguntasDiv.style.display = "none";

    nombreInput.value = "";
    mensajeP.textContent = "";
    resultadoP.textContent = "";

    btnInicio.style.display = "block";
}


