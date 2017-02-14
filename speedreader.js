//constants
var smallText = "36pt";
var medText = "48pt";
var largeText = "60pt";
//constants


//variables
var inputBox;
var wordArray = [];
var paragraph;
var output;
var intervalLength = 1000;
var intervalID;
var fontSize = medText;
var rb1;
var rb2;
var rb3;
var selecting;
//variables

window.onload = function() {
    output = document.getElementById("text_output");
    rb1 = document.getElementById("rb1");
    rb2 = document.getElementById("rb2");
    rb3 = document.getElementById("rb3");
    inputBox = document.getElementById("text_input");
    selecting = document.getElementById("selector");
    rb2.defaultChecked = true;
};



function goButton() {
    changeInterval();

    //convert the input into an array of words


    //set the font size based on radio buttons

    if (rb1.checked) {
        output.style.fontSize = "38pt";
    }
    else if (rb2.checked) {
        output.style.fontSize = "50pt";
    }
    else if (rb3.checked) {
        output.style.fontSize = "60pt";
    }
    //this is cumbersome and i'm sure there's an easier way to do this...


    paragraph = inputBox.value; //get the value of the input box
    var tempInt = 0; //index of the spaces as it goes along
    for (var i = 0; i <= paragraph.length; i++) { //iterate through string
        if (paragraph.charAt(i) == " " || i == paragraph.length) { //if there's a space
            var tempWord = paragraph.substring(tempInt, i); //cut out the area between the last space and the new space
            wordArray.push(tempWord);
            tempInt = i; //set the space counter to the new space index
        }
    }
    //display each one on an interval
    intervalID = setInterval(getNextItem, intervalLength);
}

function getNextItem() {
    //alert("it gets to getnextitem safely!");
    var temp = wordArray.shift();
    if (temp) { //if it exists aka a
        output.innerHTML = temp;

    }
    else {
        clearInterval(intervalID); //clear the interval at the end of the array!!
    }
}

function stop() { //stops in its tracks!
    clearInterval(intervalID);
    wordArray = [];//empty the array
    output.innerHTML = "";//clear output
}

function changeInterval() {
    intervalLength = selecting.value;
}
