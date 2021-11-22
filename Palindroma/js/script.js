// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// SOLUTION 

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

    // Arrays that will contain the letters of the same word both forward and backward
    let thisWord = [];
    let thisWordBackwards = [];

    // Push the letters of the word forward into the array
    for (let i = 0; i < WordToCheck.length; i++) {
        thisWord.push(WordToCheck[i]);
    }

    // Push the letters of the word backwards into the array
    for (let i = WordToCheck.length - 1; i >= 0; i--) {
        thisWordBackwards.push(WordToCheck[i]);
    }
    
    // Verify the condition between the strings
    if (thisWordBackwards.toString() === thisWord.toString()) {
        palindromeFound = true; 
    } 

    // Returns a Boolean value based on the condition check
    return palindromeFound;
}

//  ALTERNATIVE SOLUTION

// Get a word from user
let userWordAlternative = prompt('Inserisci una parola');

// Check the word using function
let resultAlternative = isPalindromeAlternative (userWord);

// Generate the message to the user
if (result) {
    alert ('Questa parola è palindroma');
} else {
    alert ('Questa parola non è palindroma');
}

// Function to check if a word is palindrome
function isPalindromeAlternative (WordToCheck) {

    // Default flag variable
    let palindromeFound = false;

    // Strings that will contain the same word forward and backward
    let thisWord = '';
    let thisWordBackwards = '';
    
    // Turn the word backwards
    for (let i = WordToCheck.length - 1; i >= 0; i--) {
        WordToCheck[i] += thisWordBackwards;
    }

    // Verify the condition between the strings
    if (thisWordBackwards === WordToCheck) {
        palindromeFound = true; 
    } 

    // Returns a Boolean value based on the condition check
    return palindromeFound;
}




