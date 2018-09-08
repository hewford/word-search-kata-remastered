const SearchDirection = require('../app/SearchDirection')
const { SEARCH_RIGHT, SEARCH_LEFT, SEARCH_UP, SEARCH_DOWN, SEARCH_UP_AND_RIGHT, SEARCH_UP_AND_LEFT, SEARCH_DOWN_AND_LEFT, SEARCH_DOWN_AND_RIGHT } = require('../config/directions')

describe("targetCoordinates(rowIndex, letterIndex, i, direction) function in class SearchDirection should return coordinates resembling the direction being queried", () => {
    
    const searchDirection = new SearchDirection()

    test("searching RIGHT should search the next X coordinate", () => {
        expect(searchDirection.targetCoordinates(1, 1, 1, SEARCH_RIGHT)).toEqual([2, 1])
    })

    test("searching LEFT should search the previous X coordinate", () => {
        expect(searchDirection.targetCoordinates(1, 1, 1, SEARCH_LEFT)).toEqual([0, 1])
    })

    test("searching UP should search the previous Y coordinate", () => {
        expect(searchDirection.targetCoordinates(1, 1, 1, SEARCH_UP)).toEqual([1, 0])
    })

    test("searching DOWN should search the next Y coordinate", () => {
        expect(searchDirection.targetCoordinates(1, 1, 1, SEARCH_DOWN)).toEqual([1, 2])
    })

    test("searching UP and RIGHT should search the next X coordinate and previous Y coordinate", () => {
        expect(searchDirection.targetCoordinates(1, 1, 1, SEARCH_UP_AND_RIGHT)).toEqual([2, 0])
    })

    test("searching DOWN and RIGHT should search the next X coordinate and next Y coordinate", () => {
        expect(searchDirection.targetCoordinates(1, 1, 1, SEARCH_DOWN_AND_RIGHT)).toEqual([2, 2])
    })

    test("searching DOWN and LEFT should search the previous X coordinate and next Y coordinate", () => {
        expect(searchDirection.targetCoordinates(1, 1, 1, SEARCH_DOWN_AND_LEFT)).toEqual([0, 2])
    })

})