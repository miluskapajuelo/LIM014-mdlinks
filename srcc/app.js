const {sum, dif}= require('./util/calculator');

const doASum = () => {
    let a = 5;
    let b = 10;

    return sum(a, b);
};

const doADif = () => {
    let a = 5;
    let b = 10;

    return dif(a, b);
};

module.exports = {
    doASum,
    doADif
};