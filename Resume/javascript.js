$('.skills-prog li .skills-bar').each(function(i) {
    var bar = $(this).find('.bar');
    bar.delay(i * 150).animate({
        width: $(this).parents().attr('data-percent') + '%'
    }, 1000, 'linear', function() {
        bar.css('transition-duration', '.5s');
    });
});

$('.skills-soft li svg').each(function(i) {
    var circle = $(this).children('.cbar');
    var r = circle.attr('r');
    var c = Math.PI * (r * 2);
    var percent = $(this).parent().data('percent');
    var cbar = ((100 - percent) / 100) * c;

    circle.css({
        'stroke-dashoffset': c,
        'stroke-dasharray': c
    });

    circle.delay(i * 150).animate({
        'stroke-dashoffset': cbar
    }, 1000, 'linear', function() {
        circle.css('transition-duration', '.3s');
    });

    var small = $(this).siblings('small');
    small.prop('Counter', 0).delay(i * 150).animate({
        Counter: percent
    }, {
        duration: 1000,
        step: function (now) {
            small.text(Math.ceil(now) + '%');
        }
    });
});
  