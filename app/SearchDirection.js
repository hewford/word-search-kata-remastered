const { SEARCH_RIGHT, SEARCH_LEFT, SEARCH_UP, SEARCH_DOWN, SEARCH_UP_AND_RIGHT, SEARCH_UP_AND_LEFT, SEARCH_DOWN_AND_LEFT, SEARCH_DOWN_AND_RIGHT } = require('../config/directions')

class SearchDirection {

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
        
        const foundWord = word.split('').reduce((coordinates, item, i) => {

            let targetCoordinate = this.targetCoordinates(rowIndex, letterIndex, i, direction)

            if(!board[targetCoordinate[1]]){
                return coordinates
            }
            
            const nextCoordinate = this.checkTargetedCoordinate(word[i], board[targetCoordinate[1]][targetCoordinate[0]], targetCoordinate[0], targetCoordinate[1])

            if (nextCoordinate){
                coordinates.push(nextCoordinate)
            }
            return coordinates
            
        }, [])

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