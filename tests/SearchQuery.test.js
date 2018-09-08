const Board = require('../app/Board')
const configVariables = require('../config')
const SearchQuery = require('../app/SearchQuery');

describe("testing the set up of the search query", () => {
    let searchQuery;
  
    let board;
  
    beforeEach(() => {
      board = new Board()
      board.setUp()
      searchQuery = new SearchQuery()
  
    })

    test("search query's state, solution should be an object", () => {
        expect(typeof searchQuery.solution).toBe('object')
    });
})