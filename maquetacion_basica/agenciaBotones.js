let infoTotal=[];
function info(){
let info= document.getElementById("Nombre").value
let info1= document.getElementById("Origen").value
let info2=document.getElementById("Destino").value
let info3= document.getElementById("NumerodePersonas").value
let info4= document.getElementById("Ofertas").value
let objeto = {
    nombre: info,
    origen: info1,
    destino: info2,
    numPersonas: info3,
    ofertas: info4
}
infoTotal.push(objeto)

console.log(infoTotal)


}

function viajes(){
    for (i=0;i<infoTotal.length;i++){
    if(infoTotal[i].destino.includes("canarias"||"mallorca"|| "galicia")&&(infoTotal[i].destino.includes("CANARIAS"||"MALLORCA"|| "GALICIA")))
        console.log("hola")
    //    return document.getElementById("imprime").innerHTML += infoTotal
    }
}