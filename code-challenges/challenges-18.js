'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    let words = str.split(' ');
    let middleIndex = words.length / 2;
    let middleWord = words[Math.floor(middleIndex)];
    return middleWord.length;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {

    if (str1.length != str2.length) {
        return false;
    }

    let letters = {};

    let strings = [str1, str2];

    strings.forEach(str => {
        for (const char of str) {
            letters[char] = (letters[char] || 0) + 1;
        }
    });

    for (const key in letters) {
        if (letters[key] % 2 != 0) {
            return false
        }
    }

    return true;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    let index = arr.indexOf(int);

    if (index == -1) {
        if (arr[arr.length - 1] < int) {
            index = arr.length;
        } else {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > int) {
                    index = i;
                    break;
                }
            }
        }
    }
    
    return index;
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };