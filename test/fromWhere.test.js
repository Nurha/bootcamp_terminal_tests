let assert = require("assert");

let fromWhere = require("../fromWhere");

describe('fromWhere function test' , function(){

    it('should returns the town the car is from' , function(){
        assert.equal(fromWhere('CY 7864'), 'Bellville');
    })

    it('should returns the town the car is from' , function(){
        assert.equal(fromWhere('CJ 0985'), 'Paarl')
    })

    it('should returns the town the car is from' , function(){
        assert.equal(fromWhere('CA 7864'), 'Cape Town');
    })

    it('should returns the town the car is from' , function(){
        assert.equal(fromWhere('CC 0985'), 'Some other place!')
    })

});