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
    
  }

  const ralsei = new Player ("Ralsei", 5);

  console.log(ralsei.info())