class Board {
    constructor (words, letters) {
        // words is a single string of words separated by spaces.
        // letters is the board flattened to a single string.
        this.wordsToSearchFor = words ? words.split(' ') : []
        this.letters = letters ? letters.split(' ') : []
        this.board = []
    }

    // set up board to be an array with subarrays representing each row
    setUp () {
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