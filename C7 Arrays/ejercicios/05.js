function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:

  let nuevo=array;
  nuevo.unshift(elemento);
  return nuevo;
}

module.exports = agregarItemAlComienzoDelArray;
