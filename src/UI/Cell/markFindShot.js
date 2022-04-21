const _ = require('lodash');
function markFindShot(masShips, numCell=11) {
    /*for (let i = 0; i < masShips.length; i++) {
        if (!masShips[i].isKiiled) {
            if (masShips[i].locations.includes(numCell)) {
                return true
            }
        }
    }
    return false*/

    return _.cloneDeep(masShips).map((el,index) => {
        //console.log(el)
        if (el.locations.includes(numCell)) {
               el.locations[el.locations.indexOf(numCell)] = "x"
                return el
                
        } else return el
    }) 
}

export default markFindShot;

