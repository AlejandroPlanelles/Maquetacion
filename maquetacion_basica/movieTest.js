let mylib = require("./profesional")
let mylib1 = require("./movie")

let leo = new mylib.Profesional("Leonardo di Caprio",48,85,183,false,"American",1,"actor")
let tom = new mylib.Profesional("Tom Hanks",66,80,183,false,"American",2,"actor")
let meryl = new mylib.Profesional("Meryl Streep",73,60,168,false,"American",3,"actor")
let steve = new mylib.Profesional("Steven Spielberg",76,74,172,false,"American",2,"Director")
let tolkien = new mylib.Profesional("J.R.R. Tolkien",81, 78,176,true,"British",0,"Writer")
let arr = [leo,tom,meryl]
let mov = new mylib1.Movies("Titanic",1998,"american","drama")

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
Distribuidor: ${mov1.distributor}<br>`