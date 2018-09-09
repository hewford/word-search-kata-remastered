const Board = require('../app/Board')
const configVariables = require('../config')
const { SEARCH_RIGHT, SEARCH_LEFT, SEARCH_UP, SEARCH_DOWN, SEARCH_UP_AND_RIGHT, SEARCH_UP_AND_LEFT, SEARCH_DOWN_AND_LEFT, SEARCH_DOWN_AND_RIGHT } = require('../config/directions')

const SearchDirection = require('../app/SearchDirection')
const searchDirection = new SearchDirection()

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
          foundWord = searchDirection.search(word, board, letterIndex, rowIndex, SEARCH_DOWN)
        }
      }
    }
    return this.solution[word] = foundWord
  }
}

module.exports = SearchQuery