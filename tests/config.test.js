const configVariables = require('../config');

test("board should be initialized as a string", () => {
    expect(typeof configVariables.BOARD_AS_SINGLE_STRING).toBe('string')
});

describe("config variable words searching for should be formatted correctly", () => {

    test("variable words searching for should be initialized as a string", () => {
        expect(typeof configVariables.WORDS_TO_SEARCH_FOR).toBe('string')
    });
    
    test("variable words searching for should have content", () => {
        expect(configVariables.WORDS_TO_SEARCH_FOR.length).toBeGreaterThan(0)
    });
    
    test("variable words searching for should not begin with a space", () => {
        expect(configVariables.WORDS_TO_SEARCH_FOR[0]).not.toBe(' ')
    });
    
    test("variable words searching for should not end with a space", () => {
        expect(configVariables.WORDS_TO_SEARCH_FOR[configVariables.WORDS_TO_SEARCH_FOR.length-1]).not.toBe(' ')
    });
    
    test("variable words searching for should not end with a space", () => {
        expect(configVariables.WORDS_TO_SEARCH_FOR[configVariables.WORDS_TO_SEARCH_FOR.length-1]).not.toBe(' ')
    });
    
    test("variable words searching for should be separated by a space to be able to create an array of more than one word", () => {
        expect(configVariables.WORDS_TO_SEARCH_FOR.split(' ').length).toBeGreaterThan(1)
    });
    
    test("variable words searching for shortest word should be at least 3 characters long", () => {
        const shortestWord = configVariables.WORDS_TO_SEARCH_FOR.split(' ').sort(function(a, b) {
            return a.length - b.length;
          })[0];
          
        expect(shortestWord.length).toBeGreaterThan(2)
    });
    
    test('variable words searching for should only contain letters and spaces to separate the words', () => {
        expect(configVariables.WORDS_TO_SEARCH_FOR).toBe(configVariables.WORDS_TO_SEARCH_FOR.replace(/[^A-Za-z\s]/g,''))
    });
})

