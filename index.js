
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
alert ("Te damos la bienvenida "  + nombre +  ",en este test veremos que tanto sabes de la seleccion Argentina de futbol!!");

const si = "si";
const no = "no";

let comenzar = prompt ("¿Estas listo?");

if(comenzar == si){
         alert ("Genial, vamos a ver que tan argento sos!") 
        }if(comenzar == no){
         alert ("Que pena, bueno, nos veremos la proxima :/")
        };

const opcionA = "Lionel";
const opcionB = "Andres";
const opcionC = "Luis";

let correctas = 0
let primerPregunta = prompt ("Primera pregunta, cual es el Primer nombre de Messi? \
-Lionel \
-Andres \
-Luis")

if( primerPregunta == opcionA){
    correctas++
   alert  ("Es correcto, nuestro gran 10 se llama Lionel Andres Messi Cuccittini")
}else{
alert("mmmmmm no crack, sos Frances?")
}

const respuesta1 = "3";
const respuesta2 = "2";
const repsuesta3 = "4";

let segundaPregunta = prompt ("Segunda pregunta, cuantas copas del mundo gano Argentina? \
-2\
-3\
-4");
if(segundaPregunta==respuesta1){
    correctas++
    alert("muchaaaachooooosss, la respuesta es correctaaaaaa")
}else{
    alert("nop, creo que te equivocaste de pais:/")
}

const respuestaA = "5";
const respuestaB = "4";
const respuestaC = "6";

let tercerPregunta = prompt("Tercera pregunta, cuantos mundiales jugo Lionel Messi?\
-4 \
-5 \
-6")

if(tercerPregunta==respuestaA){
    correctas++
    alert("Correctooooo, Lionel Messi disputo 5 mundiales vistiendo la celeste y blanca.")
}else{
    alert("mmmmm no, creo que deberias revisar el historial.")
}

const opcion1 = "23";
const opcion2 = "1";
const opcion3 = "12";

let cuartaPregunta = prompt("Cuarta pregunta, que dorsal utiliza Damian Emiliano Martinez en la seleccion Argentina?\
-23 \
-1 \
-12")

if(cuartaPregunta==opcion1){
    correctas++
    alert("La respuesta es CORRECTA, Emiliano «Dibu» Martinez usa el dorsal 23 con nuestra seleccion.")
}else{
    alert("nope, lo siento pero esa no es la respuesta correcta.")
}

const rta1 = "Angel Di Maria";
const rta2= "Lautaro Martinez";
const rta3="Julian Alvarez";

let quintaPregunta = prompt("Quinta pregunta, cual de los siguientes jugadores anoto un gol en TODAS las finales que disputo la Scaloneta?\
-Lautaro Martinez\
-Julian Alvarez\
-Angel Di Maria")

if(quintaPregunta==rta1){
    correctas++
    alert("Correctooo, Angel Di Maria es el señor de las finales.")
}else{
    alert("La respuesta es incorrecta, creo que te perdiste algun golcito.")    
};

const opt1 ="10";
const otp2= "1";

let preguntaExtra = prompt ("Ahora, una pregunta de opinion personal, del 1 al 10, ¿que tanto te gusta Scaloni como DT?")

if(preguntaExtra > 9){
   alert("Amamos a Scaloni <3")
}else if(preguntaExtra > 5 && preguntaExtra < 10){
    alert("no lo se rick, parece falso")
}else{
    alert("Capo, Sos Frances?")
};


console.log("Bueno "+ nombre + " haz llegado al final del quiz, felicitaciones!!, haz acertado " + correctas + " de 5 preguntas que se evaluaban.")
console.log("tu nota final es " + correctas * 2)

saludarODespedir(false)