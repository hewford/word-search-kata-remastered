const SearchDirection = require('../app/SearchDirection')
const { SEARCH_RIGHT, SEARCH_LEFT, SEARCH_UP, SEARCH_DOWN, SEARCH_UP_AND_RIGHT, SEARCH_UP_AND_LEFT, SEARCH_DOWN_AND_LEFT, SEARCH_DOWN_AND_RIGHT } = require('../config/directions')

const searchDirection = new SearchDirection()

describe("targetCoordinates(y, x, i, direction) function in class SearchDirection should return coordinates resembling the direction being queried", () => {

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

    test("searching UP and LEFT should search the previous X coordinate and previous Y coordinate", () => {
        expect(searchDirection.targetCoordinates(1, 1, 1, SEARCH_UP_AND_LEFT)).toEqual([0, 0])
    })
})

describe("checkTargetCoordinate should take in a letter that is searching for, a letter being queried, and two coordinates to check to see if that coordinate matches", () => {

    test("searching a target coordinate should return the coordinate as a string if the letters match", () => {
        expect(searchDirection.checkTargetedCoordinate('A', 'A', 2, 3)).toEqual('(2, 3)')
    })

})

