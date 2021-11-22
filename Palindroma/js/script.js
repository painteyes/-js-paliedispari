// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Get a word from user
let userWord = prompt('Inserisci una parola');

// Check the word using function
let result = isPalindrome (userWord);

// Generate the message to the user
if (result) {
    alert ('Questa parola è palindroma');
} else {
    alert ('Questa parola non è palindroma');
}

// Function to check if a word is palindrome
function isPalindrome (WordToCheck) {

    // Default flag variable
    let palindromeFound = false;

    // Arrays that will contain the letters of the word forward and backward
    let thisWord = [];
    let thisWordBackwards = [];

    for (let i = 0; i < WordToCheck.length; i++) {
        thisWord.push(userWord[i]);
    }

    for (let i = WordToCheck.length - 1; i = 0; i--) {
        thisWordBackwards.push(userWord[i]);
    }

    if (thisWordBackwards === thisWord) {
        palindromeFound = True; 
    } 

    return palindromeFound;
}

