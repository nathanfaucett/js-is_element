var assert = require("assert"),
    isElement = require("../src/index");


describe("isElement", function() {
    it("should return true when the value is an Element", function() {
        assert.equal(isElement({
            nodeType: 1
        }), true);
    });
});