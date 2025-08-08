const palindromes = function (text) {
    let cleantext = text.replace(/[^a-zA-z0-9]/g, "");
    length = cleantext.length;
    cleantext = cleantext.toLowerCase();
    for (let index = 0; index < length; index++) {
        isokay = cleantext[index] === cleantext[length-index-1]
        if(!isokay) return false; 
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
