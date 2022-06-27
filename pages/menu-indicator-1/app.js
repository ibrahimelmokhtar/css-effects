// Wait until the document is ready
$(document).ready(function () {
    // obtain --width variable within :root css selector:
    const width = $(this.body).css('--width');

    // obtain the color of the third list item:
    const color = $('.list__item:nth-child(3)').css('color');

    // change (body) background color:
    $(this.body).css({
        backgroundColor: color,
    });

    // change (.indicator) styles:
    $('.indicator').css({
        backgroundColor: color,
        borderColor: color,
        transform: `translate(-50%, calc(${width} * ${2}))`,
    });

    // handle mouse enter events for (.list__item):
    $('.list__item').mouseenter(function () {
        // remove active classes:
        $('.list__item').removeClass('active');

        // add active element:
        $(this).addClass('active');

        // obtain current color of list item:
        const color = $(this).css('color');

        // change (body) background color:
        $(document.body).css({
            backgroundColor: color,
        });

        // change (.indicator) styles:
        $('.indicator').css({
            backgroundColor: color,
            borderColor: color,
            transform: `translate(-50%, calc(${width} * ${$(this).css('--i')}))`,
        });
    });
});
