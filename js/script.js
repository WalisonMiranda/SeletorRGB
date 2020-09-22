window.addEventListener('load', start);

var colorRed = null;
var colorGreen = null;
var colorBlue = null;

var inputRed = null;
var inputGreen = null;
var inputBlue = null;

var outputRed = null;
var outputGreen = null;
var outputBlue = null;

var rgbColor = null;

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
    outputRed.value = event.targt.value;
    colorResult();
}
function inputGreenChange(event){
    outputGreen.value = event.targt.value;
    colorResult();
}
function inputBlueChange(event){
    outputBlue.value = event.targt.value;
    colorResult();
}

function colorResult (){
     outputRed.target.value = inputRed.target.value;
  
}

