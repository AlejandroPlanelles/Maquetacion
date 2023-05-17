let infoTotal=[];
function info(){
let info= document.getElementById("Nombre").value.toLowerCase()
let info1= document.getElementById("Origen").value.toLowerCase()
let info2=document.getElementById("Destino").value.toLowerCase()
let info3= document.getElementById("NumerodePersonas").value.toLowerCase()
let info4= document.getElementById("Ofertas").value.toLowerCase()
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
    let datos= infoTotal.filter(i=>(i.destino=="canarias")||(i.destino=="mallorca")||(i.destino=="galicia"))
    let string="";
        for (let x=0;x<datos.length;x++){
            string+=`${datos[x].nombre},${datos[x].origen},${datos[x].destino},${datos[x].ofertas},     `
        }
    document.getElementById("imprime").innerHTML=string
    
}