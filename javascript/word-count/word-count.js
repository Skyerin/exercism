var swapNewLineForSpaces = function (input) {

    var cleanInput = input.trim();

    return cleanInput.replace(/\n/g, " ");
};

var getArrayOfWords = function (input) {

    var cleanInput = swapNewLineForSpaces(input);

    return cleanInput.split(" ");
};

var getCountObjectOfWords = function (input) {

    var wordCountObject = {};
    var wordArray = getArrayOfWords(input);

    for (var i = 0, l = wordArray.length; i < l; i++) {

        if (wordCountObject.hasOwnProperty(wordArray[i])) {

            wordCountObject[wordArray[i]] = wordCountObject[wordArray[i]] + 1;
        } else {

            wordCountObject[wordArray[i]] = 1;
        }
    }

    return wordCountObject;
};

if (module) {

    module.exports = getCountObjectOfWords;
}
