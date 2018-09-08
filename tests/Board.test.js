const Board = require('../app/Board')
const configVariables = require('../config')

describe("Board should have an array of words to search for", () => {
  
    test("words to search for should be an array", () => {
        const board = new Board()
        expect(board.wordsToSearchFor).toEqual([])
    });

    test("words to search should be an array of words passed to the class Board", () => {
        const board = new Board('DICE FUN JAVA')
        expect(board.wordsToSearchFor).toEqual(['DICE', 'FUN', 'JAVA'])
    });

    test("words to search array elements should be strings", () => {
        const board = new Board(configVariables.WORDS_TO_SEARCH_FOR)

        expect(board.wordsToSearchFor.every(function(item) {
          return typeof item === "string"
        })).toBe(true)
      });
    
  });

  describe("Board should have an array of letters that represent the board", () => {
  
    test("letters should be an array", () => {
        const board = new Board()
        expect(board.letters).toEqual([])
    });
    
  });