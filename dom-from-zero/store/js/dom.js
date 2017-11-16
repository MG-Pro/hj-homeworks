'use strict';
function createElement(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  const element = document.createElement(node.name);
  if (typeof node.props === 'object' && node.props !== null) {
    Object.keys(node.props).forEach(i => element.setAttribute(i, node.props[i]));
  }
  node.childs.forEach(child => {
    if (typeof child === 'string') {
      element.textContent = child;
    } else {
      element.appendChild(createElement(child));
    }
  });
  return element;
}
