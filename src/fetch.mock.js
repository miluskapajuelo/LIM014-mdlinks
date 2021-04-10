var mdLinks = jest.fn().mockReturnValue('ok');

const validate = jest.mock('../src/functions/fetch.js', () => {
    return {
        mdLinks
    };
});

module.exports = {
    validate,
};