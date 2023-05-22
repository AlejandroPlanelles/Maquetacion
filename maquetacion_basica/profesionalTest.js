let pro = new Profesional("Leonardo Di Caprio",50,80,183,false,"American",1,"actor")
let pro1 = new Profesional("Russel Crow",55,90,180,false,"American",0,"actor")


// pro.PrintAll()

function prof1(pro){    
document.getElementById("profesional1").innerHTML= `
Nombre: ${pro.name}<br>
Edad: ${pro.age}<br>
Peso: ${pro.weight}<br>
Altura: ${pro.height}<br>
Retirado: ${pro.isRetired}<br>
Nacionalidad: ${pro.nationality}<br>
Numero de Oscars: ${pro.oscarNumbers}<br>
Profesion: ${pro.profession}<br>`;
}

function fotoProf(){
document.getElementById("fotopro1").innerHTML=
`<img class="img1" src="./img/jack.jpg">`
}

function prof2(pro1){
document.getElementById("profesional2").innerHTML=`
Nombre: ${pro1.name}<br>
Edad: ${pro1.age}<br>
Peso: ${pro1.weight}<br>
Altura: ${pro1.height}<br>
Retirado: ${pro1.isRetired}<br>
Nacionalidad: ${pro1.nationality}<br>
Numero de Oscars: ${pro1.oscarNumbers}<br>
Profesion: ${pro1.profession}<br>`
}

function fotoProf2(){
document.getElementById("fotopro2").innerHTML=
`<img class="img2" src="./img/maximo.jpg">`
};
    

prof1(pro);
fotoProf(pro);
prof2(pro1);
fotoProf2(pro1)



