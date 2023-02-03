//A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//Your task is to write a function that takes a string and return a new string with all vowels removed.
//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    let arrayStr = str.split('');
    let arrayOut = [];
    for (let i = 0; i < arrayStr.length; ++i) {
        if (arrayStr[i].toLowerCase() =='a'||arrayStr[i].toLowerCase() =='e'||arrayStr[i].toLowerCase() =='i'||arrayStr[i].toLowerCase() =='o'||arrayStr[i].toLowerCase() =='u'){
        }
        else {
            arrayOut.push(arrayStr[i]);
        }
    };
    return arrayOut.join('');
}