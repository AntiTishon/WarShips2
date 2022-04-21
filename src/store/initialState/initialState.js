import createMasShips from "./createMasShips";

function initialState() {
    return {
       ships: createMasShips().map (el => ({
            locations: el,
            isKilled: false,
        })),
       
       endGame: false,
       killedShips: 0,
       shots: 0
    }
}

export default initialState;