const { SEARCH_RIGHT, SEARCH_LEFT, SEARCH_UP, SEARCH_DOWN, SEARCH_UP_AND_RIGHT, SEARCH_UP_AND_LEFT, SEARCH_DOWN_AND_LEFT, SEARCH_DOWN_AND_RIGHT } = require('../config/directions')

class SearchDirection {

    targetCoordinates(rowIndex, letterIndex, i, direction) {
        switch (direction) {
            case SEARCH_RIGHT:
                return [letterIndex+i, rowIndex]

            case SEARCH_LEFT:
                return [letterIndex-i, rowIndex]

            case SEARCH_UP:
                return [letterIndex, rowIndex-i]

            case SEARCH_DOWN:
                return [letterIndex, rowIndex+i]
        }
    }
}

module.exports = SearchDirection;