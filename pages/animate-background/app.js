// Wait until the document is ready
$(document).ready(function () {
    // max number of bubbles:
    const MAX_BUBBLES = 50;

    // minimum and maximum limits of the generated random numbers:
    const MIN_LIMIT = 1;
    const MAX_LIMIT = 5;

    // hide (.bubble) element before start:
    $('.bubble').hide();

    // generate random bubbles:
    for (let i=1; i<=MAX_BUBBLES; i++) {
        const random = (Math.random() * MAX_LIMIT) + MIN_LIMIT;
        $('.bubbles').append(`<span style="--i: ${random};"></span>`);
    }

    // show (.bubble) element after finish:
    $('.bubble').show();
});
