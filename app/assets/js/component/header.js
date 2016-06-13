
/***[ header ]***********************************************/

$(function() {

	$('.js-header').headroom({
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

});
