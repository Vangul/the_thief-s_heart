var story = {
currentScence: "standingPlaza",
standingPlaza: {
        title: "Prolog",
        story: "Sie/er steht inmitten eines Platzes. Weit vor ihr/ihm ist ein Schafott aufgestellt und die Menschen eilen in Scharren auf den Platz. Denn eine Hinrichtung ist in dieser Stadt immer ein großes Spektakel.",
    choices:[
        {
            choice: "Folge den Menschen und gehe selbst näher heran."
        },
        {
            choice: "Sieh verträumt in den Himmel und bleib stehen."
        }    
    ]}}

 //Plaza part}

var story2 = {currentScence: "standingPlaza2",
standingPlaza2: {
    title: "Kapitel 1",
    story: "Es passiert einiges.",
    choices: [
        {
            choice: "Tue x."
        },
        {
            choice: "Tue y."
        }
    ]
} }





document.addEventListener("DOMContentLoaded",function(){
var startButton = document.querySelector("#startButton")
var input = document.querySelector("#name-input")
var content = document.querySelector("#content")
var nextButton1 = document.querySelector("#nextButton1")
startButton.addEventListener("click", function() {
    content.innerHTML = `
    <h1>${story[story.currentScence].title}</h1>
    <p>${story[story.currentScence].story}</p>
    ${getInputs()}
   
    `

})
nextButton1.addEventListener("click", function(){
    content.innerHTML = `
    <hi>${story[story2.currentScence].title}</hi>
    <p>${story[story2.currentScence].story}</p></>
    <button>Weiter</button>
    ${getInputs()}`
})
})




function getInputs(){
    var input = ""
    for(var i = 0; i < story[story.currentScence].choices.length; i++){
        input += ` <div>
        <input id="radio${i}" type="radio" name= "choices"/> 
        <label for "radio${i}>${story[story.currentScence].choices[i].choice}</label>
        </div>`
    }
    return input;
}