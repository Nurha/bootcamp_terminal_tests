let assert = require("assert");
let isFromBellville = require("../isFromBellville");


describe('isFromBellville function test' , function(){

    it('should return true if parameter starts with CY' , function(){
        assert.equal(isFromBellville('CY 1234'), true)
    })

    it('should return false if parameter does not start with CY' , function(){
        assert.equal(isFromBellville('CA 1234'), false)
    })    

});