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

    this.directions = [SEARCH_RIGHT, SEARCH_LEFT, SEARCH_UP, SEARCH_DOWN, SEARCH_UP_AND_RIGHT, SEARCH_UP_AND_LEFT, SEARCH_DOWN_AND_LEFT, SEARCH_DOWN_AND_RIGHT]
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

          const searching = (direction, reducer) =>{
            if (reducer) {
              return reducer
            } else {
              return searchDirection.search(word, board, letterIndex, rowIndex, direction)
            }
          }

          foundWord = this.directions.reduce((reducer, direction) => {
            return searching(direction, reducer)
          }, null)

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