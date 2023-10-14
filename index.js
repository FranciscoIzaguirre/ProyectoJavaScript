alert("¡Bienvenido al Quiz de la Scaloneta!");
const nombreInput = document.getElementById("nombre");
        const preguntasDiv = document.getElementById("preguntas");
        const mensajeP = document.getElementById("mensaje");
        const resultadoP = document.getElementById("resultado");
        const respuestas = [1, 2, 2, 1, 3]; // Respuestas correctas

        let nombre = "";
        let preguntaActual = 0;
        let respuestasCorrectas = 0;

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
                mensajeP.textContent = preguntas[preguntaActual];
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
            resultadoP.textContent = `${nombre}, haz acertado ${respuestasCorrectas} de ${preguntas.length} preguntas.`;
        }

        const preguntas = [
            "Primera pregunta, cual es el Primer nombre de Messi? ",
            "Segunda pregunta, cuantas copas del mundo gano Argentina?",
            "Tercera pregunta, cuantos mundiales jugo Lionel Messi?",
            "Cuarta pregunta, que dorsal utiliza Damian Emiliano Martinez en la seleccion Argentina?",
            "Quinta pregunta, cual de los siguientes jugadores anoto un gol en TODAS las finales que disputo la Scaloneta?"
        ];

