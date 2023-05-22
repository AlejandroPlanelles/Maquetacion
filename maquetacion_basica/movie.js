class Movies {
////// constructor
 title
 releaseYear
 nacionality
 genre
 actors
 director
 writer
 language
 plataforma
 isMCU
 mainCharacterName
 producer
 distributor
 photo

        constructor (title, releaseYear, nacionality, genre){

this.title=title
this.releaseYear=releaseYear
this.nacionality=nacionality
this.genre=genre
this.actors
this.director
this.writer
this.language
this.plataforma
this.isMCU
this.mainCharacterName
this.producer
this.distributor
this.photo
        }
/////////////////metodo

printAllHere(){
    console.log(this.title),
    console.log(this.actors),
    console.log(this.director),
    console.log(this.distributor),
    console.log(this.genre),
    console.log(this.isMCU),
    console.log(this.language),
    console.log(this.mainCharacterName),
    console.log(this.nacionality),
    console.log(this.plataforma),
    console.log(this.producer),
    console.log(this.releaseYear),
    console.log(this.writer)
    console.log(this.photo)

}
}

module.export={Movies}