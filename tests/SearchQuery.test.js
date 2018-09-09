const Board = require('../app/Board')
const configVariables = require('../config')
const SearchQuery = require('../app/SearchQuery')

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

describe("Search Query should be able to find a word and its coordinates", () => {
    const searchQuery = new SearchQuery(['A', 'EAT'])
    const board = [
        ['Z', 'Z', 'Z', 'S'],
        ['E', 'E', 'B', 'B'],
        ['Z', 'A', 'I', 'L'],
        ['Z', 'T', 'R', 'T']]

    test("search query should be able to find the first letter", () => {
        expect(searchQuery.startSearchQuery('A', board)).toEqual(["(1, 2)"])
    })

    test("search query should be able to find the first letter and store in the state solution's matching property", () => {
        expect(searchQuery.solution['A']).toEqual(searchQuery.startSearchQuery('A', board))
    })

    test("search query should be able to find all the coordinates of the word searching DOWN", () => {
        expect(searchQuery.startSearchQuery('EAT', board)).toEqual(['(1, 1)', '(1, 2)', '(1, 3)'])
    })
})