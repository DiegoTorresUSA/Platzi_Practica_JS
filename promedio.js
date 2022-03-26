const lista1 = [
    100,
    200,
    300,
    500,
];

let sumaLista1 = 0;

for (let i = 0; i < lista1.length; i++) {
    sumaLista1 = sumaLista1 + lista1[i];
}

const promedioLista = sumaLista1 / lista1.length;
console.log("El promedio de valores es: " + promedioLista);

function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    //
    // for (let i = 0; i <lista.length ; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }
    
    // metodo .reduce nos permite recorre un array, y a través 
    // de una funcion recibe lo que vayamos a querer, para este caso
    // valorAcumulado almacena el valor de cada iteración.
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = (sumaLista / lista.length);
    
    return promedioLista;
}