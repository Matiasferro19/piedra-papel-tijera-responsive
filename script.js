document.addEventListener("DOMContentLoaded", () => {
  // Espero a que el DOM esté completamente cargado antes de ejecutar el código

  const botones = document.querySelectorAll(".opcion"); // Selecciono todos los botones con clase "opcion"
  const pJugador = document.getElementById("eleccion-jugador"); // Parrafo para mostrar la elección del jugador
  const pComputadora = document.getElementById("eleccion-computadora"); // Parrafo para mostrar la elección de la computadora
  const pGanador = document.getElementById("ganador"); // Parrafo para mostrar el resultado de la ronda
  const pPuntuacion = document.getElementById("puntuacion"); // Parrafo para mostrar la puntuación total

  let puntosJugador = 0; // Contador de puntos del jugador
  let puntosCompu = 0;   // Contador de puntos de la computadora

  // Recorro cada botón para asignarle un evento de clic
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      // Cuando se hace clic en un botón:

      let eleccionJugador = boton.getAttribute("data-eleccion"); 
      // Obtengo la elección del jugador desde el atributo "data-eleccion" del botón

      const opciones = ["Piedra", "Papel", "Tijera"]; 
      // Defino las opciones posibles para la computadora

      const indiceAleatorio = Math.floor(Math.random() * opciones.length); 
      // Genero un número aleatorio entre 0 y 2 para elegir una opción de la computadora

      const eleccionComputadora = opciones[indiceAleatorio]; 
      // Asigno la opción elegida por la computadora

      // Mostramos las elecciones en pantalla
      pJugador.textContent = "Tu elección: " + eleccionJugador;
      pComputadora.textContent = "Bot: " + eleccionComputadora;

      let mensaje = ""; // Variable para guardar el mensaje del resultado

      // Comparo las elecciones para determinar el resultado
      if (eleccionJugador === eleccionComputadora) {
        mensaje = `Empate! Ambos eligieron ${eleccionJugador}.`; 
        // Caso de empate
      } else if (
        (eleccionJugador === "Piedra" && eleccionComputadora === "Tijera") ||
        (eleccionJugador === "Papel" && eleccionComputadora === "Piedra") ||
        (eleccionJugador === "Tijera" && eleccionComputadora === "Papel")
      ) {
        mensaje = `¡Ganaste! ${eleccionJugador} le gana a ${eleccionComputadora}.`; 
        // Casos en que gana el jugador
        puntosJugador++; // Sumo un punto al jugador
      } else {
        mensaje = `Perdiste! ${eleccionComputadora} le gana a ${eleccionJugador}.`; 
        // Casos en que gana la computadora
        puntosCompu++; // Sumo un punto a la computadora
      }

      pGanador.textContent = "Resultado: " + mensaje; 
      // Muestro el resultado de la ronda

      pPuntuacion.textContent = `Jugador: ${puntosJugador} | Computadora: ${puntosCompu}`; 
      // Actualizo y muestro el marcador
    });
    // Botón de reinicio
      const btnReiniciar = document.getElementById("reiniciar");

      btnReiniciar.addEventListener("click", () => {
      puntosJugador = 0;
      puntosCompu = 0;
      pPuntuacion.textContent = `Jugador: ${puntosJugador} | Computadora: ${puntosCompu}`;
      pJugador.textContent = "Tu elección:";
      pComputadora.textContent = "Bot:";
      pGanador.textContent = "Resultado: La partida fue reiniciada.";
  });
  
  });


});
