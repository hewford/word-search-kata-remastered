const Board = require('../app/Board')
const configVariables = require('../config')

describe("Board should have an array of words to search for", () => {
  
    test("words to search for should be an array", () => {
        const board = new Board()
      expect(board.wordsToSearchFor).toEqual([])
    });

  });