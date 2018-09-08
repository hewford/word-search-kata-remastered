const configVariables = require('../config');

test("board should be initialized as a string", () => {
    expect(typeof configVariables.BOARD_AS_SINGLE_STRING).toBe('string')
});

test("words searching for should be initialized as a string", () => {
    expect(typeof configVariables.WORDS_TO_SEARCH_FOR).toBe('string')
});

