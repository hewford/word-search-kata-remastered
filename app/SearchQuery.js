const { SEARCH_RIGHT, SEARCH_LEFT, SEARCH_UP, SEARCH_DOWN, SEARCH_UP_AND_RIGHT, SEARCH_UP_AND_LEFT, SEARCH_DOWN_AND_LEFT, SEARCH_DOWN_AND_RIGHT } = require('../config/directions')
const SearchDirection = require('../app/SearchDirection')
const searchDirection = new SearchDirection()

class SearchQuery {
  constructor (words) {
    // initialize the object that will contain the solution.
    this.solution = words.reduce((solution, word) => {
        solution[word] = ''
        return solution
    }, {})

    // store the directions in an array to loop through
    this.directions = [SEARCH_RIGHT, SEARCH_LEFT, SEARCH_UP, SEARCH_DOWN, SEARCH_UP_AND_RIGHT, SEARCH_UP_AND_LEFT, SEARCH_DOWN_AND_LEFT, SEARCH_DOWN_AND_RIGHT]
  }

  startSearchQuery (word, board) {
    // loop through every row on the board.
    const foundWord = board.reduce((foundWord, row, rowIndex) => {
      if (foundWord) {
        return foundWord
      }
      
      // loop through every letter in the row.
      foundWord = row.reduce((foundWord, letter, letterIndex) => {
        // create function to search a direction if the word hasn't been found
        const searching = (direction, found) =>{
          if (found) {
            return found
          } else {
            return searchDirection.search(word, board, letterIndex, rowIndex, direction)
          }
        }

        // if the word has been found, do not continue searching.
        if (foundWord) {
          return foundWord;
        // if the letter on the board matches the first letter of the word, search all directions check if one matches the word.
        } else if (word[0] === letter) {
          foundWord = this.directions.reduce((found, direction) => {
            return searching(direction, found)
          }, null)

          return foundWord
        } else {
          return null
        }

      }, null)

      return foundWord
    }, null)

    // if the word isn't found, store 'word not found,' otherwise store the coordinates of the found word.
    if (!foundWord) {
      return this.solution[word] = 'word not found'
    }

    return this.solution[word] = foundWord
  }
}

module.exports = SearchQuery