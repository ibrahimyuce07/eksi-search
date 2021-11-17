eksiSearch = function (word) {
  var query = word.selectionText;
  chrome.tabs.create({ url: "https://eksisozluk.com/" + query });
};

eksiSearchAdvanced = function (word) {
  var query = word.selectionText;
  chrome.tabs.create({ url: "https://eksisozluk.com/basliklar/ara?SearchForm.Keywords=" + query});
};

chrome.contextMenus.create({
  title: "hızlı ara [başlık]",
  contexts: ["selection"],
  onclick: eksiSearch
});

chrome.contextMenus.create({
  title: "hayvan ara [gelişmiş]",
  contexts: ["selection"],
  onclick: eksiSearchAdvanced
});