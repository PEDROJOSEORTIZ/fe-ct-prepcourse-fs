function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  /*let nuevoArreglo=[];
  for (let i=0;i<array.length;i++){
    if (array[i]==="Enero"){
      nuevoArreglo.push (array[i])
    }
    if (array[i]==="Marzo"){
      nuevoArreglo.push (array[i])
    }
    if (array[i]==="Noviembre"){
      nuevoArreglo.push (array[i])
    }
  }
if (nuevoArreglo.length=3)
{return nuevoArreglo;}
else {
  let mensaje="No se encontraron los meses pedidos."
return mensaje;
}*/
const mesesBuscados = ["Enero", "Marzo", "Noviembre"];
    // Array para guardar los meses encontrados
    const mesesEncontrados = [];
    
    // Recorrer el array original
    for (let i = 0; i < array.length; i++) {
        const mes = array[i];
        // Si el mes actual está en la lista de meses buscados, añadirlo al array de encontrados
        if (mesesBuscados.includes(mes)) {
            mesesEncontrados.push(mes);
        }
    }
    
    // Verificar si todos los meses buscados están en el array de encontrados
    if (mesesBuscados.every(mes => mesesEncontrados.includes(mes))) {
        return mesesEncontrados;
    } else {
        return "No se encontraron los meses pedidos";
    }
}

module.exports = mesesDelAño;
