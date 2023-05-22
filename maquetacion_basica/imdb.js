import { Movies } from "./movies";
import * as fs from 'fs';


export class Imdb {

///constructor

constructor(peliculas){ //unico atributo que sea un array de objetos de la clase Movie.

}
///metodos

printImdb(){
    console.log(this.peliculas)
}
escribirEnFicheroJSON(nombrefichero){
    
    let imdb1 = JSON.stringify(this.peliculas)
    fs.writeFileSync(nombrefichero, imdb1)
    
}
obtenerInstanciaIMDB(nombreFichero){
    
    let imdb3= fs.readFileSync(nombreFichero,"utf-8")
    let imdb2= JSON.parse(imdb3)
    return imdb2

}
}
