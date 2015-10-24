document.addEventListener('DOMContentLoaded', function() {
    console.log('Hello Plugin');
    chrome.tabs.executeScript(null, {file: "scripttoberun.js"});
});
