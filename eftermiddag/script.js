console.log('Hello world');

console.log(pokemons);

for(let i = 0; i < pokemons.length; i++) {
    //console.log(pokemons[i]);
}

for(let pokemon of pokemons) {
    //console.log(pokemon);
}

// HOF
pokemons.forEach((pokemon, index) => {console.log(`På plats ${index} hittar vi ingen mindre än ${pokemon.name}`)});

pokemons.forEach(pokemon => console.log(pokemon.name));
let pokemonNames = pokemons.map(pokemon => pokemon.name);

console.log(pokemonNames);

let weakPokemons = pokemons.filter(pokemon => pokemon.stats.hp < 50);
let strongPokemons = pokemons.filter(pokemon => pokemon.stats.hp > 100);

console.log(weakPokemons);
console.log(strongPokemons);

pokemonNames.sort();
console.log(pokemonNames);

let numbers = [100, 11, 1, 15, 155];
numbers.sort((a, b) => a - b);
console.log(numbers);

let users = [
    { userName: 'Jesper', password: 'hejsan'},
    { userName: 'Jonte', password: 'tjohoo'},
];

let uNameInput = 'jesper';

if(users.some(user => user.userName === uNameInput)) {
    console.log('User exists');
} else {
    console.log('User doesnt exist');
}

let pokemonArray = [...pokemons];

let removed = pokemons.splice(0, 5);
console.log(pokemons);
console.log(removed);



console.log('pokemons', pokemons);
console.log('pokemonArray', pokemonArray);


let pokemonTrainers = [
    {
        name: 'Ash Ketchum',
        age: 10,
        address: {
            street: 'Street Road',
            number: 1,
            zip: 12345,
            city: 'Pallet Town'
        },
        catchPhrase: (pokemon) => {
            return `${pokemon}, I chose you!`;
        }
    },
    {
        name: 'Jesper Nyberg',
        age: 33,
        address: {
            street: 'Anjalagatan',
            number: 5,
            zip: 66434,
            city: 'Grums'
        },
        catchPhrase: (pokemon) => {
            return `${pokemon}, I chose you!`;
        }
    },
    {
        name: 'Super Mario',
        age: 40,
        address: {
            street: 'Mushroom Street',
            number: 1,
            zip: 12345,
            city: 'Mishroom Kingdom'
        },
        catchPhrase: (pokemon) => {
            return `${pokemon}, I chose you!`;
        }
    },
    {
        name: 'Sonic the Hedgehog',
        age: 15,
        address: {
            street: 'Green Hill Street',
            number: 1,
            zip: 12345,
            city: 'Green Hill'
        },
        catchPhrase: (pokemon) => {
            return `${pokemon}, I chose you!`;
        }
    },
];
// let trainer = pokemonTrainers[Math.floor(Math.random() * pokemonTrainers.length)];
// console.log(trainer.name);
// console.log(trainer.catchPhrase(trainer.pokemons[Math.floor(Math.random() * trainer.pokemons.length)]));


for(let trainer of pokemonTrainers) {
    trainer.pokemons = [];
    for(let i = 0; i < 6; i++) {
        trainer.pokemons.push(pokemonArray[Math.floor(Math.random() * pokemonArray.length)]);
    }
}

let trainer = pokemonTrainers[Math.floor(Math.random() * pokemonTrainers.length)];

console.log(`En dag när den ${trainer.age}-årige pokemontränaren ${trainer.name} var ute och spatserade i skogen tillsammans med sina pokemons så träffade han på en annan tränare. Omedelbart gjorde de sig redo för strid! ${trainer.name} ropade högt: ${trainer.catchPhrase(trainer.pokemons[Math.floor(Math.random() * trainer.pokemons.length)].name)}, och den andra tränaren svarade med att skicka ut sin egen pokemon. Efter att ha mosat sin motståndare så sa ${trainer.name}: jag skall bli världens störste pokemonmästare! Sedan fortsatte han sin resa genom ${trainer.address.city} för att komma fram till slutmålet för sin resa: ${trainer.address.street} ${trainer.address.number}`);





