function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
let duplicado = array.map(function(x){return x*2});
return duplicado;

}

module.exports = duplicarElementos;
