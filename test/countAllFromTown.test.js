let assert = require("assert");

let countAllFromTown = require("../countAllFromTown");

describe('countAllFromTown function test' , function(){

    it('should count the amount of reg numbers in the string from paarl' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3)
    })

    it('should count the amount of reg numbers in the string from paarl' , function(){
        assert.equal(countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF'), 1)
    })

});