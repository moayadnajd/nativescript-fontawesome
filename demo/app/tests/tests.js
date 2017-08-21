var Fontawesome = require("nativescript-fontawesome").Fontawesome;
var fontawesome = new Fontawesome();

describe("greet function", function() {
    it("exists", function() {
        expect(fontawesome.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(fontawesome.greet()).toEqual("Hello, NS");
    });
});