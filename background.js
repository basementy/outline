const generateOutlinePage = (currentTab) =>
  chrome.tabs.create({
    url: `http://outline.com/${currentTab?.url}`,
    index: !currentTab?.pinned ? currentTab?.index + 1 : null,
  });

chrome.contextMenus.create({
  id: "OUTLINE",
  title: "Generate Outline"
});

chrome.browserAction.onClicked
  .addListener(generateOutlinePage);

chrome.contextMenus.onClicked
  .addListener((info, tab) => {
    if (info.menuItemId === 'OUTLINE')
      generateOutlinePage(tab)
  })
