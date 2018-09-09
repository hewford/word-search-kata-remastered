const configVariables = require('../config')

class Board {

    constructor(words, letters) {
        this.wordsToSearchFor = words ? words.split(' ') : []
        this.letters = letters ? letters.split(' ') : []
        this.board = []
    }

    setUp() {
        const setUp = this.letters.reduce((setUp, letter, index) => {

            if (index % Math.sqrt(this.letters.length) === 0 && index !== 0) {
                setUp.currentRowIndex++
                setUp.board[setUp.currentRowIndex] = []
            }
            setUp.board[setUp.currentRowIndex].push(letter)

            return setUp
        },{board: [[]], currentRowIndex:0})

        return this.board = setUp.board
    }
}

module.exports = Board;