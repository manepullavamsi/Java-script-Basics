const {welcome,add}=require('../app');//Here we are importing the function from app.js file
const assert=require('chai').assert;//Here we importing the assert function from the chai libary

describe("This is my first Testing",function(){  //The describe function is automatically executed by test runned that is mocha.
    //Inside descirbe we write test Cases 
    it("Testing Welcome Function",function(){
        assert.equal(welcome(),"hello");
    })//These are test cases which are used to test our functiuon whether working as excepted or not.
    it("Testing of AddFunction",function(){
        assert.equal(add(5,5),10);
    })
    it("Testing of AddFunction",function(){
        assert.notEqual(add(3,2),6);
    })
})

