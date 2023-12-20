class ClickAble {
	constructor(
		el = null
		) {
		el.classList.add("clickable");
		this.element = el;
	}
	setElement(el) {
		this.element = el;
		return this;
	}

}

let button = new ClickAble(document.createElement("div"));
button.element.textContent = "Asdfasdf";

button.element.addEventListener("click", () => { 
	console.log(1);
});

document.body.appendChild(button.element);
