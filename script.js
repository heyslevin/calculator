
let a = "";
let b = "";
let operator = "";

//Result Checker. Checks if = was pressed before
let rc = 0;

//Display Selector
let disp = document.querySelector('[data-key="display"]')


//Button functions

function pressdown(e) {


// Clears display if rc = 1, because "="" was pressed before
	if (rc === 0 || disp.textContent == "") {
		disp.textContent += this.dataset.key

	} else {
		disp.textContent = this.dataset.key;
	}
	
	rc = 0;
};

function cleanup() {
	disp.textContent = "";
	a = "";
	b = "";
}

function opcap() {
	if (a === "") {
		a = parseInt(disp.textContent);
		disp.textContent = "";
		operator = this.dataset.key;
	} else { 
		b = parseInt(disp.textContent);
		a = parseInt(operate(a,b,operator));
		operator = this.dataset.key;

		disp.textContent = "";
	}
}

function results() {
	b = parseInt(disp.textContent);
	disp.textContent = operate(a,b,operator);
	rc = 1;
	a = "";
	b = "";

}



//Button Selectors

const button = document.querySelectorAll(".numbutton");
const clear = document.querySelector(".clear");
const opbutton = document.querySelectorAll(".opbutton")
const equal = document.querySelector('[data-key="="]')


//Event Listener for regular buttons

clear.addEventListener('click',cleanup)
equal.addEventListener('click',results)


for (let i = 0; i < button.length; i++) {
	button[i].addEventListener('click',pressdown);
}

//Event Listener for operator buttons

for (let i = 0; i < opbutton.length; i++) {
	opbutton[i].addEventListener('click',opcap)
}


function add(a,b) {
	return a + b;
}

function subtract(a,b) {
	return a - b;
}

function multiply(a,b) {
	return a * b;
}

function divide(a,b) {
	return a / b;
}

function operate(a,b,operator) {
	switch(operator) {
		case '+':
			return add(a,b);

		case '-':
			return subtract(a,b);
		
		case '*':
			return multiply(a,b);

		case '/':
			return divide(a,b);

		default:
			alert('Missing Operator');
	}
}