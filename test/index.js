/** eslint-env node, mocha */

const expect = require('chai').expect;
const sinon = require('sinon');

const Optional = require('../');

describe('Optional type', () => {
    it("should error when valididty isn't checked", () => {
        const opt = new Optional('yes');
        let tested = false;
        try {
            const v = opt.value;
        } catch (e) {
            expect(e.message).to.equal('Optional value not checked for validity');
            tested = true;
        } finally {
            expect(tested).to.equal(true);
        }
    });
});
