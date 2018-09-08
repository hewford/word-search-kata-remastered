const SearchDirection = require('../app/SearchDirection')

describe("targetCoordinates(rowIndex, letterIndex, i, direction) function in class SearchDirection should return coordinates resembling the direction being queried", () => {
    
    const searchDirection = new SearchDirection()

    test("searching right should search the next X coordinate", () => {
        expect(searchDirection.targetCoordinates(1, 1, 1, 'search_right')).toEqual([2, 1])
    })

})