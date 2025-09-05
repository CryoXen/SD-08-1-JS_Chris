class Player {
  name;
  level;
  exp;
    constructor(name, level, exp) {
      this.name = name;
      this.level = level;
      this.exp = exp;
    }
  info(){
    return (`El jugador ${this.name} ha alcanzado el nivel: ${this.level}`)

  }
  gainExp(){
        return `${this.name} ha encontrado un objeto
    mágico, haz aumentado 10 de exp, tu experiencia actual
    ahora es: ${this.exp + 10}`
    }

  levelUp(){
    if(this.exp >= 100)
        {
        return `Felicidades ${this.name}, haz subido de nivel,
        ahora eres nivel: ${this.level + 1}`
}
      else{
        return `Ouch, ${this.name} aun no tiene el exp
        necesario para subir de nivel`
}}

}


const ralsei = new Player("Ralsei", 25, 100)

console.log(ralsei.gainExp())
console.log(ralsei.levelUp())
