console.log("oniichan!");
// document.execCommand("paste");
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	const message = request.newCC;

	// callback
	pasteTextIntoDeepL(message);
});

function pasteTextIntoDeepL(message) {
	console.log(window.location.href);
	console.log(window.location.href);
	console.log("https://www.deepl.com/en/translator");
	if (window.location.href.includes("https://www.deepl.com/en/translator")) {
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
