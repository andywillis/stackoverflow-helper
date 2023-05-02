const documentUrlPatterns = ['*://*.stackoverflow.com/*'];

async function getConfig() {
  const checkConfig = await browser.storage.local.get('config');
  if (!Object.keys(checkConfig).length) {
    await browser.storage.local.set({ config });
  }
  return browser.storage.local.get('config');
}

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

async function buildMenu() {

  await browser.menus.removeAll();

  (await getConfig()).config.forEach(item => {

    const {
      id,
      title,
      parentId,
      text
    } = item;

    browser.menus.create({
      id,
      title,
      parentId,
      contexts: ['all'],
      documentUrlPatterns,
      onclick: () => updateSoElement({ text })
    }, onCreated);

  });

}

buildMenu();

browser.runtime.onMessage.addListener(({ action }) => {
  if (action === 'rebuildMenu') buildMenu();
});
