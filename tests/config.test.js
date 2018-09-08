const configVariables = require('../config');

test("board should be initialized as a string", () => {
    expect(typeof configVariables.BOARD_AS_SINGLE_STRING).toBe('string')
});

test("config variable words searching for should be initialized as a string", () => {
    expect(typeof configVariables.WORDS_TO_SEARCH_FOR).toBe('string')
});

test("config variable words searching for have content", () => {
    expect(configVariables.WORDS_TO_SEARCH_FOR.length).toBeGreaterThan(0)
});

test("config variable words searching should not begin with a space", () => {
    expect(configVariables.WORDS_TO_SEARCH_FOR[0]).not.toBe(' ')
});

test("config variable words searching should not end with a space", () => {
    expect(configVariables.WORDS_TO_SEARCH_FOR[configVariables.WORDS_TO_SEARCH_FOR.length-1]).not.toBe(' ')
});
