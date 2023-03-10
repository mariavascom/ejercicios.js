var n1 = parseInt(prompt("incorporar la nota numero1 porfavor ")) 
var n2 = parent(prompt("incorporar la nota numero2 porfavor"))
var n3 = parent(prompt("incorporar la nota numero3 porfavor"))
var promedio = 0
(promedio=n1+n2+n3)/3
if(promedio==10){
    console.log("excelente")
}else{
    if(promedio>=7){
        if(promedio<10){
            console.log("bueno")
        }
    }else{
        if(promedio<7){
            console.log("insuficiente")
        }
    }
}