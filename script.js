const btnIniciar = document.getElementById("btn-iniciar");
const containerPregunta = document.getElementById("container-pregunta");
const btnReiniciar = document.getElementById("btn-reiniciar");
const btnSiguiente = document.getElementById("btn-siguiente");
const txtPregunta = document.getElementById("txt-pregunta");
const containerRespuestas=document.getElementById("container-respuestas");
const respuesta1 = document.getElementById("res1")
const respuesta2 = document.getElementById("res2")
const respuesta3 = document.getElementById("res3")
const respuesta4 = document.getElementById("res4")
let indicePreguntaActual;


btnIniciar.addEventListener("click", iniciar);
btnReiniciar.addEventListener("click",reiniciar);
btnSiguiente.addEventListener("click", ()=>{
    indicePreguntaActual++
    mostrarPregunta();
})
function iniciar(){
    btnIniciar.classList.add("ocultar");
    btnReiniciar.classList.remove("ocultar");
    btnSiguiente.classList.remove("ocultar");
    indicePreguntaActual=0;
    containerPregunta.classList.remove("ocultar");
    mostrarPregunta();    
}
function reiniciar(){
    btnIniciar.classList.remove("ocultar");
    containerPregunta.classList.add("ocultar");
    btnReiniciar.classList.add("ocultar");
    btnSiguiente.classList.add("ocultar");
}

function mostrarPregunta(){
    txtPregunta.innerHTML=preguntas[indicePreguntaActual].pregunta;
    respuesta1.innerHTML=preguntas[indicePreguntaActual].respuestas[0].texto;
    respuesta2.innerHTML=preguntas[indicePreguntaActual].respuestas[1].texto;
    respuesta3.innerHTML=preguntas[indicePreguntaActual].respuestas[2].texto;
    respuesta4.innerHTML=preguntas[indicePreguntaActual].respuestas[3].texto;
}


 const preguntas = [
     {
       pregunta: '¿Cuánto es 2+2?',
       respuestas: [
         { texto: '4', correcto: true },
         { texto: '22', correcto: false },
         { texto:'5', correcto:false },
         { texto:'5', correcto:false },
       ]
     },
     {
       pregunta: 'Pregunta 2',
       respuestas: [
         { texto: 'respuesta', correcto: true },
         { texto: 'respuesta', correcto: true },
         { texto: 'respuesta', correcto: true },
         { texto: 'respuesta', correcto: true }
       ]
     },
     {
       pregunta: 'pregunta?',
       respuestas: [
         { texto: 'respuesta', correcto: false },
         { texto: 'respuesta', correcto: true },
         { texto: 'respuesta', correcto: false },
         { texto: 'respuesta', correcto: false }
       ]
     },
     {
       pregunta: 'pregunta',
       respuestas: [
         { texto: 'respuesta', correcto: false },
         { texto: 'respuesta', correcto: true }
       ]
     }
   ]

         
