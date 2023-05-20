
// $(document).ready(() => {
//     let variable=$("#precio").html();
//     $("#prenda").text(variable);
// })
// $("#boton").on("click",() => {
//     $("#precio").hide()
// })
// let total=[];
// jQuery(()=>{
// $("#boton").on("click",() => {
//     let ropa=$("#titulo").html();
//     let price=$("#precio").html()
//     let todo=(ropa+" "+price)
//     total.push(todo)
//     $("#prenda").text(todo);
// })
// $("#boton1").on("click",() => {
//     let ropa=$("#titulo1").html();
//     let price=$("#precio1").html()
//     let todo=(ropa+" "+price)
//     total.push(todo)
//     $("#prenda").text(todo);
// })
// })

let total=[];
jQuery(()=>{
$("#boton1").on("click",() => {
let prenda1= {prenda:"Pantalón suelto", precio:20}
total.push(prenda1)
console.log(total)
})


$("#boton2").on("click",() => {
let prenda2= {prenda:"Vestido Túnico", precio:18}
total.push(prenda2)
})

$("#boton3").on("click",() => {
let prenda3= {prenda:"Falda Mid Print", precio:12}
total.push(prenda3)
})

$("#boton4").on("click",() => {
let prenda4= {prenda:"Cardigan Largo Rayas", precio:22}
total.push(prenda4)
})

$("#boton5").on("click",() => {
let prenda5= {prenda:"Falda Mini Zebra", precio:16}
total.push(prenda5)
})

$("#boton6").on("click",() => {
let prenda6= {prenda:"Mono Overo", precio:20}
total.push(prenda6)
})

$("#boton7").on("click",() => {
let prenda7= {prenda:"Vestido Jersey", precio:24}
total.push(prenda7)
})

$("#boton8").on("click",() => {
let prenda8= {prenda:"Pantalón Ancho", precio:10}
total.push(prenda8)
})

$("#botonfinal").on("click", () => {
    let suma = 0;
    imprimir="";
    
    for (let i=0;i<total.length;i++){
           imprimir += (`<li>${total[i].prenda} ${total[i].precio} </li>`);
            suma += total[i].precio;
            console.log(suma)
    }
    
    $("#compra").html(`PRECIO TOTAL: ${suma}`);
    $("#prenda").html(imprimir);                
});
})
