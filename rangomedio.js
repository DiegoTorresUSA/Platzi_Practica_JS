
function calcRangoMedio(listaRango) {
    listaRango.sort(function (a,b){
        return a-b
    });
    console.log(listaRango);
    const minimo = Math.min.apply(null,listaRango);
    console.log(minimo);
    const maximo = Math.max.apply(null,listaRango);
    console.log(maximo);

    const rangoMedio = (minimo + maximo) / 2
    return rangoMedio;
}
