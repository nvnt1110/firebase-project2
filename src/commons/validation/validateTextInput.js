const checkAlphanumeric = /[^0-9a-zA-z]/g;

export const validateTextInput = (value) => {
    if (value.length === 0) {
        return 'value null';
    }
    const checkValue = value.match(checkAlphanumeric);
    console.log("validateTextInput ~ checkValue", checkValue)
    if (checkValue) {
        return 'character special';
    }
    return null;
};
