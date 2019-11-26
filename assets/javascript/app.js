// examine the pokedex links for staryu and pikachu
// think about how you might represent a pokemon as a JS object ⚡️
// one of you choose pikachu and one of you choose staryu 🌟
// represent the type, name, hp stats, and effectiveness (strengths/weaknesses) from the "Type defenses" section
//   as properties on each of your pokemon objects
// select four moves from the "Moves learnt by level" up section and add them to your pokemon object

// BONUS:
//  start to think about what methods/functions a pokemon might want to have them battle eachother

var staryu = {
  name: "star",
  type: "water",
  level: 100,
  stats: {
    hp: 180,
    attack: 85,
    defense: 103,
    specialAttack: 130,
    specialDefense: 103,
    speed: 157
  },
  typeDefenses: [
    { type: "fire", multiplier: 0.5 },
    { type: "water", multiplier: 0.5 },
    { type: "electric", multiplier: 2 },
    { type: "grass", multiplier: 2 },
    { type: "ice", multiplier: 0.5 },
    { type: "steel", multiplier: 0.5 }
  ],
  moves: [
    { name: "hyrdoPump", type: "water", power: 110, accuracy: 80 },
    { name: "psychic", type: "psychic", power: 90, accuracy: 100 },
    { name: "thunderbolt", type: "electric", power: 90, accuracy: 100 },
    { name: "facade", type: "normal", power: 70, accuracy: 100 }
  ],
  attack: function(pokemon, moveNumber) {
    var move = this.moves[moveNumber];
    console.log(`${this.name} used ${move.name}`);
    pokemon.typeDefenses.forEach(function(typeDefense) {
      if (move.type === typeDefense.type) {
        move.power = move.power * typeDefense.multiplier;
      }
    });

    var damage = (move.power * this.stats.attack) / pokemon.stats.defense;
    console.log(`${this.name} did ${damage} damage`);

    pokemon.stats.hp -= damage;

    if (pokemon.stats.hp <= 0) {
      console.log(`${pokemon.name} feinted!`);
    }
  }
};

var pikachu = {
  name: "pika",
  type: "electric",
  level: 100,
  stats: {
    hp: 180,
    attack: 103,
    defense: 76,
    specialAttack: 94,
    specialDefense: 94,
    speed: 166
  },
  typeDefenses: [
    { type: "electric", multiplier: 0.5 },
    { type: "ground", multiplier: 2 },
    { type: "steel", multiplier: 0.5 },
    { type: "flying", multiplier: 0.5 }
  ],
  moves: [
    { name: "charm", type: "fairy", power: 0, accuracy: 0.99 },
    { name: "quick attack", type: "normal", power: 40, accuracy: 0.99 },
    { name: "thunder shock", type: "electric", power: 40, accuracy: 0.99 },
    { name: "thunder", type: "electric", power: 110, accuracy: 0.7 }
  ],
  attack: function(pokemon, moveNumber) {
    var move = this.moves[moveNumber];
    console.log(`${this.name} used ${move.name}`);
    pokemon.typeDefenses.forEach(function(typeDefense) {
      if (move.type === typeDefense.type) {
        move.power = move.power * typeDefense.multiplier;
      }
    });

    var damage = (move.power * this.stats.attack) / pokemon.stats.defense;
    console.log(`${this.name} did ${damage} damage`);

    pokemon.stats.hp -= damage;

    if (pokemon.stats.hp <= 0) {
      console.log(`${pokemon.name} feinted!`);
    }
  }
};

pikachu.attack(staryu, 2);
console.log(pikachu);
console.log(staryu);

staryu.attack(pikachu, 0);
console.log(pikachu);
console.log(staryu);

pikachu.attack(staryu, 3);
console.log(pikachu);
console.log(staryu);
