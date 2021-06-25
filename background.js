let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({ color });
});

chrome.tabs.onCreated.addListener(() => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		let url = tabs[0].url;

		if (url === "") {
			chrome.tabs.update({ url: "https://feedbin.com" });
		}
	});
});
