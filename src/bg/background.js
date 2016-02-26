// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({"title": "Copy Quotation", "id": "quoteCopy", "onclick": onClickAction, "contexts": ["selection"]});
});

function onClickAction(info, tab){
	storeQuote(info.selectionText,window.location.href);
}

function storeQuote(selectionText, siteUrl){
	var newQuote = {};
	newQuote[selectionText] = siteUrl;
	chrome.storage.sync.set(newQuote, function() { 
		console.log("Text Saved");
	});
}

function getStoreQuote(){
	chrome.storage.sync.get(null, function(storageData) {
		console.log("StorageArea.get: ", storageData);
	});
}
