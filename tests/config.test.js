const configVariables = require('../config');

test("board should be initialized as a string", () => {
    expect(typeof configVariables.BOARD_AS_SINGLE_STRING).toBe('string')
  });

