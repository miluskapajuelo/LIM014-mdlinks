var sum = jest.fn().mockReturnValue(20);
var dif = jest.fn().mockReturnValue(-20);

const calculator = jest.mock('../calculator.js', () => {
    return {
        sum,
        dif
    };
});

module.exports = {
  calculator,
};