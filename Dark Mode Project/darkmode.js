alert("Welcome to an example of Dark mode")
function dark(){
    var element=document.body
    element.classList.toggle("dark-mode")
}

var changeSize=document.getElementById("container")
changeSize.style.fontSize="20px";

alert("Check the console log for a a little math on JS")
var x=100
var y=450
var a=x * y

a=console.log(a)
if (x <=100) {
    console.log("This is false")
} else {
    console.log("This is true")
}