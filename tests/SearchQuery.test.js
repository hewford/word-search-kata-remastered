const Board = require('../app/Board')
const configVariables = require('../config')
const SearchQuery = require('../app/SearchQuery');

describe("testing the set up of the search query", () => {
    let searchQuery;
  
    let board;

    const letters = configVariables.BOARD_AS_SINGLE_STRING
    const words = configVariables.WORDS_TO_SEARCH_FOR

    beforeEach(() => {
      board = new Board(words, letters)
      board.setUp()
      searchQuery = new SearchQuery(board.wordsToSearchFor)
  
    })

    test("search query's state, solution should be an object", () => {
        expect(typeof searchQuery.solution).toBe('object')
    })

    test("word search query's this.solution's keys are named by the words that are being searched", () => {
        expect(Object.keys(searchQuery.solution))
        .toEqual(board.wordsToSearchFor.map((word) => {
            return word
          }))
    })
})