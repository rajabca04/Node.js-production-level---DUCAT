let name  = "raja"
let myArr = [10,20,49,438,220,20420]
let myObj = {
    id: 101,
    name: "raja kumar",
    age: 20
}

function myFun(){
    console.log("this is my function")
}

class myClass{
    constructor(){
        console.log("this is my class")
    }
    show(){
        console.log("i am show form class")
    }
}
module.exports = {
    name,
    myArr,
    myObj,
    myFun,
    myClass
}