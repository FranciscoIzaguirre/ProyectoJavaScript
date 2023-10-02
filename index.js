

alert("¡Bienvenido al Quiz de la Scaloneta!");

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


class Pregunta {
    constructor(pregunta, opt1, opt2, opt3, correcta) {
        this.pregunta = pregunta;
        this.respuestas = [opt1, opt2, opt3];
        this.correcta = correcta;
    }
}

let preguntas = [];

preguntas.push(new Pregunta ("Primera pregunta, cual es el Primer nombre de Messi?", "Lionel" ,"Andres", "Luis", 1))
preguntas.push(new Pregunta ("Segunda pregunta, cuantas copas del mundo gano Argentina?","2", "3", "4", 2))
preguntas.push(new Pregunta ("Tercera pregunta, cuantos mundiales jugo Lionel Messi?", "4" ,"5", "6", 2))
preguntas.push(new Pregunta ("Cuarta pregunta, que dorsal utiliza Damian Emiliano Martinez en la seleccion Argentina?", "23" ,"1", "12", 1))
preguntas.push(new Pregunta ("Quinta pregunta, cual de los siguientes jugadores anoto un gol en TODAS las finales que disputo la Scaloneta?", "Lautaro Martinez" ,"Julian Alvarez", "Angel Di Maria", 3))

function respuestaIncorrecta(){
    alert("mmmmm no crack, sos Frances?")
}
let correctas = 0;

    preguntas.forEach((pregunta, index) => {
        const respuestaUsuario = prompt(
          pregunta.pregunta +
            "\nOpciones:\n1. " +
            pregunta.respuestas[0] +
            "\n2. " +
            pregunta.respuestas[1] +
            "\n3. " +
            pregunta.respuestas[2]
        );
      
        if (respuestaUsuario === pregunta.correcta.toString()) {
          correctas++;
          alert("Muchaachooosss, Respuesta Correcta!!");
        } else {
          respuestaIncorrecta();
        }
      });

let preguntaExtra = prompt ("Ahora, una pregunta de opinion personal, del 1 al 10, ¿que tanto te gusta Scaloni como DT?")

if(preguntaExtra > 9){
   alert("Amamos a Scaloni <3")
}else if(preguntaExtra > 5 && preguntaExtra< 10){
    alert("no lo se rick, parece falso")
}else{
    respuestaIncorrecta()
};


alert("Bueno "+ nombre + " haz llegado al final del quiz, felicitaciones!!, haz acertado " + correctas + " de 5 preguntas que se evaluaban.")
alert("Tu nota final es " + correctas * 2)

alert("Espero que hayas disfrutado de este cuestionario tanto como yo desarrollarlo, nos vemos pronto en otras ediciones!!! ");