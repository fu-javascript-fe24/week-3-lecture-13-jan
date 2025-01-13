console.log('Hello, world!');

let pokemons = ['Bulbasaur', 'Squirtle', 'Charmander', 'Pikachu'];
let myName = 'Jesper';
console.log(pokemons);

// isArray kan användas för att kolla om en variabel är en array
console.log(Array.isArray(pokemons));
console.log(Array.isArray(myName));

// .Push() lägger till ett element i slutet av en array
pokemons.push('Butterfree');
console.log(pokemons);

// .pop() tar bort det sista elementet i en array
let removed = pokemons.pop();
console.log(pokemons);
console.log(`${removed} was removed`);

// .shift() tar bort det första elementet i en array
removed = pokemons.shift();
console.log(pokemons);
console.log(`${removed} was removed`);

//.unshift() lägger till ett element i början av en array
pokemons.unshift('Abra');
console.log(pokemons);
pokemons.unshift('Meowth');

// .indexOf() kan användas för att hitta index till ett specifikt värde
let position = pokemons.indexOf('Pikachu');

console.log(pokemons[3]);
console.log(pokemons[position]);

// .slice() kan användas för att skapa en ny array från en existerande array
console.log(pokemons);
let newArray = pokemons.slice(1, 3);
console.log(newArray);
console.log(pokemons);

// .splice() kan användas för att ta bort element från en array och returnera dem i en ny array
let pokArray = pokemons.splice(1, 2);
console.log(pokemons);
console.log(pokArray);

// Loopa igenom array med vanlig for-loop
for(let i = 0; i < pokemons.length; i++) {
    console.log(`${pokemons[i]} hittas på plats ${i}`);
}

// For..of-loop
for(let pokemon of pokemons) {
    console.log(pokemon);
}

// For Each är en sk HOF som tar emot en annan funktion som argument. Används för att lopa igenom arrayer
pokemons.forEach((hund, fiskmås) => console.log(`${hund} hittas på plats ${fiskmås}`));

// Funkar som [index] MEN om man anger -1 får man ut det sista värdet
console.log(pokemons.at(-2));