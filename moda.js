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
        lista1Count[elemento] = 1;
    }
);