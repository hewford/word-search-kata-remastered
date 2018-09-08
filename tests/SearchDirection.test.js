const SearchDirection = require('../app/SearchDirection')
const { SEARCH_RIGHT, SEARCH_LEFT, SEARCH_UP, SEARCH_DOWN, SEARCH_UP_AND_RIGHT, SEARCH_UP_AND_LEFT, SEARCH_DOWN_AND_LEFT, SEARCH_DOWN_AND_RIGHT } = require('../config/directions')

describe("targetCoordinates(rowIndex, letterIndex, i, direction) function in class SearchDirection should return coordinates resembling the direction being queried", () => {
    
    const searchDirection = new SearchDirection()

    test("searching right should search the next X coordinate", () => {
        expect(searchDirection.targetCoordinates(1, 1, 1, SEARCH_RIGHT)).toEqual([2, 1])
    })

    test("searching left should search the previous X coordinate", () => {
        expect(searchDirection.targetCoordinates(1, 1, 1, SEARCH_LEFT)).toEqual([0, 1])
    })

})