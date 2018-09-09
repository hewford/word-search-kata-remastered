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

    const foundWord = board.reduce((foundWord, row, rowIndex) => {

      if (foundWord) {
        return foundWord
      }
      foundWord = row.reduce((foundWord, letter, letterIndex) => {

        if (foundWord) {
          return foundWord;

        } else if (word[0] === letter) {

          /* === SEARCH RIGHT ===*/
          const searchRight = searchDirection.search(word, board, letterIndex, rowIndex, SEARCH_RIGHT)
          if (searchRight) {
            return searchRight
          }

          /* === SEARCH LEFT ===*/
          const searchLeft = searchDirection.search(word, board, letterIndex, rowIndex, SEARCH_LEFT)
          if (searchLeft) {
            return searchLeft
          }

          /* === SEARCH UP ===*/
          const searchUp = searchDirection.search(word, board, letterIndex, rowIndex, SEARCH_UP)
          if (searchUp) {
            return searchUp
          }

          /* === SEARCH DOWN ===*/
          const searchDown = searchDirection.search(word, board, letterIndex, rowIndex, SEARCH_DOWN)
          if (searchDown) {
            return searchDown
          }

          /* === SEARCH DOWN & RIGHT ===*/

          /* === SEARCH DOWN & LEFT ===*/

          /* === SEARCH UP & RIGHT ===*/
          const searchUpAndRight = searchDirection.search(word, board, letterIndex, rowIndex, SEARCH_UP_AND_RIGHT)
          if (searchUpAndRight) {
            return searchUpAndRight
          }

          /* === SEARCH UP & LEFT ===*/

          return foundWord
        } else {
          return null
        }
      }, null)
      
      return foundWord
      
    }, null)

    return this.solution[word] = foundWord

  }
}

module.exports = SearchQuery