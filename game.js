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
                destination: "peopleBeforeSchafott"
            },
        ]
    },
 
beforeSchafott2: {
        title: "Prolog",
        story: `Die Henker bringen geschäftig ihr Werkzeug auf das Schafott und es wird klar, dass mehrere Menschen an diesem Tag hingerichtet werden würden. Neugierig sieht sich ${name} um.`,
        choices:[
           {
               choice: "Einen älteren Mann der neben dir steht fragen, wer heute hingerichtet wird.",
               destination: "talkOldMan"
           },
           {
               choice: "Sie dir die schaulustigen Menschen an.",
               destination: "peopleBeforeSchafott"
           },
       ]
   }, 

talkOldMan: {
    title: "Prolog",
    story: `Der ältere Mann mustert ${name} kurz. Spuckt Kautabak vor ${name} auf den Boden.<br> "Aye, lebst du hinterm Mond?", fragt er. "Wurde doch groß angekündigt", führt er weiter aus und erzählt dann davon, dass die Marine eine Piratenbande aufgeknüpft hat. <br> Mehr Informationen gibt er nicht preis und schweift darin ab, wieviele Hinrichtungen er schon gesehen hat.`,
    choices:[
       {
           choice: "Du hörst dem Mann aufmerksam zu und als er einen Namen erwähnt den du kennst, unterbrichst du ihn grob.",
           destination: "talkOldMan2"
       },
       {
           choice: "Du bedankst dich bei dem Mann und siehst etwas weiter weg einen reicht aussehenden Kaufmann. Du beobachtest ihn.",
           destination: "stalkingKaufmann"
       },
   ]
}, 

stalkingKaufmann: {
    title: "Prolog",
    story: `${name} beobachtet, wie sich der Kaufmann mit zwei anderen Männern unterhält und das nicht sonderlich freundlich.<br> ${name} nähert sich langsam und es wird klar, als der Kaufmann nur noch wenige Meter entfernt war, dass es sich um einen Streit handelt.<br> Anscheind wurde der Kaufmann bestohlen.`,
    choices:[
       {
           choice: "Lausche dem Streit und sieh die Männer prüfend an, mit denen der Kaufmann spricht.",
           destination: "stalkingKaufmann2"
       },
       {
           choice: "Remple den Kaufmann an und prüfe mit einem jahrelang geübten Griff, ob der Kaufmann noch etwas interessantes von Wert hat.",
           destination: "stealingKaufmann"
       },
   ]
},

peopleBeforeSchafott: {
        title: "Prolog",
        story: `Es ist ein bunter Mix an Menschen der hier steht. Viele unterhalten sich angeregt und ${name} schnappt einige Bruchstücke auf und erfährt, dass die Marine berüchtigte Piraten gefasst hat, welche heute hingerichtet werden sollen.`,
       choices:[
           {
               choice: "Neben  dir steht ein älterer Mann, du fragst ihn was er weiß.",
               destination: "talkOldMan"
           },
           {
               choice: "Deine Augen bleiben an einen reichen Kaufmann hängen. Du beobachtest ihn.",
               destination: "stalkingKaufmann"
           },
       ]
   },

standingPlaza2: {
            title: "Prolog",
            story: `${name} hebt mitten im Getümmel den Kopf nach oben und versinkt in ihren/seinen Gedanken. Der Himmel ist grau und es sieht aus als würde bald ein Unwetter aufziehen.`,
            choices:[
                   {
                       choice: "Weiter nachdenken",
                       destination: "standingPlaza3"
                   },
                   {
                       choice: "Ein Schrei ertönt und reißt dich aus den Gedanken",
                       destination: "screamPlaza"
                   },
                ]  
            },     
screamPlaza: {
            title: "Prolog",
            story: `Jemand schreit "Haltet den Dieb" und ${name} zuckt zusammen. ${name} sieht sich um und sieht eine kleine schlanke Gestalt das Weite suchen.`,
            choices:[
                       {
                           choice: "Den Dieb nachstellen.",
                           destination: "captureThief"
                       },
                       {
                           choice: "Ehrleichter aufatmen und zum Schafott gehen.",
                           destination: "beforeSchafott"
                       },
                    ]  
                },
captureThief: {
            title: "Prolog",
            story: `${name} eilt dem angeblichen Dieb hinterher. Weg von dem Weg der zum Schafott führt hinein in eine vollkommen verlassene Gasse. Nach Luft schnappend holt ${name} die fliehende Person ein.`,
            choices:[
                        {
                            choice: "Ergreif den Arm des Diebes.",
                            destination: "Fight"
                        },
                        {
                            choice: "Erhebe deine Stimme und sage: Bleib stehen!",
                            destination: "talkGasse"
                               },
                            ]  
                        },                   
                        
            Fight: {
                title: "Prolog",
                story: `Der Dieb wehrt den Griff ab und bevor sich ${name} versieht liegt${name} mit schmerzverzerrtem Gesicht auf dem dreckigen Boden der Gasse. <br> Ein Messer steckt in ${name}s Bauch und der Dieb ist über alle Berge.`,
                    choices:[
                            {
                            choice: "Schrei nach Hilfe.",
                                            destination: "GameOver"
                                        },
                                
                                            ]  
                                        },          
                                        
            talkGasse: {
                title: "Prolog",
                story: `Zur Überraschung von ${name} bleibt der augenscheinliche Dieb tatsächlich stehen und entpuppt sich als ein Kind, vermutlich nicht älter als 13.<br> "Was willst du", faucht es ${name} entgegen und plötzlich beginnen die Augen de Kindes zu leuchten. <br>"Du mal wieder hier? Was verschafft uns die Ehre?", fragt der Kleine und packt ${name} an der Hand und zieht ${name} tiefer in die Gasse hinein.`,
                    choices:[
                            {
                            choice: "Bist du das, Wurm? Bist du aber groß geworden, sagst du und verschweigst wieso du in der Stadt bist.",
                            destination: "deepGasseTalk"
                            },
                            {
                            choice: "Erzähl Wurm dass du ihn beinahe nicht erkannt hast und nach Arbeit suchst, weil das Geld zu Hause knapp wird.",
                            destination: "deepGassetrueTalk"
                            },
                            ]  
                            },          
    
standingPlaza3: {
            title: "Prolog",
            story: `${name} erschaudert bei der Vorstellung, im Regen einen Weg nach Hause zu suchen. Aber ${name} wollte den weiten Weg in die Stadt auch nicht für umsonst gekommen sein. Immerhin gab es Arbeit hier.`,
            choices:[
               {
                   choice: "Geh weiter zum Schafott",
                   destination: "beforeSchafott"
               },
               {
                   choice: "Ein Schrei hält dich davon ab weiter zu gehen und du siehst dich suchend um.",
                   destination: "screamPlaza"
               },     
            ]
}}}
    


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