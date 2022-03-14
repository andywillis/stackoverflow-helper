(function () {

  browser.storage.onChanged.addListener(function (changes, area) {
    console.log(JSON.stringify(changes), area);
  });

  browser.storage.local.set({ data: 'a' });

  // Moving the tags

  function qs(selector) {
    return document.querySelector(selector);
  }

  const tagWrapper = qs('.post-taglist').cloneNode(true);
  const sidebar = qs('#sidebar');
  sidebar.insertAdjacentElement('afterbegin', tagWrapper);

  // Pasting

  function paste({ menuId, dataType, id }) {
    const active = document.activeElement;
    const el = document.createElement('textarea');
    el.value = data[dataType][menuId][id];
    el.style.position = 'fixed';
    el.style.left = '-999999px';
    el.style.top = '-999999px';
    document.body.appendChild(el);
    el.focus();
    el.select();
    document.execCommand('copy');
    active.focus();
    document.execCommand('paste');
    el.remove();
  }

  function wrangleType(data) {
    paste(data);
  }

  browser.runtime.onMessage.addListener(wrangleType);

}());
