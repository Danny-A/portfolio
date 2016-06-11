
$(function() {

    var waypoints = $('.js-waypointItem');

    waypoints.each(function() {
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
