let leo = new Profesional("Leonardo Di Caprio",50,80,183,false,"American",1,"actor")
let tom = new Profesional("Tom Hanks",66,80,183,false,"American",2,"actor")
let meryl = new Profesional("Meryl Streep",73,60,168,false,"American",3,"actor")
let steve = new Profesional("Steven Spielberg",76,74,172,false,"American",2,"Director")
let tolkien = new Profesional("J.R.R. Tolkien",81, 78,176,true,"British",0,"Writer")
let arr = [leo,tom,meryl]
let mov = new Movies("Titanic",1998,"american","drama")

mov.producer= "mi abuela"
mov.plataforma = "HBO"
mov.mainCharacterName="Jack"
mov.isMCU = false
mov.distributor = "Pixar"
mov.language ="inglés"
mov.director=steve
mov.writer=tolkien
mov.photo=""
mov.actors = arr
// mov.printAllHere()

let leo1 = new Profesional("Rusel Crow",48,85,183,false,"American",1,"actor")
let tom1 = new Profesional("Bart Simpson",66,80,183,false,"American",2,"actor")
let meryl1 = new Profesional ("Pikachu",73,60,168,false,"American",3,"actor")
let steve1 = new Profesional ("Matilda",76,74,172,false,"American",2,"Director")
let tolkien1 = new Profesional("Cervantes",81, 78,176,true,"British",0,"Writer")
let arr1 = [leo1,tom1,meryl1,]
let mov1 = new Movies("Gladiator",1998,"american","drama")

mov1.producer= "mi abuela";
mov1.plataforma = "Prime";
mov1.mainCharacterName="Máximo";
mov1.isMCU = false;
mov1.distributor = "20CenturyFox";
mov1.language ="inglés";
mov1.director=steve1;
mov1.writer=tolkien1;
mov1.photo=""
mov1.actors = arr1;

let movies=[mov,mov1];


function movie1(mov){
document.getElementById("peli1").innerHTML = `
Título: ${mov.title}<br>
Año de Lanzamiento: ${mov.releaseYear}<br>
Nacionalidad: ${mov.nacionality}<br>
Genero: ${mov.genre}<br>
Actores: ${mov.actors}<br>
Director: ${mov.director}<br>
Escritor: ${mov.writer}<br>
Lenguaje: ${mov.language}<br>
Plataforma: ${mov.plataforma}<br>
MCU: ${mov.isMCU}<br>
Protagonista: ${mov.mainCharacterName}<br>
Productor: ${mov.producer}<br>
Distribuidor: ${mov.distributor}<br>`;
};

function fotoMov(){
document.getElementById("foto1").innerHTML=
`<img class="img1" src="./img/titanic.jpg">`
}
    

function movie2(mov1){
document.getElementById("peli2").innerHTML = `
Título: ${mov1.title}<br>
Año de Lanzamiento: ${mov1.releaseYear}<br>
Nacionalidad: ${mov1.nacionality}<br>
Genero: ${mov1.genre}<br>
Actores: ${mov1.actors}<br>
Director: ${mov1.director}<br>
Escritor: ${mov1.writer}<br>
Lenguaje: ${mov1.language}<br>
Plataforma: ${mov1.plataforma}<br>
MCU: ${mov1.isMCU}<br>
Protagonista: ${mov1.mainCharacterName}<br>
Productor: ${mov1.producer}<br>
Distribuidor: ${mov1.distributor}<br>`;
};

function fotoMov2(){
document.getElementById("foto2").innerHTML=
`<img class="img1" src="./img/gladiator.jpg">`
}

movie1(mov);
fotoMov(mov)
movie2(mov1);
fotoMov2(mov1)

function newmovie(){
let title=document.getElementById("title").value;
let year=document.getElementById("year").value;
let nationality=document.getElementById("nationality").value;
let gender=document.getElementById("gender").value;
let language=document.getElementById("language").value;
let platform=document.getElementById("platform").value;
let varMCU=document.getElementById("MCU").value;
let main=document.getElementById("main").value;
let prod=document.getElementById("producer").value;
let distrib=document.getElementById("distribuitor").value;
let newmovie1=new Movies (title,year,nationality,gender,language,platform,varMCU,main,prod,distrib)


movies.push(newmovie1);

console.log(movies)

}