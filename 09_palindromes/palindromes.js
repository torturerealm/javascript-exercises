const palindromes = function(text) {
    const punctuations = /[!., ]/g;
    let newText = text.replace(punctuations, "");
    newText = newText.toLowerCase();

    let left = 0;
    let right = newText.length - 1;
    while (left < right) {
        if (newText.charAt(left) != newText.charAt(right)) return false;
        else {
            left++;
            right--;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
