/*const precioOriginal = 120;
const descuento = 18;

const porcentajeprecioconDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajeprecioconDescuento) / 100;*/


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
    return precioConDescuento;
  }
/*console.log({
    precioOriginal,
    descuento,
    porcentajeprecioconDescuento,
    precioConDescuento
});*/

function calcularDescuento() {
  const price = document.getElementById("inputPrice");
  const inputDiscount = document.getElementById("inputDiscount");

  const priceValue = price.value;
  const discount = inputDiscount.value;

  const valorDescuento = calcularPrecioConDescuento(priceValue, discount);
  resultP.innerText = "El valor a pagar con descuento es: $" + valorDescuento;
}

/*function ButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El valor a pagar con descuento es: $ " + precioConDescuento; 
  }*/