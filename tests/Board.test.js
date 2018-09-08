const Board = require('../app/Board')
const configVariables = require('../config')

describe("Board should have an array of words to search for", () => {
  
    test("words to search for should be an array", () => {
        const board = new Board()
        expect(board.wordsToSearchFor).toEqual([])
    })

    test("words to search should be an array of words passed to the class Board", () => {
        const board = new Board('DICE FUN JAVA')
        expect(board.wordsToSearchFor).toEqual(['DICE', 'FUN', 'JAVA'])
    })

    test("words to search array elements should be strings", () => {
        const board = new Board(configVariables.WORDS_TO_SEARCH_FOR)

        expect(board.wordsToSearchFor.map((item) => {
          return typeof item
        }))
        .toEqual(board.wordsToSearchFor.map((item) => {
            return 'string'
        }))
    })
    
})

describe("Board should have an array of letters that represent the board", () => {
  
    test("letters should be an array", () => {
        const board = new Board()
        expect(board.letters).toEqual([])
    })

    test("letters should be an array of letters passed to the class Board", () => {
        const board = new Board(null, 'Q W E R T Y')
        expect(board.letters).toEqual(['Q', 'W', 'E', 'R', 'T', 'Y'])
    })

    test("class Board should contain a board state who's value is an array", () => {
        const board = new Board(null, 'Q W E R T Y')
        expect(board.board).toEqual([])
    })

})

describe('Board setup should build an array that represents a square board', () => {

    let board
    const letters = 'A S D F G H J K L'

    beforeEach(() => {
        board = new Board(null, letters)
        board.setUp()
    })

    test('Set up should produce an array equal to the board state', () => {
        expect(board.setUp()).toBe(board.board)
    })

    test('Set up should produce an array with subarrays', () => {
        expect(board.setUp().map((row) => {
            return row.__proto__.constructor.name
        }))
        .toEqual(board.board.map(()=>{
            return 'Array'
        }))
    })

    test("Set up array's length should be equal to the length of the sub arrays", () => {
        expect(board.setUp().length).toEqual(board.setUp()[0].length)
    })

    test("board's sub arrays length should equal the square root of the letter's array", () => {

        expect(board.setUp().map((row) => {
            return row.length
        }))
        .toEqual(board.board.map(()=>{
            return Math.sqrt(board.letters.length)
        }))
    })

    test("Set up should transform the letters into a square board", () => {
        expect(board.board).toEqual([
            ['A','S','D'],
            ['F','G','H'],
            ['J','K','L']])
    })

})

test("testing the .reduce vs the for-loop with the config variables", () => {

    const letters = configVariables.BOARD_AS_SINGLE_STRING
    const words = configVariables.WORDS_TO_SEARCH_FOR

    const board = new Board(words, letters)
    
    board.setUp()

    let mockBoard = []

    const rowLength = Math.sqrt(letters.split(' ').length)
    let lettersIndex = 0;

    for (let i = 0; i < rowLength; i++) {
      let row = []

      for (let j = 0; j < rowLength; j++) {
        row.push(letters.split(' ')[lettersIndex])
        lettersIndex++;
      }

      mockBoard[i] = row
    }
    
    expect(board.board).toEqual(mockBoard)

})




