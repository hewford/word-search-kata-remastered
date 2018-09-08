
class SearchDirection {

    targetCoordinates(rowIndex, letterIndex, i, direction) {
        switch (direction) {
          case 'search_right':
            return [letterIndex+i, rowIndex]
        }
    }
}

module.exports = SearchDirection;