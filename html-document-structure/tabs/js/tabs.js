'use strict';
document.addEventListener('DOMContentLoaded', function () {
  const cont = document.querySelector('.tabs-content');
  const tabs = cont.children;

  const tabNav = document.querySelector('.tabs-nav');
  const navItems = tabNav.children;
  let li = navItems[0];
  const navItem = tabNav.removeChild(li);

  for (let item of tabs) {
    item.classList.add('hidden');
    const newNavItem = navItem.cloneNode(true);
    newNavItem.firstChild.textContent = item.dataset.tabTitle;
    newNavItem.firstChild.classList.add(item.dataset.tabIcon);
    tabNav.appendChild(newNavItem);
  }
  tabNav.children[0].classList.add('ui-tabs-active');
  tabs[0].classList.remove('hidden');

  function tabToggle(e) {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.add('hidden');
      tabNav.children[i].classList.remove('ui-tabs-active');
      if (tabNav.children[i] === e.target.parentNode) {
        tabs[i].classList.remove('hidden');
      }
    }
    e.target.parentNode.classList.add('ui-tabs-active');
  }

  for (let item of navItems) {
    item.addEventListener('click', tabToggle)
  }
});