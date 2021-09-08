let assert = require("assert");

let isWeekday = require("../isWeekday");

describe('isWeekday function test' , function(){

    it('should return true if the day added is a weekday ' , function(){
        assert.equal(isWeekday('Monday'), true)
    })

    it('should return false if the day added is a weekend' , function(){
        assert.equal(isWeekday('Saturday'), false)
    })

});