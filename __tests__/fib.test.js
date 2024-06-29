 //junit test
 //npm test ./__tests__/fib.test.js 
 
 //var junit = require("../../lib");

 //var it = junit();
 //var eq = it.eq;
 
 module.exports = function (it) {
    it("test 01", function () {
        return eq(1, 1);
    });
    it("test 02", function () {
        return eq("OK", "OK");
    });
};