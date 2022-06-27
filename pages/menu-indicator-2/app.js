// Wait until the document is ready
$(document).ready(function () {
    // handle click events for (.list__item):
    $('.list__item').click(function (e) {
        // prevent default action:
        e.preventDefault();

        // remove active classes:
        $('.list__item').removeClass('active');

        // add active element:
        $(this).addClass('active');
    });

    // handle click events for (.toggle__icon):
    $('.toggle__icon').click(function (e) {
        e.preventDefault();

        // toggle active icon:
        $(this).toggleClass('active');

        // toggle active container:
        $('.container').toggleClass('active');
    });
});
