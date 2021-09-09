let assert = require("assert");

let transportFee = require("../transportFee");

describe('transportFee function test' , function(){

    it('return the fee for morning shift' , function(){
        assert.equal(transportFee('morning'), 'R20')
    })

    it('return the fee for afternoon shift' , function(){
        assert.equal(transportFee('afternoon'), 'R10')
    })

    it('return the fee for night shift' , function(){
        assert.equal(transportFee('nightshift'), 'free')
    })

});