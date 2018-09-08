const Board = require('../app/Board');
const configVariables = require('../config');

class SearchQuery {
  constructor(words) {
    // initialize the object that will contain the solution
    this.solution = words.reduce((solution, word) => {
        solution[word] = '';
        return solution
    }, {})

    
  }
}

module.exports = SearchQuery;