//capturamos los elementos del HTLM
const contenedor = document.getElementById("test-container");//obtenemos donde vamos a insertar las preguntas
const enviar = document.getElementById("boton");//obtenemos boton de confirmar el formulario
//guardamos en un array la pregunta, respuestas y respuesta correcta
const preguntas = [
  {
    pregunta: "1. ¿En qué año fue creado JavaScript?",
    respuestas: {
      a: "1995",
      b: "1990",
      c: "2000"
    },
    respuestaCorrecta: "a"
  },
  {
    pregunta: "2. Son lenguajes de programación, excepto:",
    respuestas: {
      a: "Python",
      b: "Java",
      c: "CSS"
    },
    respuestaCorrecta: "c"
  },
  {
    pregunta: "3. En JavaScript, para darle el nombre a una variable, objeto o función, debemos tener en cuenta que:",
    respuestas: {
      a: "No se pueden usar mayúsculas",
      b: "JavaScript no distingue entre mayúsculas y minúsculas",
      c: "JavaScript diferencia entre mayúsculas y minúsculas"
    },
    respuestaCorrecta: "c"
  },
  {
    pregunta: "4. ¿Cuáles de estas son marcas para la inserción del código JavaScript en las páginas HTML?",
    respuestas: {
      a: "< javascript _code > y < /javascript_code >",
      b: "< script > y < /script >",
      c: "< ?script > y < script? >"
    },
    respuestaCorrecta: "b"
  },
  {
    pregunta: "5. La llamada al código JavaScript debe colocarse en:",
    respuestas: {
      a: "La sección Body de la página",
      b: "Antes de la etiqueta HTML",
      c: "Puede colocarse en la sección Head o en Body"
    },
    respuestaCorrecta: "c"
  },
  {
    pregunta: "6. ¿Cuál es la instrucción usada para devolver un valor en una función de JavaScript?",
    respuestas: {
      a: "Send",
      b: "Return",
      c: "Value"
    },
    respuestaCorrecta: "b"
  },
  {
    pregunta: "7. Para concatenar cadenas de caracteres en JavaScript se usa el carácter:",
    respuestas: {
      a: "& (ampersand)",
      b: "+ (más)",
      c: ". (punto)"
    },
    respuestaCorrecta: "b"
  },
  {
    pregunta: "8. ¿En qué año fue creado HTML (HyperText Markup Language)?",
    respuestas: {
      a: "1990",
      b: "1988",
      c: "1980"
    },
    respuestaCorrecta: "c"
  },
  {
    pregunta: "9. ¿En qué año fue lanzado java al mercado?",
    respuestas: {
      a: "1995",
      b: "1999",
      c: "1993"
    },
    respuestaCorrecta: "a"
  },
  {
    pregunta: "10. ¿Quién fue el creador de JavaScript?",
    respuestas: {
      a: "Brendan Eich",
      b: "Bjarne Stroustrup",
      c: "James Gosling"
    },
    respuestaCorrecta: "a"
  }
];
//creamos funcion que inserta en el html las preguntas y respuestas
function mostrarTest() {
  const quiz = [];//declaramos array vacio para insertarle el quiz con el HTML
  
  preguntas.forEach((pregactual, npregunta) => {//utilizamos ciclo para recorrer el array de las preguntas
    const respuestas = [];//creamos array para almacenar respuestas
    for(letrarespuesta in pregactual.respuestas){//bucle para recorrer las respuestas de las preguntas
        //introducimos las respuestas en el HTML
        respuestas.push(
            `<label class="answers">
                <input type="radio" name="${npregunta}" value="${letrarespuesta}">
                ${letrarespuesta} : ${pregactual.respuestas[letrarespuesta]}
            </label>
            `
        );
    }
    //introducimos tanto la pregunta como respuestas al HTML
    quiz.push(
        `
        <div class="questions">
            <div class="cuestion"> ${pregactual.pregunta} </div>
            <div class="respuestas"> ${respuestas.join('')} </div>
        <div/>
        `
    );
  });

  contenedor.innerHTML = quiz.join('');//insertamos en el contenedor donde se van a insertar las respuestas (ya en el index.html)
}

mostrarTest();//ejecutamos la funcion de mostrar preguntas y respuestas en el HTML

function mostrarResultado(){//creamos funcion para verificar el puntaje obtenido
    const respuestas =contenedor.querySelectorAll(".respuestas");//seleccionamos el contenedor por su clase que contiene las respuestas
    const pregun =contenedor.querySelectorAll(".cuestion");
    let respuestasCorrectas = 0;//creamos contador para respuetas correctas

    preguntas.forEach((pregactual, npregunta) => {//bucle para recorrer las preguntas
        const todasLasRespuestas = respuestas[npregunta];//obtenemos todas las respuestas cada pregunta
        const respuestaelegida = `input[name='${npregunta}']:checked`;//obtenemos la respuesta elegida por el usuario
        const valueinput = (todasLasRespuestas.querySelector(respuestaelegida) || {}).value;//obtenemos el valor de la respuesta elegida el cual es estan como a b ó c

        if(valueinput == pregactual.respuestaCorrecta){//si la respuesta elegida es igual a la respuesta correcta sumara al resultado
            respuestasCorrectas++;
            pregun[npregunta].style.color= 'green';
        }else{
            pregun[npregunta].style.color= 'red';
        }
    });

    Swal.fire({//enviara una alerta con el  numero de respuestas correctas obtenidas en el quiz
        position: 'top-center',
           icon: 'success',
           title: '¡Felicidades!',
           text: "Usted ha acertado " + respuestasCorrectas + " preguntas de un total de "+ preguntas.length,
           showConfirmButton: true,
           confirmButtonColor: 'gray'
           })
}


    


enviar.addEventListener('click', mostrarResultado);//le agregamos un evento al boton para mostrar el resultado obtenido
