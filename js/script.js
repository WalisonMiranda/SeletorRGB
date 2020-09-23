window.addEventListener('load', start);

function start(){
    eventsRGB();
    addEvents();
    colorResult();
}

var colorRed = 0;
var colorGreen = 0;
var colorBlue = 0;

var inputRed = 0;
var inputGreen = 0;
var inputBlue = 0;

var outputRed = 0;
var outputGreen = 0;
var outputBlue = 0;


function eventsRGB (){
   colorRed = document.querySelector('#colorRed');
   colorGreen = document.querySelector('colorGreen');
   colorBlue = document.querySelector('colorBlue');

   inputRed = document.querySelector('#inputRed');
   inputGreen = document.querySelector('#inputGreen');
   inputBlue = document.querySelector('#inputBlue');

   outputRed = document.querySelector('#outputRed');
   outputGreen = document.querySelector('#outputGreen');
   outputBlue = document.querySelector('#outputBlue');

   rgbColor = document.querySelector('#rgbColor');
}

function addEvents(){
    inputRed.addEventListener('input', inputRedChange);
    inputGreen.addEventListener('input', inputGreenChange);
    inputBlue.addEventListener('input', inputBlueChange);
}

function inputRedChange(event){
    outputRed.value = event.target.value;
    colorResult();
}
function inputGreenChange(event){
    outputGreen.value = event.target.value;
    colorResult();
}
function inputBlueChange(event){
    outputBlue.value = event.target.value;
    colorResult();
}

function colorResult (){    
    var cor = 'rgb('+outputRed.value+','+outputGreen.value+','+outputBlue.value+')';
    rgbColor.style.backgroundColor = cor;
}