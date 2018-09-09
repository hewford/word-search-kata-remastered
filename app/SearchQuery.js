const Board = require('../app/Board')
const configVariables = require('../config')

class SearchQuery {
  constructor(words) {
    // initialize the object that will contain the solution
    this.solution = words.reduce((solution, word) => {
        solution[word] = ''
        return solution
    }, {})
  }

  startSearchQuery(word, board) {
    let foundWord = null

    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
      if (foundWord) {
        break
      }
      for (let letterIndex = 0; letterIndex < board[rowIndex].length; letterIndex++) {
        if (foundWord) {
          break
        } else if (board[rowIndex][letterIndex] === word[0]) {
          foundWord = ['('+letterIndex+', '+rowIndex+')']
        }
      }
    }
    return foundWord
  }
}

module.exports = SearchQuery