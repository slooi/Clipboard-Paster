(function () {
	const btn = document.querySelector("button");
	var toggleActive = false;

	btn.addEventListener("click", (e) => {
		console.log(e);
		console.log("BUTN CLICKED!");
		toggleActive = !toggleActive;

		chrome.runtime.sendMessage({ toggleActive }, function (response) {
			console.log("this a calledback?");
		});
	});
})();
