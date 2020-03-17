


//Display
let disp = document.querySelector('[data-key="display"]')


//Press Down

function pressdown(e) {

	disp.textContent += this.dataset.key;
};

//Button Selectors

const button = document.querySelectorAll(".button");


for (let i = 0; i < button.length; i++) {
	button[i].addEventListener('click',pressdown);
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