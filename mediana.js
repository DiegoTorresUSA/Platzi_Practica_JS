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

const lista1 = [
  1,
  200,
  300,
  800,
  40000000,
  900,
  7000
];

// puede ser que la lista sea par o impar
const mitadLista = parseInt(lista1.length / 2);

function esPar(numerito) {
    if (numerito % 2 ===0){
        return true
    }else {
        return false;
    }

}
let mediana;

// con el if, validamos si la lista es impar
if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista - 1];
    const elemento2 = lista1[mitadLista];
    
    const promedioElementos1y2 = calcularMediaAritmetica([
        elemento1, elemento2
    ]);
    mediana = promedioElementos1y2;
}else {
    // posicion de la mitad de la lista =  mediana
    mediana = lista1[mitadLista];
}


/****************************************
 *                                      *
 * Mismo Proceso pero con Funciones     *
 *                                      *
 ****************************************/

function mitadListaFuncion(listaFun) {

    // sacamos el conteo de posiciones y lo dividimos por 2
    const mediumList = parseInt(listaFun.length / 2) ;
    console.log(listaFun.length);
    console.log(mediumList);
    console.log(listaFun);
    let medium;

    // nos permite validar si es par o no un numero para integrar a la lista
    if (listaFun.length % 2 === 0){
        const position1 = listaFun[mediumList -1];
        const position2 = listaFun[mediumList];
        console.log(position1);
        console.log(position2);

        const promedio = calcularMediaAritmetica1([position1, position2]);
        console.log(promedio);
        medium = promedio;
    }else {
        medium = listaFun[mediumList];
    }
    return medium;
}

function calcularMediaAritmetica1(lista) {
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