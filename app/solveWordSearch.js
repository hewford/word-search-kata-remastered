const Board = require('../app/Board')
const configVariables = require('../config')
const SearchQuery = require('../app/SearchQuery')

const letters = configVariables.BOARD_AS_SINGLE_STRING
const words = configVariables.WORDS_TO_SEARCH_FOR

const board = new Board(words, letters)
board.setUp()

const searchQuery = new SearchQuery(board.wordsToSearchFor)

board.wordsToSearchFor.forEach((word) => {
    searchQuery.startSearchQuery(word, board.board)
})

let solution = '\nHere is the solution:\n===========================================================================================\n'
Object.keys(searchQuery.solution).forEach((key) => {
    solution += key + ':'
    searchQuery.solution[key].forEach((coordinate, index) => {
        if(index !== 0) {
            solution += ','
        }
        solution += ' ' + coordinate

    })
    solution += '\n'
})
console.log(solution+'===========================================================================================\nThank you\n')
