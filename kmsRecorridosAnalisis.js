//recorremos el arreglo
const arrayKmsRecorridos = kmsRecorridos.map(
   function(kms){
       return kms.kms;
   }
);
console.log(arrayKmsRecorridos);

//averiguamos si es arreglo es par o impar
function esPar(lista) {
    return lista.length % 2 === 0;
}

//ordenamos el arreglo
const kmsRecorridosSorted = arrayKmsRecorridos.sort(
   function (elementoA, elementoB){
       return elementoA -elementoB;
});

function calcularPromedio(lista) {
    const sumaLista = lista.reduce(
        function (elementoA = 0, elementoB){
            return elementoA + elementoB;
        }
    );
    const promedio = (sumaLista / lista.length);
    return promedio;
    console.log(promedio);
}

function calculoMediaKms(lista) {
    const mitadLista = lista.length / 2;
    console.log(mitadLista);

    if (esPar(lista.length)){
        const kmsMitad = lista[mitadLista - 1];
        const kmsMitad1 = lista[mitadLista]

        const media = calcularPromedio([kmsMitad, kmsMitad1]);
        return media;
    }else {
        const medio = lista[mitadLista];
        return medio;
    }
    return promedio;
}

const spliceStart = (kmsRecorridosSorted.length * 90) / 100;
const spliceCount = (kmsRecorridosSorted.length - spliceStart);

const kmsTop10 = kmsRecorridosSorted.splice(
    spliceStart, spliceCount
);

