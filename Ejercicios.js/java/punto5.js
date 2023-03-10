var naranja = parseInt(prompt("el precio de la naranja es = 2500, incorpore la cantatidad que desea comprar "))
var mandarina = parseInt(prompt("el precio de la mandarina es = 2000, incorpore la cantatidad que desea comprar "))
var coco = parseInt(prompt("el precio de la coco es = 2800, incorpore la cantatidad que desea comprar "))
var arandano = parseInt(prompt("el precio de la arandanos es = 1700, incorpore la cantatidad que desea comprar "))
var kiwi = parseInt(prompt("el precio de la kiwi es = 2800, incorpore la cantatidad que desea comprar "))
var melon = parseInt(prompt("el precio de la melon es = 2350, incorpore la cantatidad que desea comprar "))


totalNa = 0 
totalMa = 0
totalCo = 0
totalAr = 0
totalKi = 0
totalMe = 0 
total = 0 
totalFrutas = 0

if ( naranja >= 0) {
    totalNa = naranja * 2500
} if (mandarina >= 0) {
    totalMa = mandarina * 2000
} if (coco >= 0) {
    totalCo= coco * 2800
} if (arandano >= 0) {
    totalAr= arandano * 1700
} if (kiwi >= 0) {
    totalKi= kiwi * 2800
} if (melon >= 0) {
    totalMe = melon  * 2350
}
total= totalNa+totalMa+totalCo+totalAr+totalKi+totalMe+totalFrutas 

var compraTotal = total + totalFrutas

alert( "la compra total fue de: "+ compraTotal)
