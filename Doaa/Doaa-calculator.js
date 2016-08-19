
var current = 0 ;
var memory  = 0;

/**  display function on screen **/
function displayNumber(num) {
document.ClaculatorForm.Display.value += num;

if (document.ClaculatorForm.Display.value == 0)
{document.ClaculatorForm.Display.value = 0;}

}

/**  plus function **/
function addNumber() {
//document.ClaculatorForm.Display.value += "+" ;
var memory = eval(document.ClaculatorForm.Display.value);
document.ClaculatorForm.Display.value = memory += "+";
}

/**  minus function **/
function minusNumber( ){
//document.ClaculatorForm.Display.value += "-";
var memory = eval(document.ClaculatorForm.Display.value);
document.ClaculatorForm.Display.value = memory += "-";
}

/**  mulitply function **/
function mulitplyNumber() {
//document.ClaculatorForm.Display.value += "*";
var memory = eval(document.ClaculatorForm.Display.value);
document.ClaculatorForm.Display.value = memory += "*";
}

/**  division function **/
function divisionNumber() {
//document.ClaculatorForm.Display.value += "/";
var memory = eval(document.ClaculatorForm.Display.value);
document.ClaculatorForm.Display.value = memory += "/";
}


/** caluclte total result **/
function calcTotalNumber() {
document.ClaculatorForm.Display.value = eval(document.ClaculatorForm.Display.value);
}

function clearAll() {
document.ClaculatorForm.Display.value = ""
}