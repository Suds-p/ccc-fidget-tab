// Added so that new tab also opens when you click the icon in browser bar
chrome.browserAction.onClicked.addListener(() => {
	chrome.tabs.create({'url': 'chrome://newtab'})
})
