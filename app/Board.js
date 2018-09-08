const configVariables = require('../config')

class Board {

    constructor(words) {
        this.wordsToSearchFor = words ? words.split(' ') : []

        this.letters = []
        
  
    }
}

module.exports = Board;