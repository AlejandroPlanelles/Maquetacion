

// array pelis
let movies=[];


let mov = new Movies("Titanic",1998,"american","drama")

mov.producer= "mi abuela"
mov.plataforma = "HBO"
mov.mainCharacterName="Jack"
mov.isMCU = false
mov.distributor = "Pixar"
mov.language ="inglés"
mov.director="James Cameron"
mov.writer="James Cameron"
mov.photo="./img/titanic.jpg"
mov.actors = "Leonardo di Caprio"


let mov1 = new Movies("Gladiator",1998,"american","drama")

mov1.producer= "mi abuela";
mov1.plataforma = "Prime";
mov1.mainCharacterName="Máximo";
mov1.isMCU = false;
mov1.distributor = "20CenturyFox";
mov1.language ="inglés";
mov1.director="Ridley Scott";
mov1.writer="Ridley Scott";
mov1.photo="./img/gladiator.jpg"
mov1.actors = "Russel Crowe";

movies.push(mov,mov1)
console.log(movies);
function mostrarPeli(){
let mostrar ='';
for(let i=0;i<movies.length;i++){

    mostrar += ` <div class="card" style="width: 18rem;">
                    <img src="${movies[i].photo}" style="with:100px;height:200px" alt="Buscalo en Google">
                    <div class="card-body">
                        <h2 style="color:white;">${movies[i].title}</h5>
                        <p style="color:white;">Año de Lanzamiento: ${movies[i].releaseYear}</p>
                        <p style="color:white;">Nacionalidad: ${movies[i].nacionality}</p> 
                        <p style="color:white;">Genero: ${movies[i].genre}</p>
                        <p style="color:white;">Director: ${movies[i].producer}</p>
                    </div>
                </div>`;
    
}
console.log(mostrar)
document.getElementById("peli").innerHTML=mostrar;

}


mostrarPeli()









// function movie1(mov){
// document.getElementById("peli1").innerHTML = `
// Título: ${mov.title}<br>
// Año de Lanzamiento: ${mov.releaseYear}<br>
// Nacionalidad: ${mov.nacionality}<br>
// Genero: ${mov.genre}<br>
// Actores: ${mov.actors}<br>
// Director: ${mov.director}<br>
// Escritor: ${mov.writer}<br>
// Lenguaje: ${mov.language}<br>
// Plataforma: ${mov.plataforma}<br>
// MCU: ${mov.isMCU}<br>
// Protagonista: ${mov.mainCharacterName}<br>
// Productor: ${mov.producer}<br>
// Distribuidor: ${mov.distributor}<br>`;
// };

// function fotoMov(){
// document.getElementById("foto1").innerHTML=
// `<img class="img1" src="./img/titanic.jpg">`
// }
    

// function movie2(mov1){
// document.getElementById("peli2").innerHTML = `
// Título: ${mov1.title}<br>
// Año de Lanzamiento: ${mov1.releaseYear}<br>
// Nacionalidad: ${mov1.nacionality}<br>
// Genero: ${mov1.genre}<br>
// Actores: ${mov1.actors}<br>
// Director: ${mov1.director}<br>
// Escritor: ${mov1.writer}<br>
// Lenguaje: ${mov1.language}<br>
// Plataforma: ${mov1.plataforma}<br>
// MCU: ${mov1.isMCU}<br>
// Protagonista: ${mov1.mainCharacterName}<br>
// Productor: ${mov1.producer}<br>
// Distribuidor: ${mov1.distributor}<br>`;
// };

// function fotoMov2(){
// document.getElementById("foto2").innerHTML=
// `<img class="img1" src="./img/gladiator.jpg">`
// }

// movie1(mov);
// fotoMov(mov)
// movie2(mov1);
// fotoMov2(mov1)



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
mostrarPeli()
}

// function addMovie(){
//     let newAddMovie="";
//     for (let i=0;i<movies.length;i++){
//         newAddMovie+=`${movies[i].title}<br>${movies[i].year}<br>${movies[i].nationality}<br>${movies[i].gender}<br>${movies[i].language}<br>${movies[i].platform}<br>${movies[i].varMCU}<br>${movies[i].prod}<br>${movies[i].distrib}`
//     }
// document.getElementById("addmovie").innerHTML=newAddMovie
// }