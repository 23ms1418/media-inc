function setText(text) {
	document.querySelector("#text").textContent = text;
}

document.addEventListener("keypress", (e) => {
	if (e.key == "Enter") {
		next();
	}
});

chatIndex = 0;

function next() {
	chat = dialog[chatIndex];
	if (typeof(chat) == "string") {
		addChat(undefined, chat, undefined);
	}
	else {
		addChat(chat[0], chat[1]);
	}
	
	chatIndex++;
}

let prevAuthor;

function addChat(char = prevAuthor, text) {
	chat = document.createElement("div");

	textArea = document.createElement("div");
	textArea.classList.add("textarea");
	textArea.textContent = text;
	chat.appendChild(textArea);

	tail = document.createElement("p");
	tail.classList.add("tail");
	chat.appendChild(tail);

	chat.classList.add("chat");
	if (char == character.user) {
		chat.classList.add("chat-user");
	}
	else {
		chat.classList.add("chat-others");

		author = document.createElement("span");
		author.classList.add("author");
		author.textContent = char2kr[char];
		chat.appendChild(author);
	}
	chat.classList.add(char);
	
	container = document.querySelector("#container");
	container.appendChild(chat);
	container.scrollTop = container.scrollHeight;

	prevAuthor = char;
}

var character = {
	user: "user",
	investors: "investors",
	mass_media: "mass_media",
	commentator: "commentator",
	advertiser: "advertiser",
	public: "public",
}

var chatType = {
	normal: "normal",
	monologue: "monologue",
}

var char2kr = {
	user: "",
	investors: "기득권층",
	mass_media: "언론사",
	commentator: "해설자",
	advertiser: "광고주",
	public: "대중",
}

var dialog = [
	"독재 국가들은 여론을 조작한다 알려졌습니다",
	"그런데 과연..",
	"정말 독재 국가들만 그럴까요?",
	"우리는 정말 자유로운 언론, \"언론의 자유\" 를 가지고 있을까요?",
	"노암 촘스키와 에드워드 허먼은 조금 다르게 생각했습니다",
	"노암 촘스키의 [Manufacturing Consent] 에 따르면, 여론은 다섯 가지의 편집 필터로 조작됩니다",
	"그중 첫번째는 '소유권' 입니다",

	[character.mass_media, "저희 대부분은 대기업, 혹은 그 산하 조직입니다"],
	"그리고 사기업은..",
	"자사의 이익을 최우선으로 생각하죠",
	"만약 저희 혹은 저희를 소유한 회사에게 재정적 해가 될만한 뉴스를 검열하지 않는다면",
	"즉, 객관성을 유지한다면..",
	"저희의 생존률은 희미해지죠",

	[character.commentator, "그렇다면, 그걸 거꾸로 말한다면?"],

	[character.mass_media, "그렇습니다."],
	"오래 살아남는 언론사들은, 지금껏 살아온 언론사들은, 현존하는 언론사들은 생존률이 높아왔다는 것.",
	"즉, 객관성이 낮게 운영되었고, 앞으로도 그러할 기업들 이겠죠",

	[character.commentator, "이것이 첫 번째 필터 '소유권' 이였습니다"],
	"두 번째는, '광고'입니다",

	[character.mass_media, "미디어를 운영하는데 드는 비용은 시청자들만으론 충당이 안 됩니다"],
	[character.commentator, "그럼 필요한 돈은 어디서 가져오죠?"],

	[character.advertiser, "어디긴 어디에요, 저희죠"],
	"미디어 시청자들은, 본인들이 소비자고, 언론이 상품이라 생각하지만",
	"완전한 오답이에요",
	"언론이란건, 소비자인 저희 광고주들이",
	[character.mass_media, "언론사라는 공급자를 통해"],
	[character.advertiser, "시청자들을 상품으로서 구매하는"],
	"그런 구조라는게 옮은 답이 되겠죠",

];

addChat(character.commentator, "-- 반갑습니다. 엔터를 눌러 진행해 주세요!");
