var name = "raja"
let age = 18;
let course = "MCA"
let arrList = [1,2,3,4,35,2,231,1,3,1,31]
let myobj = {
    id:102,
    name:"raja kumar",
    age:20
}
function myfunction(){
    console.log("hello from function")
}

class myclass{
    constructor(){
        console.log("this is my class")
    }
    show(){
        console.log("i am show form class")
    }
}
export default course;
export {name,age, myclass, myfunction, arrList, myobj}