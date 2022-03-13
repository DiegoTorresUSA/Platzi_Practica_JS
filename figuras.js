// Código del cuadrado

console.group("Cuadrado");
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;


console.log("los lados del cuadrado miden: " + ladoCuadrado + " " + "cm");
console.log("el perimetro del cuadrado es: " + perimetroCuadrado + " " + "cm");
console.log("el área del cuadrado es: " + areaCuadrado + " " + "cm2") ;

console.groupEnd();
// Código del triángulo

console.group("Triángulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
const perimetroTriangulo = ladoTriangulo1+ ladoTriangulo2 + baseTriangulo;
console.log("los lados del tríangulo son : " + ladoTriangulo1 + "cm" +
    ", " + ladoTriangulo2 + "cm" + ","+ " y " + baseTriangulo + "cm" +
    " y el resultado de la operacion ");
console.log("los altura del triangulo es de: " + alturaTriangulo + " " + "cm");
console.log("los perímetro del triangulo es de: " + perimetroTriangulo + " " + "cm");
console.log("·El area del tríangulo es: " + areaTriangulo + "cm2")
console.groupEnd()

//codigo del circulo

console.group("Código del Círculo");
// radio
const radioCirculo = 4;
console.log("·El radio del circulo es: " + radioCirculo + "cm2");
//diametro

const diametroCirculo = radioCirculo * 2;
console.log("·El diametro del circulo es: " + diametroCirculo + "cm2")
// pi
const PI = Math.PI;
console.log("·El valor de PI es: " + PI);

//circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("·El perimetro del circulo es: " + perimetroCirculo + "cm2")

//área
const areaCirculo = (radioCirculo* radioCirculo) * PI;
console.log("·El área del circulo es: " + areaCirculo + "cm2")

console.groupEnd()
