import {Imdb} from "./imdb";
import { Movies } from "./movies";
import { Profesional } from "./profesional";
// import * as fs from 'fs';

let leo = new Profesional("Leonardo di Caprio",48,85,183,false,"American",1,"actor")
let tom = new Profesional("Tom Hanks",66,80,183,false,"American",2,"actor")
let meryl = new Profesional ("Meryl Streep",73,60,168,false,"American",3,"actor")
let steve = new Profesional ("Steven Spielberg",76,74,172,false,"American",2,"Director")
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
mov.actors = arr


let leo1 = new Profesional("Rusel Crow",48,85,183,false,"American",1,"actor")
let tom1 = new Profesional("Bart Simpson",66,80,183,false,"American",2,"actor")
let meryl1 = new Profesional ("Pikachu",73,60,168,false,"American",3,"actor")
let steve1 = new Profesional ("Matilda",76,74,172,false,"American",2,"Director")
let tolkien1 = new Profesional("Cervantes",81, 78,176,true,"British",0,"Writer")
let arr1 = [leo1,tom1,meryl1,]
let mov1 = new Movies("Gladiator",1998,"american","drama")

mov1.producer= "mi abuela"
mov1.plataforma = "Prime"
mov1.mainCharacterName="Máximo"
mov1.isMCU = false
mov1.distributor = "20CenturyFox"
mov1.language ="inglés"
mov1.director=steve1
mov1.writer=tolkien1
mov1.actors = arr1

let arrimdb = [mov,mov1]
let varimdb = new Imdb(arrimdb)
// console.log(varimdb.peliculas)

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
Distribuidor: ${mov.distributor}<br>`
