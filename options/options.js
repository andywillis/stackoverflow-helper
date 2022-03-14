(async function () {

  function updateDOM() {
    console.log('updateDOM');
  }

  function sendMessage(message) {
    console.log(message);
  }

  async function init() {
    const { options } = await browser.storage.local.get('options');
    if (options) {
      updateDOM(options);
      sendMessage('storage updated options');
    } else {
      updateDOM(data);
      await browser.storage.local.set({ options: data });
      sendMessage('storage updated data');
    }
  }

  init();
  setTimeout(async () => {
    await browser.storage.local.set({ options: '' });
    init();
  }, 3000);

}());
