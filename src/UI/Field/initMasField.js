function initMasField(rows = 10, cols = 10) {
    const masField = new Array (rows*cols)
    for (let i = 0; i < masField.length; i++ ) {
        masField[i] = i;
    }
    return masField;
}

export default initMasField;