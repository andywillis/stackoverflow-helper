(function () {

  // Moving the tags

  function moveTags() {
    const tags = document.querySelectorAll('.post-taglist .post-tag');
    const sidebar = document.querySelector('#sidebar');
    const div = document.createElement('div');
    div.className = 'sidebar-tags';
    tags.forEach(tag => div.appendChild(tag.cloneNode(true)));
    sidebar.insertAdjacentElement('afterbegin', div);
  }

  moveTags();

  // Pasting

  function paste({ text }) {
    const active = document.activeElement;
    const el = document.createElement('textarea');
    el.value = text;
    // el.value = data[heading][subheading][id];
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
