var tempUrl;

// saves the enable box's value in memory
function enable()
{
	chrome.storage.sync.set({
		enable: document.getElementById("enable").checked
	});
}

function restore()
{
	chrome.storage.sync.get(
	{
		// loads the enable box's state if it exists
		// otherwise sets the state to false
		enable: false
		blackUrl: new Array()
	},
	function(items)  // sets the box to match this state
	{
		document.getElementById("enable").checked = items.enable;
	});
}

// adds the string to the blacklist
function addString()
{
	// chrome.storage.sync.get({blackString: []});
	// blackString.push(document.getElementById("string").value);
	// alert(blackString[blackString.length - 1]);
	// chrome.storage.sync.set({ blackString: blackString });
	document.getElementById("string").value = "";
}

// adds the url to the blacklist
function addUrl()
{
	chrome.storage.sync.get("blackUrl",
	function(items)
	{
		
		tempUrl = items.blackUrl;
		tempUrl.push(document.getElementById("url").value);
		alert('Added ' + items.blackUrl + ' to the blacklist.');
		document.getElementById("url").value = "";
	});
	chrome.storage.sync.set({
		blackUrl: tempUrl
	});
}

document.addEventListener("DOMContentLoaded", restore);
document.getElementById("enable").addEventListener("click", enable);
document.getElementById("addUrl").addEventListener("click", addUrl);
document.getElementById("addString").addEventListener("click", addString);