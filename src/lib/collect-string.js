/*=====================================================
    Accepts file data and returns matched translatable strings
=====================================================*/
const fs = require('fs');

function collectStrings(fileData) {
    var patternGlobal = /(?:{{|\()t *?"(.*?(?:\\"?|[^\\"])*?)"/g;
    var pattern = /(?:{{|\()t *?"(.*?(?:\\"?|[^\\"])*?)"/;

    var allMatches = fileData.match(patternGlobal);
    // converting matched string to object by rematching without global(g) flag
    for( key in allMatches) {
        allMatches[key] = allMatches[key].match(pattern);
    }
    var matchedStrings = [];
    for(key in allMatches) {
        matchedStrings.push(allMatches[key][1]);
    }
    return matchedStrings;
}

module.exports = collectStrings;