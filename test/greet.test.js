let assert = require("assert");
let greet = require("../greet");

describe('greet function test' , function(){

    it('should greet parameter passed in ' , function(){
        assert.equal(greet('Loki'), "Hello, Loki")
    })

});