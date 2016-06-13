
/***[ waypoint ]***********************************************/

$(function() {

    var waypoint = $('.js-waypointitem');

    waypoint.each(function() {
        new Waypoint.Inview({
            element: this,
            enter: function (direction) {
                $(this.element).addClass('is-animated');
            },
            entered: function (direction) {
                $(this.element).addClass('is-animated');
            },
            offset: 'bottom-in-view'
        });
    });

});
