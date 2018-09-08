const configVariables = require('../config')

class Board {

    constructor(words, letters) {
        this.wordsToSearchFor = words ? words.split(' ') : []

        this.letters = letters ? letters.split('') : []

        this.board = []
    }

    setUp() {
        this.board=[[],[]]
        return this.board
    }
}

module.exports = Board;