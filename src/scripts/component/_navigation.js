'use strict';

// *******************************************************************************
// * Header active click
// *******************************************************************************

var item = document.querySelectorAll('.js-header .navigation__item');

for (let i = 0; i < item.length; i++) {
  item[i].onclick = function() {
    var c = 0;
    while (c < item.length) {
      item[c++].className = 'navigation__item';
    }
    item[i].className = 'navigation__item is-active';
  };
}
