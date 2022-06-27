// Wait until the document is ready
$(document).ready(function () {
    // Move the cursor to the current mouse location:
    $(document).mousemove(function (event) {
        $('.cursor').css({
            top: `${event.pageY}px`,
            left: `${event.pageX}px`
        });
    });
});
