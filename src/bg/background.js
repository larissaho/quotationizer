// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts

chrome.contextMenus.create({"title": "Copy Quotation", "id": "quoteCopy", "onclick": onClickAction});

function onClickAction(info, tab){
	window.open("https://www.washington.edu");
}