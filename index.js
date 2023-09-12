
// la verdad que esto es un modelo provisorio, mas que nada para demostrar lo aprendido

// function saludar(){
//     alert("¡Bienvenido al Quiz de la Scaloneta!");
// }

function saludarODespedir(esSaludo) {
    if (esSaludo) {
        alert("¡Bienvenido al Quiz de la Scaloneta!");
    } else {
      alert("Espero que hayas disfrutado de este cuestionario tanto como yo desarrollarlo, nos vemos pronto en otras ediciones!!! ");
    }
  }

saludarODespedir(true);

let nombre = prompt ("Ingrese su nombre de usuario.");

while(nombre == "" || nombre == " "){
    nombre = prompt("Porfavor, ingrese su nombre de usuario para continuar.")
  }

alert ("Te damos la bienvenida "  + nombre +  ",en este test veremos que tanto sabes de la seleccion Argentina de futbol!!");

const si = "si";
const no = "no";

let comenzar = prompt ("¿Estas listo?");

if(comenzar == si){
         alert ("Genial, vamos a ver que tan argento sos!") 
        }if(comenzar == no){
         alert ("Que pena, bueno, nos veremos la proxima :/")
        };       

alert("Antes de comenzar con el cuestionario, te recordamos que las respuestas se van a contar siempre y cuando respondas con el numero de opcion(1,2 o 3), dicho esto, mucha suerte!!!")
function respuestaIncorrecta(){
    alert("mmmmm no crack, sos Frances?")
}
const opcionA = "1";
const opcionB = "2";
const opcionC = "3";

let correctas = 0
let primerPregunta = prompt ("Primera pregunta, cual es el Primer nombre de Messi? \
1- Lionel/ \
\
2- Andres/ \
\
3- Luis")

if( primerPregunta == opcionA){
    correctas++
   alert  ("Es correcto, nuestro gran 10 se llama Lionel Andres Messi Cuccittini")
}else{
    respuestaIncorrecta()
}

const respuesta2 = "1";
const respuesta1 = "2";
const repsuesta3 = "3";

let segundaPregunta = prompt ("Segunda pregunta, cuantas copas del mundo gano Argentina? \
1- 2/ \
\
2- 3/ \
\
3- 4/ ");
if(segundaPregunta==respuesta1){
    correctas++
    alert("muchaaaachooooosss, la respuesta es correctaaaaaa")
}else{
    respuestaIncorrecta()
}

const respuestaA = "2";
const respuestaB = "1";
const respuestaC = "3";

let tercerPregunta = prompt("Tercera pregunta, cuantos mundiales jugo Lionel Messi?\
1- 4/ \
\
2- 5/ \
\
3- 6")

if(tercerPregunta==respuestaA){
    correctas++
    alert("Correctooooo, Lionel Messi disputo 5 mundiales vistiendo la celeste y blanca.")
}else{
    respuestaIncorrecta()
}

const opcion1 = "1";
const opcion2 = "2";
const opcion3 = "3";

let cuartaPregunta = prompt("Cuarta pregunta, que dorsal utiliza Damian Emiliano Martinez en la seleccion Argentina?\
1- 23/ \
\
2- 1/ \
\
3- 12")

if(cuartaPregunta==opcion1){
    correctas++
    alert("La respuesta es CORRECTA, Emiliano «Dibu» Martinez usa el dorsal 23 con nuestra seleccion.")
}else{
    respuestaIncorrecta()
}

const rta1 = "3";
const rta2= "1";
const rta3="2";

let quintaPregunta = prompt("Quinta pregunta, cual de los siguientes jugadores anoto un gol en TODAS las finales que disputo la Scaloneta?\
1- Lautaro Martinez \
\
2- Julian Alvarez \
\
3- Angel Di Maria")

if(quintaPregunta==rta1){
    correctas++
    alert("Correctooo, Angel Di Maria es el señor de las finales.")
}else{
    respuestaIncorrecta()
};

const opt1 ="10";
const otp2= "1";

let preguntaExtra = prompt ("Ahora, una pregunta de opinion personal, del 1 al 10, ¿que tanto te gusta Scaloni como DT?")

if(preguntaExtra > 9){
   alert("Amamos a Scaloni <3")
}else if(preguntaExtra > 5 && preguntaExtra < 10){
    alert("no lo se rick, parece falso")
}else{
    respuestaIncorrecta()
};


alert("Bueno "+ nombre + " haz llegado al final del quiz, felicitaciones!!, haz acertado " + correctas + " de 5 preguntas que se evaluaban.")
alert("Tu nota final es " + correctas * 2)

saludarODespedir(false)