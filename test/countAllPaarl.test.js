let assert = require("assert");

let countAllPaarl = require("../countAllPaarl");

describe('countAllPaarl function test' , function(){

    it('should count the amount of reg numbers in the string from paarl' , function(){
        assert.equal(countAllPaarl('CA 182736,CY 523519,CJ 812328'), 1)
    })

    it('should count the amount of reg numbers in the string from paarl' , function(){
        assert.equal(countAllPaarl('DC 55 YU LK, CJ 155755, CJ 345098'), 2)
    })

});