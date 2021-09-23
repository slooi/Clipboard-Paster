console.log("cotent script loaded!");

chrome.runtime.onMessage.addListener(({ newCC }, sender, sendResponse) => {
	const message = newCC;

	// callback
	pasteTextIntoDeepL(message);
});

function pasteTextIntoDeepL(message) {
	if (window.location.href.includes("https://www.deepl.com/en/translator")) {
		console.log("ALMONDO ALMONDO");
		changeDeepLTextArea(message);
	}
}
function changeDeepLTextArea(text) {
	var el = document.querySelector("textarea");
	el.value = text;
	var evt = document.createEvent("Events");
	evt.initEvent("change", true, true);
	el.dispatchEvent(evt);
}
