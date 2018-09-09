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
    const words = ['AIL', 'BEE', 'RIB', 'EAT', 'ABS', 'EAR', 'TIE', 'BIT']
    let searchQuery
    const board = [
        ['Z', 'Z', 'Z', 'S'],
        ['E', 'E', 'B', 'B'],
        ['Z', 'A', 'I', 'L'],
        ['Z', 'T', 'R', 'T']]

    beforeEach(() => {
        searchQuery = new SearchQuery(words)
    })

    test("search query should be able to find the first letter", () => {
        expect(searchQuery.startSearchQuery('A', board)).toEqual(["(1, 2)"])
    })

    test("search query should be able to find the first letter and store in the state solution's matching property", () => {
        searchQuery.startSearchQuery('A', board)
        expect(searchQuery.solution['A']).toEqual(searchQuery.startSearchQuery('A', board))
    })

    test("search query should be able to find all the coordinates of the word searching DOWN", () => {
        expect(searchQuery.startSearchQuery('EAT', board)).toEqual(['(1, 1)', '(1, 2)', '(1, 3)'])
    })

    test("search query should be able to find all the coordinates of the word searching RIGHT", () => {
        expect(searchQuery.startSearchQuery('EBB', board)).toEqual(['(1, 1)', '(2, 1)', '(3, 1)'])
    })

    test("search query should be able to find all the coordinates of the word searching LEFT", () => {
        expect(searchQuery.startSearchQuery('BEE', board)).toEqual(['(2, 1)', '(1, 1)', '(0, 1)'])
    })

    test("search query should be able to find all the coordinates of the word searching UP", () => {
        expect(searchQuery.startSearchQuery('RIB', board)).toEqual(['(2, 3)', '(2, 2)', '(2, 1)'])
    })

    test("search query should be able to find all the coordinates of the word searching UP and RIGHT", () => {
        expect(searchQuery.startSearchQuery('ABS', board)).toEqual(["(1, 2)", "(2, 1)", "(3, 0)"])
    })

    test("search query should be able to find all the coordinates of the word searching DOWN and RIGHT", () => {
        expect(searchQuery.startSearchQuery('EAR', board)).toEqual(["(0, 1)", "(1, 2)", "(2, 3)"])
    })

    test("search query should be able to find all the coordinates of the word searching UP and LEFT", () => {
        expect(searchQuery.startSearchQuery('TIE', board)).toEqual(["(3, 3)", "(2, 2)", "(1, 1)"])
    })

    test("search query should be able to find all the coordinates of the word searching DOWN and LEFT", () => {
        expect(searchQuery.startSearchQuery('BIT', board)).toEqual(["(3, 1)", "(2, 2)", "(1, 3)"])
    })

    test("search query should be able to find all words and store them in the solution", () => {
        const solution = {
            AIL: ['(1, 2)', '(2, 2)', '(3, 2)'],
            EAT: ['(1, 1)', '(1, 2)', '(1, 3)'],
            BEE: ['(2, 1)', '(1, 1)', '(0, 1)'],
            RIB: ['(2, 3)', '(2, 2)', '(2, 1)'],
            ABS: ["(1, 2)", "(2, 1)", "(3, 0)"],
            EAR: ["(0, 1)", "(1, 2)", "(2, 3)"],
            TIE: ["(3, 3)", "(2, 2)", "(1, 1)"],
            BIT: ["(3, 1)", "(2, 2)", "(1, 3)"]
        }
        
        searchQuery.startSearchQuery('AIL', board)
        searchQuery.startSearchQuery('EAT', board)
        searchQuery.startSearchQuery('BEE', board)
        searchQuery.startSearchQuery('RIB', board)
        searchQuery.startSearchQuery('ABS', board)
        searchQuery.startSearchQuery('EAR', board)
        searchQuery.startSearchQuery('TIE', board)
        searchQuery.startSearchQuery('BIT', board)
        
        expect(solution).toEqual(searchQuery.solution)
    })
})
