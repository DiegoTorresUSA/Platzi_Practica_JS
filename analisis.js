/*

@uthor DiegoT

                            */
//Helpers

//recorremos el arreglo el salario
const salariosCol = colombia.map(
     function(personita){
         return personita.salary;
     }
 );
console.log(salariosCol)

//ordenamos el nuevo arreglo
const salariosColSorted = salariosCol.sort(
    function (antiguo, nuevo){
        return antiguo - nuevo;
    }
);
console.log(salariosColSorted);

// calculamos si la lista es impar o par
function esPar(numerito) {
    return (numerito % 2 === 0);
    /* este if, lo podemos simplificar cpn la linea de encima
    if (numerito % 2 === 0){
        return true;
    }else {
        return false;
    }*/
}

//calculamos el promedio entre las dos personas
function calcularMedia(lista) {
    const suma = lista.reduce(
        function (elementoA = 0, elementoB) {
            return  elementoA + elementoB;
        }
    );
    const promedio = (suma / lista.length);
    return promedio;
}

//Calculadora de medianas
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    console.log(mitad);

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMedia([personaMitad1, personaMitad2]);
        return mediana;
    }else {
        const medio = lista[mitad];
        return medio;
    }
    return promedio;
}

//mediana del top10%
// el metodo splice, podemos extraer del array

const spliceStart = (salariosColSorted.length *90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salarioColTop10 = salariosColSorted.splice(
    spliceStart, spliceCount,
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);
const medianaTop10Col = medianaSalarios(salarioColTop10);
console.log({
    medianaGeneralCol,
    medianaTop10Col,
});