var story;
function getStory(name) {
    return {
currentScence: "standingPlaza",
standingPlaza: {
        title: "Prolog",
        story: `${name} steht inmitten eines Platzes. Weit vor ihr/ihm ist ein Schafott aufgestellt und die Menschen eilen in Scharren auf den Platz. Denn eine Hinrichtung ist in dieser Stadt immer ein großes Spektakel.`,
    choices:[
        {
            choice: "Folge den Menschen und gehe selbst näher heran.",
            destination: "beforeSchafott"
        },
        {
            choice: "Sieh verträumt in den Himmel und bleib stehen.",
            destination: "standingPlaza2"
        }
    ]
    },

beforeSchafott: {
         title: "Prolog",
            story: `Es herrscht ein wildes Gedränge auf dem Weg zum Schafott. Nach einigen Minuten des durch die Menschen hindurchquetschen steht ${name} vor dem Schafott und sieht wie die Soldaten aufgereiht stehen und niemanden näher heran lassen.`,
        choices:[
            {
                choice: "Verfolge das Geschehen",
                destination: "beforeSchafott2"
            },
            {
                choice: "Wende dich ab und sie dir die Menschen an",
                destination: "peopleBeforeShafott"
            },
        ]
    },
          
standingPlaza2: {
            title: "Prolog",
            story: "Test",
            choices:[
                   {
                       choice: "Test1",
                       destination: "Test2"
                   },
                   {
                       choice: "Test 3",
                       destination: "Test4"
                   },                        
    ],
}}
}






document.addEventListener("DOMContentLoaded", function(){
var startButton = document.querySelector("#startButton")
var inhalt = document.querySelector("#inhalt")
startButton.addEventListener("click", function(){
    let name = document.querySelector("#name-input")
    story = getStory (name.value)
    renderScene()
})
})





function renderScene() {
    inhalt.innerHTML = `
    <h1>${story[story.currentScence].title}</h1>
    <p>${story[story.currentScence].story}</p>
    ${getInputs()}
    <button id= "next-button">Weiter</button>
    `
    var button = document.querySelector("#next-button");
    button.addEventListener("click", function(){
        getInputValue()
    })
}

function getInputValue(){
    var inputs = document.querySelectorAll("input[type='radio']");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked){
            story.currentScence = inputs[i].getAttribute('data-destination')
            renderScene()
            return;
        }
    }
story.currentScence = story[story.currentScence]
}


function getInputs(){
    var input = ""
    if (!story[story.currentScence].choices) {
        return ""
    }
    for(var i = 0; i < story[story.currentScence].choices.length; i++){
        input += ` 
        <div>
        <input data-destination = ${story[story.currentScence].choices[i].destination} id="radio${i}" type="radio" name= "choices"/> 
        <label for "radio${i}>${story[story.currentScence].choices[i].choice}</label>
        </div>`
    }
    return input;
}