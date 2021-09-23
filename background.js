console.log("Background.js loaded");

var oldCC;
chrome.runtime.onInstalled.addListener(function () {
	setInterval(checkClipboard, 1000 / 8);
});

function checkClipboard() {
	// Create div
	var helperdiv = document.createElement("div");
	document.body.appendChild(helperdiv);
	helperdiv.contentEditable = true;

	// Focus on div
	var range = document.createRange();
	range.selectNode(helperdiv);
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(range);
	helperdiv.focus();

	// Paste
	document.execCommand("Paste");

	//##################################################3
	// read the clipboard contents from the helperdiv
	var newCC = helperdiv.innerText;
	if (newCC !== oldCC) {
		console.log(newCC);
		oldCC = newCC;

		// Callback
		pasteIntoPage(newCC);
	}
}

// Communicate with the content scripts
// If in deepl website, paste into textarea
function pasteIntoPage(newCC) {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		console.log(tabs);
		chrome.tabs.sendMessage;
		chrome.tabs.sendMessage(tabs[0].id, { newCC });
	});
}
