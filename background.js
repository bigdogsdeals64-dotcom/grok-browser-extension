chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    chrome.sidePanel.setOptions({
      tabId,
      path: 'sidebar.html',
      enabled: true
    });
  }
});