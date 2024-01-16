/* 
## Bibblan

1. Skapa ett objekt som innehåller data om en bok, nycklar som kan inkluderas är `title`, `author`, `numPages`.

2. Skapa en array av objekt med flera stycken böcker

3. Skapa en funktion som söker efter en titel i arrayen, om den hittar en så returneras objektet annars `null`. 
Låt funktionen ta emot arrayen med bok-objekt och söktermen som parametrar. 
*/

/* 
// Här är en array som innehåller flera objekt, alla med nycklar som title, author och numPages
let books = [
    {
        title : 'The Lord of the Rings',
        author : 'J.R.R. Tolkien',
        numPages : 1178
    },
    {
        title : 'Harry Potter and the Philosopher\'s Stone',
        author : 'J.K. Rowling',
        numPages : 223
    },
    {
        title : 'The Hobbit',
        author : 'J.R.R. Tolkien',
        numPages : 310
    }
];
// För att konna söka efter något av detta så använder vi window.prompt()
let userInput = window.prompt('Vad söker du efter?');
// Statusen på found tom tills userInput matchar något av nycklarna i något av objekten.
let found = [];


for (let i = 0; i < books.length; i++) {
    // Här skapar vi en ny variabel som vi sedan som tilldelas det som skrivs i userInput. 
    // Vi använder oss av parseFloat() för att konvertera en sträng till heltal eller flyttal, och på så sätt kunna söka efter antal sidor. 
    let userInputAsNumber = parseFloat(userInput);

    if(userInput === books[i].title || userInput === books[i].author || userInputAsNumber === books[i].numPages) {
        found.push(books[i]);    
        //found = books[i];
        console.log(`Du sökte efter ${userInput}.`);
        //break; // Avslutar loopen när en matchning hittas
    }
}
// Om found.length ör större än 0 har vi en matchning
if(found.length > 0) {
    console.log('Detta matchar din sökning', found);
// Annars har vi inte en matchning
} else {
    console.log(`Du sökte efter ${userInput}. Det matchar tyvärr inget vi har på bibblan, kolla gärna din stavning`);
}
*/

/* 
## Letter Frequency
Räkna tecken i en sträng och organisera detta i ett objekt.
Skapa en funktion som tar en sträng som input och ger ett objekt som output.

Varje tecken är sin egna nyckel i objektet och värdet på nyckeln är antalet av det tecknet. Dvs, för varje tecken ska det finnas en nyckel i objektet och värdet på den nyckeln ska vara antal förekomster av det tecknet.

Denna övning kräver dynamiska nycklar.

```js
letterFrequency("kalle") // => {"k": 1. "a": 1, "l": 2, "e": 1}
letterFrequency("aaaa") // => {"a": 4}
letterFrequency("ni talar bra latin") // => {"n": 2, "i":2, " ":3, "t":2, "a":4,"l": 2,"r":2", "b":1 }
```
*/

/* 
// Vår function som vi döpt till countCharacter() tar argumentet inputString som kommer inehålla ordet vi vill kolla.
function countCharacter(inputString) {
    // Här skapar vi ett tomt objekt för att lagra frekvensen av varje tecken
    let characterFrequency = {};
    // Här loopar vi igenom varje tecken i strängen
    // I for() loopen skapar vi en variabel 'char' som vi kommer kalla på senare
    for(let char of inputString) {
        // Kontrollera om tecknet redan finns som en nyckel i objektet
        // Här använder vi [char] med hakparanteser för att dynamiskt kunna kolla och hämta värdet av nyckeln
        if(characterFrequency[char]) {
            // Om objektet finns, öka värdet med 1
            characterFrequency[char]++;
        } else {
            // Om tecknet inte finns, lägg till det som en nyckel med värdet 1
            characterFrequency[char] = 1;
        }
    }
    // returnera resultat
    return characterFrequency;
}

let inputString = window.prompt('Skriv in vilket ord som skall kollas!');
// Här tilldelar vi det som returneras av countCharacter(inputString) till resultat.
let result = countCharacter(inputString);
// Här vill vi skriva ut resultatet av resultat
console.log(result);
*/