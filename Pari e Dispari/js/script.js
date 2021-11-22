// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Get a number and a choice between even or odd from user
let userNumber = parseInt (prompt('Inserisci un numero'));
let userEvenOrOddChoice = (prompt('Inserisci pari o dispari'));
console.log(userNumber);
console.log(userEvenOrOddChoice);


// Function that generates a random number 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Generate a random number from 1 to 5
let randomNumber = getRndInteger (1, 5);
console.log(randomNumber);

// Add the user's number with the random number
let sum =  userNumber + randomNumber;
console.log(sum);

// Function to check if a number is odd or even
function isEvenOrOdd (numberToCheck) {

    let result;

    // Verify if even or odd
    if (numberToCheck % 2 === 0) {
        result = 'odd';
    } else {
        result = 'even';
    }

    // Returns a string based on the condition check
    return result;
}

// Check the number using function
let evenOrOdd = isEvenOrOdd (sum);
console.log(evenOrOdd);

// Generate the message to the user
if (evenOrOdd === 'odd' && userEvenOrOddChoice === 'pari') {
    alert('Che culo, hai vinto!');
} else if (evenOrOdd === 'even' && userEvenOrOddChoice === 'dispari') {
    alert('Che culo, hai vinto!');
} else {
    alert('Mi dispiace, hai perso!');
}
