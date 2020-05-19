let icon_flag=1;
function alarmHelper(alarm){
	alertArray = ["Take a break from watching that series or movie","Reading a lot I Guess. Take a short break","Hold on! Rest your eyes.","It's been a while. Why don't you take a walk?"];
	var randomIndex = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
	alert(alertArray[randomIndex]);
}
chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function(tab) {
		if(icon_flag)
		{
		chrome.browserAction.setIcon({path : "extension_active.png"});
		chrome.alarms.create("Start", {periodInMinutes:0.5});
		chrome.alarms.onAlarm.addListener(alarmHelper);
		icon_flag=0;
		}
		else{
		chrome.browserAction.setIcon({path : "extension_inactive.png"});
		chrome.alarms.clear("Start");
		chrome.alarms.onAlarm.removeListener(alarmHelper);
		icon_flag=1;
		}
	});
});