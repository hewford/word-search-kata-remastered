const configVariables = require('../config')

class Board {

    constructor(words, letters) {
        this.wordsToSearchFor = words ? words.split(' ') : []

        this.letters = letters ? letters.split('') : []

        this.board = []
    }
}

module.exports = Board;