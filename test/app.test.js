const  calculator= require('../srcc/util/__mocks__/calculator.mock');
const  app= require('../srcc/app');

describe('Testing the use of the \'calculator\' module', () => {
    test('Testing doASum ...', () => {
        expect(app.doASum()).toEqual(20);
    });
});
