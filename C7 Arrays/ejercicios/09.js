function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:

   let long=array.length;
   let num= Math.round (Math.random());
   return array[num];

}

module.exports = obtenerElementoAleatorio;
