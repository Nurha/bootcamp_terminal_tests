let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('countRegNumber function test' , function(){

    it('should count the amount of reg numbers in the string' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3)
    })

    it('should count the amount of reg numbers in the string' , function(){
        assert.equal(countRegNumber('DC 55 YU LK'), 1)
    })

});