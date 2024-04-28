'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
// join: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Input: "I did my waiting 12 years of it in Azkaban"
// Output: "Azkaban"
//
// Input: "Impossible"
// Output: "Impossible"
//

const LastWord = (str) => {
    let IndexOfLastSapce = str.lastIndexOf(" ");
    return str.slice(IndexOfLastSapce + 1);
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
//  You can try to do the same task using the split method
//
//  Input: "you dare use my spells against me, potter"
//  Output: "potter"

const LastWord_2 = (str) => {
    let words = str.split(" ");
    let length = words.length;
    return words[length - 1];
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
//
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Input:  "I thought you had a plan"
// Output: "We thought you had a plan"
//
// Input: "I was there 3000 years ago"
// Output: "We were there 3000 years ago"

// Input: "I am Venom"
// Output: "We are Venom"
//

const replaceWords = (str) => {
    let words = str.split(" ");
    let replacements = ["We", "are", "were"];
    let indexes = [words.indexOf("I"), words.indexOf("am"), words.indexOf("was")];
    let i = 0;
    for (let i = 0; i < indexes.length; i++) {
        if (indexes[i] != -1) {
            words.splice(indexes[i], 1, replacements[i])
        }
    }
    let result = words.reduce((acc, element) => acc + " " + element);
    return result;

}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
//
// Write a function that "joins" the array of words together and puts a comma "," after every five words
//
// Input:["move","it","away","from","the","street"] 
// Output: "move it away from the, street" 
//

const arrToStr = (arr) => {
    for (let i = 4; i < arr.length; i += 5) {
        arr[i] += ","
    }
    let result = arr.join(' ');
    return result;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 05:
// Optional:
//
// Simon got a string manipulation question for his interview,
// it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// Input:"aaaa bbb sdf"
// Output: "a4 b3 s1d1f1"
//
// Input:"door"
// Output: "d1o2r1"
//
// help him by writing the function
//

const letterCounter = (str) => {
    // let words = str.split(" ");
    // // let wordsToEdit = words;
    // let result = "";
    // words.forEach(word => {
    //     let repeat =1 ;
    //     for(let i =0;i<word.length-1;i++){
    //         let isEqual=word[i]==word[i+1];
    //         if(isEqual){
    //             repeat++;
    //         }else if(i+1==word.length-1||!isEqual){
    //             result+=word[i]+repeat;
    //             repeat=1;
    //         }
    //     }
    //     // result+=" ";
    // });
    // return result.trim();
    let words = str.split(" ");
    let result = "";
    words.forEach(word => {
        let repeat =1 ;
        for(let i =0;i<word.length-1;i++){
            let isEqual=word[i]==word[i+1];
          let isLetterBeforeLast = i==word.length-2;
            if(isEqual){
                repeat++;
            }
           if(isLetterBeforeLast||!isEqual){
                console.log(`here: ${word[i]}${repeat}`)
                result+=word[i]+repeat;
                repeat=1;
            }
            if(isLetterBeforeLast&&!isEqual){
              result+=word[i+1]+repeat;
            }
        }
        result+=" ";
    });
    return result.trim();
}
// -------------------------------------------------------------------------------------------------------


module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };