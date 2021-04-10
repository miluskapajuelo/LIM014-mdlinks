const  calculator= require('../src/fetch.mock');
const  api= require('../src/api');

describe('Testing the use of the \'calculator\' module', () => {
    test('Testing doASum ...', () => {
        return expect(api.mdLinks('./test/prueba/prueba2/onePath.md', {validate: true})).resolves.toBe('OK')
    });
});

