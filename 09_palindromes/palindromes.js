const palindromes = function (sentence) {
    sentence = sentence.toLowerCase().replace(/[' ']/g, '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    return sentence === sentence.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
