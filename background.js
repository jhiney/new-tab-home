let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({ color });
	console.log("Default background color set to %cgreen", `color: ${color}`);
});

chrome.tabs.onCreated.addListener(() => {
	chrome.tabs.query({ active: true }, (tabs) => {
		let url = tabs[0].url;
		console.log(url);
		if (url === "") {
			chrome.tabs.update({ url: "https://feedbin.com" });
		}
	});
});
