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

class Group {
  members;
  constructor() {
    this.members = []; 
  }

  addMember(player) {
    this.members.push(player);
    return `${player.name} se ha unido al grupo 🎉`;
  }


  removeMember(playerName) {
    this.members = this.members.filter(p => p.name !== playerName);
    return `${playerName} ha sido removido del grupo ❌`;
  }

 
  listMembers() {
    if (this.members.length === 0) {
      return "El grupo está vacío.";
    }
    return this.members.map(p => `${p.name} (Lvl: ${p.level}, Exp: ${p.exp})`).join("\n");
  }
}


const ralsei = new Player("Ralsei", 25, 100);
const kris = new Player("Kris", 12, 80);
const susie = new Player("Susie", 15, 40);

// grupo
const party = new Group();

console.log(party.addMember(ralsei));
console.log(party.addMember(kris));
console.log(party.addMember(susie));

console.log("\n--- Miembros del grupo ---");
console.log(party.listMembers());

console.log("\n--- Eliminando a Kris ---");
console.log(party.removeMember("Kris"));

console.log("\n--- Miembros actuales ---");
console.log(party.listMembers());