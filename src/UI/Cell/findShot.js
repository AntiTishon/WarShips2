function findShot(masShips, numCell) {
    for (let i = 0; i < masShips.length; i++) {
        if (!masShips[i].isKiiled) {
            if (masShips[i].locations.includes(numCell)) {
                return true
            }
        }
    }
    return false
}

export default findShot;