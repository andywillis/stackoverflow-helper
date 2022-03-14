(async function () {

  const qs = selector => document.querySelector(selector);
  const qsa = selector => document.querySelectorAll(selector);

  let options = { settings: {}, configuration: {} };

  function getFlatOptions(options) {
    return Object.entries(options).reduce((acc, [, value]) => {
      return { ...acc, ...value };
    }, {});
  }

  async function updateInputs(options) {
    // eslint-disable-next-line no-restricted-syntax
    for (const prop in options) {
      if (Object.prototype.hasOwnProperty.call(options, prop)) {
        qs(`[name="${prop}"]`).value = JSON.stringify(options[prop]);
      }
    }
  }

  async function getOptions() {
    const response = await browser.storage.local.get('options');
    // eslint-disable-next-line prefer-destructuring
    options = response?.options ?? data;
    updateInputs(options);
  }

  getOptions();

  const form = qs('form');
  const buttons = qs('.buttons');
  const yesButton = qs('button.yes');
  const noButton = qs('button.no');

  function pad(str) {
    return str.toString().length === 1 ? `0${str}` : str;
  }

  function formatDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return `${pad(day)}-${pad(month + 1)}-${year}`;
  }

  async function handleExport() {
    const { options } = await browser.storage.local.get('options');
    const type = 'application/json';
    const data = JSON.stringify(options === undefined ? {} : options);
    const blob = new Blob([data], { type });
    const urlObj = URL.createObjectURL(blob);
    try {
      const id = await browser.downloads.download({
        filename: `${options.settings.downloadfolder}/archive-${formatDate()}.json`,
        url: urlObj,
        saveAs: true,
        conflictAction: 'overwrite'
      });
      browser.downloads.erase({ id });
    } catch (err) {
      console.error(err);
    }
  }

  async function handleForm(e) {

    const { name, value } = e.target;

    const closest = e.target.closest('[data-type]');
    const { type } = closest.dataset;

    const update = {
      ...options,
      [type]: {
        ...options[type],
        [name]: value
      }
    };

    await browser.storage.local.set({ options: update });
    getOptions();

  }

  async function handleLoadOptions(e) {
    const { result: data } = e.target;
    const options = JSON.parse(data);
    await browser.storage.local.set({ options });
    const updated = getFlatOptions(options);
    // eslint-disable-next-line no-restricted-syntax
    for (const prop in updated) {
      if (Object.prototype.hasOwnProperty.call(updated, prop)) {
        qs(`[name="${prop}"]`).value = updated[prop];
      }
    }
  }

  function handleChange(e) {
    e.target.removeEventListener('change', handleChange);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file, 'utf-8');
    reader.addEventListener('loadend', handleLoadOptions, false);
    reader.addEventListener('error', err => console.error(err), false);
  }

  function handleImport() {
    const input = document.createElement('input');
    input.type = 'file';
    input.acceptCharset = 'utf-8';
    input.click();
    input.addEventListener('change', handleChange, false);
  }

  function handleClear() {
    [yesButton, noButton].forEach(button => button.classList.add('visible'));
  }

  function removeOptionButtons() {
    [yesButton, noButton].forEach(button => button.classList.remove('visible'));
  }

  function handleNo() {
    removeOptionButtons();
  }

  async function handleYes() {
    const options = { settings: {}, configuration: {} };
    browser.storage.local.set({ options });
    getOptions();
    const inputs = qsa('input, textarea');
    inputs.forEach(function (input) {
      input.value = '';
    });
    removeOptionButtons();
  }

  function handleClick(e) {
    const { dataset: { action } } = e.target;
    switch (action) {
      case 'import': handleImport(); break;
      case 'export': handleExport(); break;
      case 'clear': handleClear(); break;
      case 'yes': handleYes(); break;
      case 'no': handleNo(); break;
    }
  }

  form.addEventListener('change', handleForm, false);
  buttons.addEventListener('click', handleClick, false);

}());
