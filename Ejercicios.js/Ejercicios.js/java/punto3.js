var alto = parseInt(prompt("incorpore el valor de alto "))
var velocidad = parseInt(prompt("incorpore el valor de vlocidad"))
var años = parseInt(prompt("incorpore el valor de años "))

if(alto>=175){
    console.log("cumple con la altura")
    if(velocida>=100){
        console.log("cumple con la velocidad")
        if(años<18){
            console.log("pasa a la liga de menores ")

        }else{
            if(edad>18){
                console.log("pasa a la liga de mayores ")
                
            }
        }
    }else{
        console.log("no cumple con la velocidad por no tanto no es posible entrar a la liga")
    }
}else{
    console.log("no puede ingresar al equipo por que no cumple con la estatura")
}