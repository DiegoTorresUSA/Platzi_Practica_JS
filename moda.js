// Listas con corchetes
const lista1 = [
    1,2,3,1,2,3,4,2,2,2,1,
];

// objetos con llaves
const lista1Count = {

};

// con esta clase podemos recorrer el arreglo,
lista1.map(
    function (elemento){
        //debemos validar si el elmento ya existe
        if (lista1Count[elemento]){
            lista1Count[elemento] += 1;
        }else {
            lista1Count[elemento] = 1;
        }
    }
);
//según el ejercicio debemos devolvernos al array
const  lista1Array = Object.entries(lista1Count).sort(
    function (valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1];
    }
);

const moda = lista1Array[lista1Array.length - 1]

