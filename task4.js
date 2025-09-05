class Player {
  name;
  level;
    constructor(name, level) {
      this.name = name;
      this.level = level;
    }
  info(){
    return (`El jugador ${this.name} ha alcanzado el nivel: ${this.level}`)

  }
  levelUp(){
    this.level = level++
  }
    
  }

  const ralsei = new Player ("Ralsei", 5);

  for(let i= 0; i < 5; i++){
    console.log(v.raiseXp())
}
  console.log(ralsei.levelUp())
  console.log(ralsei.info())