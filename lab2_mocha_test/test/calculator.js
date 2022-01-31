var expect = require("chai").expect;
var Calculator = require("../app/calculator");

describe("Calculator", () =>{
it("should add integers", ()=>{
    
    expect(Calculator.add(5,2)).to.equal(7);
})
it("does not add integers", ()=>{
    
    expect(Calculator.add(5,2)).to.equal(8);
})
////////////////////////
it("should sub integers", ()=>{
    
    expect(Calculator.sub(5,2)).to.equal(3);
})
it("does not sub integers", ()=>{
    
    expect(Calculator.sub(5,2)).to.equal(5);
})
///////////////////
it("should mul integers", ()=>{
    
    expect(Calculator.mul(5,2)).to.equal(10);
})
it("does not mul integers", ()=>{
    
    expect(Calculator.mul(5,2)).to.equal(12);
})
////////////////////////
it("should div integers", ()=>{
    
    expect(Calculator.div(10,2)).to.equal(5);
})
it("does not div integers", ()=>{
    
    expect(Calculator.div(10,2)).to.equal(2);
})

})