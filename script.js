const btnIniciar = document.getElementById("btn-iniciar");
const containerPregunta = document.getElementById("container-pregunta");
const btnReiniciar = document.getElementById("btn-reiniciar");
const btnSiguiente = document.getElementById("btn-siguiente");
const txtPregunta = document.getElementById("txt-pregunta");
const containerRespuestas=document.getElementById("container-respuestas");
const arrRespuestas=containerRespuestas.getElementsByClassName("res")
const respuesta1 = document.getElementById("res1")
const respuesta2 = document.getElementById("res2")
const respuesta3 = document.getElementById("res3")
const respuesta4 = document.getElementById("res4")
const botonesCategorias = document.getElementById("botones-categorias")
const btnCicloBasico = document.getElementById("btn-ciclo-basico")
const btnProgramacion = document.getElementById("btn-programacion")
const btnMultimedia = document.getElementById("btn-multimedia")
const elementoContador=document.getElementById("timer")
let indicePreguntaActual;
let puntaje = 0
const elementoPuntaje = document.createElement("h1")
console.log(arrRespuestas)
btnIniciar.addEventListener("click", iniciar);
btnReiniciar.addEventListener("click",reiniciar);
btnSiguiente.addEventListener("click", ()=>{
    indicePreguntaActual++
    reset()
    mostrarPregunta()
    detenerTiempo()
    iniciarTiempo(15)
})
Array.from(botonesCategorias.children).forEach(categoria =>{
  categoria.addEventListener("click", (e)=>{
   if (e.target==btnCicloBasico) {
    iniciarCicloBasico()
    console.log("ciclo basico")
   }
   if (e.target==btnProgramacion) {
    iniciarProgramacion()
    console.log("programacion")
   }
   if (e.target==btnMultimedia) {
    iniciarMultimedia()
    console.log("multimedia")
   }
  })
})
function iniciar(){
    btnIniciar.classList.add("ocultar")
    btnCicloBasico.classList.remove("ocultar")
    btnProgramacion.classList.remove("ocultar")
    btnMultimedia.classList.remove("ocultar")
}
function iniciarCicloBasico(){
    indicePreguntaActual=0;
    preguntas=preguntasCicloBasico
    containerPregunta.classList.remove("ocultar");
    detenerTiempo
    iniciarTiempo(15)
    mostrarPregunta()
    ocultarCategorias()
    ocultarPuntaje()    
    desocultar()
}
function iniciarProgramacion(){
    indicePreguntaActual=0;
    preguntas=preguntasProgramacion
    containerPregunta.classList.remove("ocultar");
    detenerTiempo
    iniciarTiempo(15)
    mostrarPregunta()
    ocultarCategorias()
    ocultarPuntaje()    
    desocultar()
}
function iniciarMultimedia(){
    indicePreguntaActual=0;
    preguntas=preguntasMultimedia
    containerPregunta.classList.remove("ocultar");
    detenerTiempo
    iniciarTiempo(15)
    mostrarPregunta()
    ocultarCategorias()
    ocultarPuntaje()    
    desocultar()
}
function desocultar(){
  btnReiniciar.classList.remove("ocultar");
  btnSiguiente.classList.remove("ocultar");
}
function ocultarCategorias() {
  btnCicloBasico.classList.add("ocultar")
  btnProgramacion.classList.add("ocultar")
  btnMultimedia.classList.add("ocultar")
}
function reiniciar(){
    btnIniciar.classList.remove("ocultar");
    containerPregunta.classList.add("ocultar");
    btnReiniciar.classList.add("ocultar");
    btnSiguiente.classList.add("ocultar");
    btnCicloBasico.classList.add("ocultar")
    btnProgramacion.classList.add("ocultar")
    btnMultimedia.classList.add("ocultar")
    detenerTiempo
   reset()
   ocultarPuntaje()
}

function mostrarPregunta(){
  reset()
    txtPregunta.innerHTML=preguntas[indicePreguntaActual].pregunta;
    preguntas[indicePreguntaActual].respuestas.forEach(respuesta => {
      const boton=document.createElement("button")
      boton.innerText=respuesta.texto
      boton.classList.add("res")
      
      if(respuesta.correcto){
        boton.dataset.correcto=respuesta.correcto
        
      }
     boton.addEventListener("click",seleccionarRespuesta)
      containerRespuestas.appendChild(boton)
    });
    
}
function reset(){
  btnSiguiente.classList.add("ocultar")
  while(containerRespuestas.firstChild){
    containerRespuestas.removeChild(containerRespuestas.firstChild)
  }
}
function seleccionarRespuesta(e){
  const respuestaSeleccionada = e.target
  const correcto=respuestaSeleccionada.dataset.correcto
  Array.from(containerRespuestas.children).forEach(btn=>{
    cambiarColor(btn, btn.dataset.correcto)
  })
  if(preguntas.length>indicePreguntaActual+1){
    btnSiguiente.classList.remove("ocultar")
  } else{
    btnReiniciar.classList.remove("ocultar")
    mostrarPuntaje()
  }
  if(e.target.dataset.correcto){
    puntaje++
  }
  detenerTiempo()
}
function cambiarColor(elemento, correcto){
  borrarColor(elemento)
  if (correcto){
    elemento.classList.add("correcto")
  } else{
    elemento.classList.add("incorrecto")
  }
}

function borrarColor(elemento){
  elemento.classList.remove("correcto")
  elemento.classList.remove("incorrecto")
}
let contador
function iniciarTiempo(tiempo){
  contador=setInterval(timer, 1000)
  function timer(){
    elementoContador.innerHTML=tiempo
    tiempo--
    if(tiempo<0){
      clearInterval(contador)
      elementoContador.innerHTML="15"
    }
  }
}
function detenerTiempo(){
  clearInterval(contador)
}

function mostrarPuntaje(){
  elementoPuntaje.classList.remove("ocultar")
    elementoPuntaje.innerHTML = `Puntaje: ${puntaje}`
    containerPregunta.appendChild(elementoPuntaje)
}

function ocultarPuntaje(){
  puntaje=0
  elementoPuntaje.classList.add("ocultar")
}

let preguntas = []

 const preguntasCicloBasico = [
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

   const preguntasProgramacion = [
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

  const preguntasMultimedia = [
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
