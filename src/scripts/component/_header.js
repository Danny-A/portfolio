'use strict';

// *******************************************************************************
// * HEADER
// *******************************************************************************

// grab an element
var myElement = document.querySelector('.js-header');
// construct an instance of Headroom, passing the element

var headroom  = new Headroom(myElement, {
  'offset': 30,
  'tolerance': 5,
  'classes': {
    // when element is initialised
    initial: 'is--top',
    // when scrolling up
    pinned: 'is--pinned',
    // when scrolling down
    unpinned: 'is--unpinned',
    // when above offset
    top: 'is--top',
  }
});

// initialise
headroom.init();
