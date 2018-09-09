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

          const searching = (direction) =>{
            if (foundWord) {
              return foundWord
            } else {
              return searchDirection.search(word, board, letterIndex, rowIndex, direction)
            }
          }

          /* === SEARCH RIGHT ===*/
          foundWord = searching(SEARCH_RIGHT)

          /* === SEARCH LEFT ===*/
          foundWord = searching(SEARCH_LEFT)

          /* === SEARCH UP ===*/
          foundWord = searching(SEARCH_UP)

          /* === SEARCH DOWN ===*/
          foundWord = searching(SEARCH_DOWN)

          /* === SEARCH DOWN & RIGHT ===*/
          foundWord = searching(SEARCH_DOWN_AND_RIGHT)

          /* === SEARCH DOWN & LEFT ===*/
          foundWord = searching(SEARCH_DOWN_AND_LEFT)

          /* === SEARCH UP & RIGHT ===*/
          foundWord = searching(SEARCH_UP_AND_RIGHT)

          /* === SEARCH UP & LEFT ===*/
          foundWord = searching(SEARCH_UP_AND_LEFT)

          return foundWord
        } else {
          return null
        }
      }, null)
      
      return foundWord
      
    }, null)

    if(!foundWord) {
      return this.solution[word] = 'word not found'
    }

    return this.solution[word] = foundWord
  }
}

module.exports = SearchQuery