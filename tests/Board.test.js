const Board = require('../app/Board')
const configVariables = require('../config')

describe("Board should have an array of words to search for", () => {
  
    test("words to search for should be an array", () => {
        const board = new Board()
        expect(board.wordsToSearchFor).toEqual([])
    });

    test("words to search should be an array of words passed through", () => {
        const board = new Board('DICE FUN JAVA')
        expect(board.wordsToSearchFor).toEqual(['DICE', 'FUN', 'JAVA'])
    });
    

  });