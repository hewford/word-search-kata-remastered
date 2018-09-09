const { SEARCH_RIGHT, SEARCH_LEFT, SEARCH_UP, SEARCH_DOWN, SEARCH_UP_AND_RIGHT, SEARCH_UP_AND_LEFT, SEARCH_DOWN_AND_LEFT, SEARCH_DOWN_AND_RIGHT } = require('../config/directions')

class SearchDirection {
    // target a coordinate based on a direction, taking the index as the distance away from the starting coordinate
    targetCoordinates(rowIndex, letterIndex, i, direction) {
        switch (direction) {
            case SEARCH_RIGHT:
                return [letterIndex+i, rowIndex]

            case SEARCH_DOWN_AND_RIGHT:
                return [letterIndex+i, rowIndex+i]

            case SEARCH_DOWN:
                return [letterIndex, rowIndex+i]

            case SEARCH_DOWN_AND_LEFT:
                return [letterIndex-i, rowIndex+i]

            case SEARCH_LEFT:
                return [letterIndex-i, rowIndex]

            case SEARCH_UP_AND_LEFT:
                return [letterIndex-i, rowIndex-i]

            case SEARCH_UP:
                return [letterIndex, rowIndex-i]

            case SEARCH_UP_AND_RIGHT:
                return [letterIndex+i, rowIndex-i]
        }
    }

    search (word, board, letterIndex, rowIndex, direction) {
        // loop through every letter in the word and check if the letter matches the next space on the board.
        const foundWord = word.split('').reduce((coordinates, letter, i) => {
            // find next space/coordinate given a direction.
            let targetCoordinate = this.targetCoordinates(rowIndex, letterIndex, i, direction)

            // if the row does not exist, don't search for next coordinates.
            if (!board[targetCoordinate[1]]) {
                return coordinates
            }
            
            // check to see if the letter at the next coordinate matches the current letter of the word being searched for.
            const nextCoordinate = this.checkTargetedCoordinate(letter, board[targetCoordinate[1]][targetCoordinate[0]], targetCoordinate[0], targetCoordinate[1])

            // if the letter matches, push the coordinate to the reducer.
            if (nextCoordinate){
                coordinates.push(nextCoordinate)
            }
            return coordinates
        }, [])

        // if all the letters match, return the coordinates, otherwise return null.
        if (word.length === foundWord.length) {
            return foundWord
        } else {
            return null
        }
    }

    checkTargetedCoordinate(letterSearchingFor, letterQueried, coordinateX, coordinateY) {
        // if next letter is found, store the coordinate
        if (letterSearchingFor === letterQueried) {
          return '(' + (coordinateX) + ', ' + (coordinateY) + ')'
        } else {
          return null
        }
    }
}

module.exports = SearchDirection;