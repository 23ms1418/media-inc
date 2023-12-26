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
	vested: "vested",
	government: "government",
	fake_commentator: "fake_commentator",
	public: "public",
}

var chatType = {
	normal: "normal",
	monologue: "monologue",
}

var char2kr = {
	user: "",
	vested: "기득권층",
	mass_media: "언론사",
	commentator: "해설자",
	advertiser: "광고주",
	government: "정부",
	fake_commentator: "해설자?",
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
	"그렇기에, 언론사들은 저희들의 심기를 거스르는 뉴스는",
	[character.mass_media, "제한할 수 밖에 없겠죠"],

	[character.commentator, "세 번째 필터는 정보의 출처와 관련된 '공모' 입니다."],
	[character.mass_media, "뉴스에 있어 정보의 출처는 생명입니다"],
	"만약 우리가 기득권층을 공격하는 내용을 공표한다면",
	[character.vested, "저희는 언론사들을 이런 정보의 접근에서 본인들도 모르게 소외시킬 것이고"],
	[character.mass_media, "그렇게 된다면 저희는 서서히 말라 사라지겠죠"],
	[character.vested, "그리고, 저희에게 위험한 내용에 조취를 취할 필요가 있습니다"],

	[character.commentator, "그 조취가 바로 네 번째 필터, '매도' 입니다"],
	[character.vested, "저희는 저희를 위협하는 정보를 제공한 정보원을 매도해, 그 신빙성을 제거합니다"],
	"그럼으로서 앞으로도 이런 일이 일어나지 않게 방지도 할 수 있죠",

	[character.commentator, "자, 이제 마지막 필터입니다"],
	"다섯 번째 필터는 '공공의 적' 혹은 '공포' 입니다.",
	
	[character.government, "대중들은 '사회주의', '테러리즘' 같이 공공의 적이 있으면"],
	"권위에 도전하기보단, 그저 받아들이려 합니다",
	"그렇게 대중들을 더 쉽게 제어할 수 있죠 ",

	[character.commentator, "-이것이 마지막 필터 였습니다."],
	"여담으로, 노암 촘스키는 마지막 필터인 '공포' 에 대해 필터로서의 '공포' 는 사용이 적어졌다고 언급했습니다",
	"자, 어떻게 생각하시나요?",
	"아직도 여러분이 정말 '언론의 자유'를 가지고 있다 생각하시나요?",
	"여러분의 의견은, 만들어진(manufactured) 의견(consent) 이 아니라고 단언하실 수 있나요?",
	"그리고, 아직도 저를 믿으시나요?",

	[character.fake_commentator, "저는 \"특별한\" 존재라 이 \"사실\"들을 미디어에서 떠들 수 있을까요?"],
	[character.mass_media, "혹은.."],
	[character.advertiser," 아니면.."],
	[character.vested, "어쩌면.."],
	[character.government, "애초부터.."],
	[character.fake_commentator, "저도 한 패 였을까요?"],

	[character.commentator, "플레이 해 주셔서 감사합니다!"],
	"해당 게임은 유튜브의 Noam Chomsky - The 5 Filters of the Mass Media Machine 를 크게 참고했습니다.",
	"이제 끝입니다!",
	"정말로요",
	"진짠데",
	"끝이래도??",
	"error",
	"error",
	"error",
	"error",
	"error",
	"error",
	"error",
	"error",
	"error",
	"error",
	"error",
	"와, 독하시네요. 정말 끝입니다!",
	"메롱",
];

addChat(character.commentator, "-- 반갑습니다. 엔터를 눌러 진행해 주세요!");
