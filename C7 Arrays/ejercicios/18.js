function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let notas=0;
  let prom=0;
  for (let i=0;i<resultadosTest.length;i++){
    notas=notas+resultadosTest[i];
    prom= notas/resultadosTest.length;
  }
  return prom;
}

module.exports = promedioResultadosTest;
