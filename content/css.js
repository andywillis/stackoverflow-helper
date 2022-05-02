const css = `
.s-link { color: black !important; }
.s-link:visited { color: #4b4d8a !important; }
.post-tag { color: black; background-color: white; border-color: #898989;}
.post-tag:hover { background-color: #caebc9; border-color: #898989; color: black; }
.s-post-summary--meta,
.s-post-summary--content-excerpt
  { margin-top: 1em !important; }
.sidebar-tags { margin-bottom: 1em; }
`;

const style = document.createElement('style');

style.appendChild(document.createTextNode(css));

document.querySelector('head').appendChild(style);
