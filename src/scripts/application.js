'use strict';

// *******************************************************************************
// * APPLICATION JS
// *******************************************************************************

document.addEventListener('DOMContentLoaded', function(event) {

	var FadeTransition = Barba.BaseTransition.extend({
	  start: function() {
	    /**
	     * This function is automatically called as soon the Transition starts
	     * this.newContainerLoading is a Promise for the loading of the new container
	     * (Barba.js also comes with an handy Promise polyfill!)
	     */

			// As soon the loading is finished and the old page is faded out, let's fade the new page
      Promise
				.all([this.newContainerLoading, this.fadeOut])
        .then(this.fadeIn.bind(this));
	  },

    fadeOut: function() {
      return TweenMax.fromTo(this.oldContainer, 0.5, {
        autoAlpha: 1
      },
      {
        autoAlpha: 0,
        ease: Power2.easeOut
      });
    },

	  fadeIn: function() {
	    /**
	     * this.newContainer is the HTMLElement of the new Container
	     * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
	     * Please note, newContainer is available just after newContainerLoading is resolved!
	     */

      TweenMax.set(this.oldContainer, {
        autoAlpha: 0,
        display: 'none'
      });

      var _this = this;

      TweenMax.fromTo(this.newContainer, 0.5, {
          autoAlpha: 0
        },
        {
          autoAlpha: 1,
          ease: Power2.easeOut,
          onStart: function() {
            if(window.pageYOffset > 0) {
              window.scrollTo(0, 0);
            }
          },
          onComplete: function() {
            _this.done();
          }
      });

	  }
	});

	/**
	 * Next step, you have to tell Barba to use the new Transition
	 */

	Barba.Pjax.getTransition = function() {
		/**
		 * Here you can use your own logic!
		 * For example you can use different Transition based on the current page or link...
		 */

		return FadeTransition;
	};

	Barba.Dispatcher.on('initStateChange', function() {

		// send pageview to Analytics
    ga('send', 'pageview', '/' + location.pathname);

	});

	/**
		* Initialize functions here to make sure they get attached to the DOM
		*/
	Barba.Dispatcher.on('transitionCompleted', function(currentStatus) {
    inViewListener();
	});

	Barba.Pjax.start();

});
