(function () {

  const documentUrlPatterns = ['*://*.stackoverflow.com/*'];

  function getCurrentTab() {
    return browser.tabs.query({
      currentWindow: true,
      active: true
    });
  }

  function onCreated() {
    if (browser.runtime.lastError) {
      console.log(`Error: ${browser.runtime.lastError}`);
    } else {
      console.log('Item created successfully');
    }
  }

  function updateSoElement(data) {
    getCurrentTab().then(function (tabInfo) {
      browser.tabs.sendMessage(tabInfo[0].id, data);
    });
  }

  menu.forEach(item => {

    const { id, title, parentId, menuId, dataType } = item;

    browser.menus.create({
      id,
      title,
      parentId,
      contexts: ['all'],
      documentUrlPatterns,
      onclick: () => updateSoElement({ menuId, dataType, id })
    }, onCreated);

  });

}());
