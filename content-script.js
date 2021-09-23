console.log("Clipbaord Paster content-script loaded!");

chrome.runtime.onMessage.addListener(({ newCC }, sender, sendResponse) => {
	const message = newCC;

	// callback
	pasteTextIntoDeepL(message);
});

function pasteTextIntoDeepL(message) {
	console.log("Clipboard Paster received clipboard content:");
	console.log(message);
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
