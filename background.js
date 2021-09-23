console.log("Background.js loaded");
// console.log("document:", document);
chrome.runtime.onInstalled.addListener(() => {
	// chrome.contextMenus.create({
	// 	id: "sampleContextMenu",
	// 	title: "Sample Context Menu",
	// 	contexts: ["selection"],
	// });
	console.log(document);
	console.log(document);
	console.log(document);
	console.log(document);
	console.log(document);
	console.log(document);
	console.log(document);
	console.log(document);
	setTimeout(() => {
		var t = document.createElement("input");
		document.body.appendChild(t);
		t.focus();
		document.execCommand("paste");
		var clipboardText = t.value; //this is your clipboard data
		copyTextToClipboard("Hi" + clipboardText); //prepends "Hi" to the clipboard text
		document.body.removeChild(t);
	}, 2000);
	console.log(navigator);
	console.log(navigator);
	console.log(navigator);
	console.log(navigator.clipboard);
	// navigator.clipboard.readText().then((clipText) => console.log(clipText));
});
// chrome.webNavigation.onCompleted.addListener(() => {
// 	console.info("The user has loaded my favorite website!");
// });
