let assert = require("assert");

let totalPhoneBill = require("../totalPhoneBill");

describe('totalPhoneBill function test' , function(){

    it('calculate the total bill for the data provided' , function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45')
    })

    it('calculate the total bill for the data provided' , function(){
        assert.equal(totalPhoneBill('call, sms'), 'R3.40')
    })

    it('calculate the total bill for the data provided' , function(){
        assert.equal(totalPhoneBill('sms, sms'), 'R1.30')
    })

});