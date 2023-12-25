function setText(text) {
	document.querySelector("#text").textContent = text;
}

document.addEventListener("keypress", (e) => {
	if (e.key == "Enter") {
		next();
	}
});

act_cnt = 0;

function next() {
	acts[act_cnt++]();
}

acts = [
	act1,
	act2,
	]



function getCard(text) {
	card = document.createElement("div");
	card.setAttribute("class", "card");
	card.textContent = text;

	return card;
}

function addCard(card) {
	document.querySelector("#container").appendChild(card);
}

function act1() {
	setText("ㅁㄴㅇㄹ");
	addCard(getCard("가나다"));
	addCard(getCard("가나다"));

}

function act2() {

}
