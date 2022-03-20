console.group("Funciones Cuadrado");
//const ladoCuadrado = 5;
function perimetroCuadrado(lado) {
    return lado *4;
}
function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();

//Triangulo
console.group("Funciones Tríangulo");
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 +base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

//Circulo

console.log("Funciones Círculo");
function diametroCirculo(radio) {
    return radio * 2;
}
const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

function calcularPerimetro() {
    const input = document.getElementById("inputPerimetro");
    const value = input.value;

    alert(perimetroCuadrado(value));
    
}

function calcularArea() {
    const input = document.getElementById("inputPerimetro");
    const value = input.value;

    alert(areaCuadrado(value));
    
}

function calcularPerimetro() {
    const input1 = document.getElementById("inputlado1");
    const input2 = document.getElementById("inputlado2");
    const input3 = document.getElementById("inputBase");

    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);

    alert(perimetroTriangulo(value1, value2, value3));
    
}