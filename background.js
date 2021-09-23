console.log("Background.js loaded");

var oldCC;
var tabId = "none";

chrome.runtime.onInstalled.addListener(function () {
	setInterval(checkClipboard, 1000 / 8);
});

chrome.browserAction.onClicked.addListener((tab) => {
	console.log("tab");
	console.log(tab);
	console.log("tab.id");
	console.log(tab.id);
	tabId = tab.id;
	chrome.browserAction.setBadgeText({ text: "ON" });
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

	// read the clipboard contents from the helperdiv
	var newCC = helperdiv.innerText;
	if (newCC !== oldCC) {
		// if change in clipboard occurred:
		console.log(newCC);
		oldCC = newCC;

		// Callback
		pasteIntoPage(newCC);
	}
}

// Communicate with the content scripts
// If in deepl website, paste into textarea
function pasteIntoPage(newCC) {
	if (tabId !== "none") {
		chrome.tabs.sendMessage(tabId, { newCC });
	}
}
