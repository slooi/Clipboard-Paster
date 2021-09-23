console.log("Background.js loaded");

var oldCC;
var tabId = "none";

chrome.runtime.onInstalled.addListener(function () {
	setInterval(checkClipboard, 1000 / 8);
});

// chrome.runtime.onMessage.addListener(
// 	({ toggleActive }, sender, sendResponse) => {
// 		console.log("BACKGROUND GOT REQUEST! :", toggleActive);
// 		chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
// 			activeTabs.length = 0;
// 			activeTabs.push(tabs[0]);
// 		});
// 	}
// );

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

	//##################################################3
	// read the clipboard contents from the helperdiv
	var newCC = helperdiv.innerText;
	if (newCC !== oldCC) {
		// change in clipboard occurred:
		console.log(newCC);
		oldCC = newCC;

		// Callback
		pasteIntoPage(newCC);
	}
}

// Communicate with the content scripts
// If in deepl website, paste into textarea
function pasteIntoPage(newCC) {
	// console.log(newCC);
	// for (let tab in activeTabs) {
	// 	chrome.tabs.sendMessage(tab.id, { newCC });
	// }
	if (tabId !== "none") {
		chrome.tabs.sendMessage(tabId, { newCC });
	}
	// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
	// 	console.log("tabs");
	// 	console.log(tabs);
	// 	console.log("newCC");
	// 	console.log(newCC);
	// 	chrome.tabs.sendMessage(tabId, { newCC });
	// });
}
