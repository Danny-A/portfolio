
/***[ tracking analytics ]***********************************************/

// track in google analytics
function trackView(url) {
    url = url.replace('https://', '').replace('http://', '').replace('mailto:', '');
    ga('send', {
		  hitType: 'pageview',
		  page: '/' + url
		});

    ga('send', 'pageview', '/' + url);
}

// track events in google analytics
// example: category(video), action(play,pause,stop), label(title, name file), value(length, dollar value), nonInteraction(false,true (default is false and it impacts the bounce rate calculations))
function trackEvent(category, action, label) {
	ga('send', {
		hitType: 'event',
		eventCategory: category,
		eventAction: action,
		eventLabel: label
	});

}

// track click event
$('[data-event="ga"]').on('click', function() {
 var category = $(this).data('category') ? $(this).data('category') : '',
     action = $(this).data('action') ? $(this).data('action') : '',
     label = $(this).data('label') ? $(this).data('label') : '';

 trackEvent(category, action, label);

});

// analytics
$('body').on('click', 'a[target="_blank"], [data-ga]', function() {
	var value,
			link = $(this),
			href = link.attr('href'),
			ga = link.data('ga');

	if (ga) {
		value = ga;
		if (value.indexOf('/') < 0) {
			value = value + '/' + href;
		}
	} else if (link.attr('target')) {
		value = 'external/' + href;
	}
	trackView(value);

});

