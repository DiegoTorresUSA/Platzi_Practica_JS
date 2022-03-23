/*Analicemos el problema y nuestra propuesta de solución:

Crearemos un array con cada uno de nuestros cupones.
Cambiaremos el input de descuento en HTML por un input de cupones.
Usaremos un condicional switch para aplicar cierto porcentaje de 
descuento en nuestros productos dependiendo del cupón que se haya 
elegido al presionar el botón del formulario. */


/*arreglos en JS corchete cuadrado
Constructor con {} */

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
    return precioConDescuento;
  }

/*const arrayDescuentos = [
    "JuanDC_es_Batman", //25%
    "pero_no_le_digas_a_nadie", //30%
    "es_un_secreto", //25%
];

function calculateDiscount() {
    const price = document.getElementById("inputPrice");
    const cuponDescuento = document.getElementById("cuponDescuento");
    
    const valorPrecio = price.value;
    const couponValue = cuponDescuento.value;

    let descuento;

    if (valorPrecio != "") {
        switch (couponValue) {
            case arrayDescuentos[0]:
                descuento = 15;
            break;
            case arrayDescuentos[1]:
                descuento = 30;
            break;
            case arrayDescuentos[2]:
                descuento = 25;
            break;
            default:
                alert("cupon no valido")
            break;
        }
        const valorPagar = calcularPrecioConDescuento(valorPrecio, descuento);
        resultP.innerText = "El valor a pagar con descuento es: $" + valorPagar;
    }else{
        resultP.innerText = "Debes ingresar el valor";

    }

}*/

/* Array de cupones Version 2.0 */
function calculateDiscount(){

const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];

    const price = document.getElementById("inputPrice");
    const priceValue = price.value; 
    const cuponDescuento = document.getElementById("cuponDescuento");
    const couponValue = cuponDescuento.value;

const isCouponValueValid = function (coupons) {
    return coupons.name === couponValue;
};

const userCoupon = coupons.find(isCouponValueValid);
if (!userCoupon) {
    alert("el cupón " + userCoupon + " no es valido");
}else if (priceValue == "") {
    alert("Debes ingresar un valor");
}else{
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El valor a pagar con descuento es: $" + precioConDescuento;
}
}