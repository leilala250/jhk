var textfield;
var submit;


function setup() {
  noCanvas();
  //textfield = createInput("favorite animal");
 textfield = select("#babies");

  //textfield.changed(newText);
  textfield.input(newTyping);
  output=select('#output');
  submit=select("#submit");
  submit.mousePressed(newText);
}

function newTyping() {
 //console.log(textfield.value);
  output.html(textfield.value())
}

function newText(){
    createP(textfield.value());
 }
  


