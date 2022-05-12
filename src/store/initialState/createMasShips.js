const widthDeck = 10;
const heithDeck = 10;
const numFourDeck = 4;
const numThreeDeck = 3;
const numTwoDeck = 2;
const numOneDeck = 1;

function createShipsArray (fourDeck = numFourDeck, threeDeck  =numThreeDeck, twoDeck = numTwoDeck, oneDeck = numOneDeck) {
    const shpsArray = [];
    createDeckShips(shpsArray, 4, fourDeck);
    createDeckShips(shpsArray, 3, threeDeck);
    createDeckShips(shpsArray, 2, twoDeck);
    createDeckShips(shpsArray, 1, oneDeck);
    return shpsArray;
}

function createDeckShips(mas, numDeck, countDeck) {
    for (let i = 0; i < countDeck; i++) {
        mas.push(addNewShip(mas, numDeck))
    }
}

function addNewShip(mas, numDeck) {
    let newShip=[];
    do { newShip = generateShip(10, numDeck)
    } while (collision(mas, newShip));
    return newShip;    
}

function collision(shpsArray, newShip) {
    for (let i = 0; i < shpsArray.length; i++) {
        for (let j = 0; j < newShip.length; j++) {
            if (shpsArray[i].includes(newShip[j])) {
                return true
            }
        }
    }
    return false;
}

function generateShip(boardSize = 10, shipLength = 3) {
    let direction = Math.floor(Math.random() * 2);
    let row, col;
    if (direction === 1) {
        row = Math.floor(Math.random() * boardSize);
        col = Math.floor(Math.random() * (boardSize - shipLength +1 ));
    } else {
        row = Math.floor(Math.random() * (boardSize - shipLength + 1 ));
        col = Math.floor(Math.random() * boardSize);
    }
    let newShipLocations = [];
    for (let i = 0; i < shipLength; i++) {
        if (direction === 1) {
                newShipLocations.push(+(row + "" + (col + i)));
            } else {
                newShipLocations.push(+((row + i) + "" + col));
            }
        }
        return newShipLocations;
    }

export default createShipsArray;