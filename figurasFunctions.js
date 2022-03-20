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
    return lado1 + lado2 + base;
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


//Aquí interactuamos con HTML

function calcularPerimetro() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularArea() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);

}

// Aqui conectamos el traingulo

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTrianguloLado1");
    const input2 = document.getElementById("InputTrianguloLado2");
    const input3 = document.getElementById("InputTrianguloBase");
    
    const lado1 = Number(input1.value);
    const lado2 = Number(input2.value);
    const base = Number(input3.value);
    
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

//área del triangulo

function calcularAreaTri() {
    const input1 = document.getElementById("InputTrianguloBase");
    const input2 = document.getElementById("InputTrainguloAltura");
    const base = Number(input1.value);
    const altura = Number(input2.value);
    
    const areaTri = areaTriangulo(base, altura);
    alert(areaTri);
}

function calcularDiametroCirculo() {
    const input = document.getElementById("InputRadioCirculo");
    const value = input.value;
    alert(diametroCirculo(value));
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputRadioCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value); 
    alert(perimetro);
}

function calculAreaCirculo() {
    const input = document.getElementById("InputRadioCirculo");
    const value = input.value;
    const area = (value * value) * PI;
    alert(area);
}
