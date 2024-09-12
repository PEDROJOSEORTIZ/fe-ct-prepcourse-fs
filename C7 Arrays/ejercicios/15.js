function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let valorMayor=array[0];
  let pos=0;
  for(let i=0;i<array.length;i++){
if (array[i]>=valorMayor)
  {
    valorMayor=array[i]
    pos=i;
}
}
return valorMayor, pos;

}

module.exports = encontrarIndiceMayor;
