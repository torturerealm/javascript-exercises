const reverseString = function(text) {
    let newText = text.split("");
    let reversedText = "";
    for (i = text.length - 1; i >= 0; i--) {
        reversedText += newText[i];
    }
    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
