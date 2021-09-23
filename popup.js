const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
	console.log("hi");
	const textArea = document.createElement("textarea");
	textArea.focus();
	document.execCommand("paste");
	console.log(textArea.textContent);
});
