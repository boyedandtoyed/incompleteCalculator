var Allbuttons = document.querySelectorAll("button");
var input = document.querySelector("input");

var dataObj = {
    "π": givePi,
    "h": givePlank,
    "ℏ": giveReducedPlank,
    "G": giveGravitationalConstant,
    "c": giveLightSpeed, //speed of light in m/s
    "e": giveEulersNumber, //euler's number
    "mol": giveAvogadrosNumber
};
// var symbolKeys = Object.keys(dataObj); // ["π","h","ℏ",........]
//*****/ if the different symbols are used, dict down below is used for calculation process*********/////////  
var changeToObjects = {
    "X": "*",
    "÷": "/",
    "h": "*(dataObj.h())",
    "ℏ": "*(dataObj.ℏ())",
    "e": "*(dataObj.e())",
    "G": "*(dataObj.G())",
    "c": "*(dataObj.c())",
    "π": "*(dataObj.π())",
    "mol": "*(dataObj.mol())",
}
var allButtons = [];

Allbuttons.forEach((singleButton) => {
    singleButton.addEventListener("click", button);
    allButtons.push(singleButton.innerText);
})