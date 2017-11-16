'use strict';

// *******************************************************************************
// * INVIEW
// *******************************************************************************

function inViewListener() {
  inView('.js-inview')
    .on('enter', function(element) {
      if(!element.done) {
        element.classList.add('is-animated');
      }
    })
    .on('exit', function(element) {
      element.done = true;
    });
}
