function CalcularModa(array) {
    const arrayLista ={
    };
    //recorremos el arreglo para hacer el conteo
    array.map(
        function (posicion) {
            //validamos si el elmento existe
            if (arrayLista[posicion]){
                arrayLista[posicion] += 1;
            }else {
                arrayLista[posicion] = 1;
            }
        }
    );
    console.log(array);

    const nuevoArray = Object.entries(arrayLista).sort(
        function (acumulado, nuevoValor){
            return acumulado[1] - nuevoValor[1];
        }
    );
    console.log(nuevoArray);
    const moda1 = nuevoArray[nuevoArray.length - 1];
    return moda1;
}