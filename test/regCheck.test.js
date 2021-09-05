let assert = require("assert");
let regCheck = require("../regCheck");

describe('regCheck function test' , function(){

    it('should check if a registration number is for GP' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true)
    })

    it('should check if a registration number is for GP' , function(){
        assert.equal(regCheck('DC 55 YU LK', 'GP'), false)
    })

    it('should check if a registration number is for L' , function(){
        assert.equal(regCheck('5566 L', 'L'), true)
    })

    it('should check if a registration number is for L' , function(){
        assert.equal(regCheck('5566 MP', 'L'), false)
    })

    it('should check if a registration number is for EC' , function(){
        assert.equal(regCheck('ERT 123 EC', 'EC'), true)
    })

    it('should check if a registration number is for EC' , function(){
        assert.equal(regCheck('5566 EC', 'L'), false)
    })

    it('should check if a registration number is for MP' , function(){
        assert.equal(regCheck('FGT 123 MP', 'MP'), true)
    })

    it('should check if a registration number is for MP' , function(){
        assert.equal(regCheck('FGT 123 MM', 'MP'), false)
    })

});