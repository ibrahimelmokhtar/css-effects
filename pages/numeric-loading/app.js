// Wait until the document is ready
$(document).ready(function () {
    console.log('Hello');
    let count = 0;
    const counterID = setInterval(function () {
        if (count <= 100) {
            // update the displayed counter:
            $('.count').text(`${count}%`);

            // update the dynamic background:
            $('.left-to-right .loader').css({
                width: `${count}%`,
            });

            // left loader:
            $('.collapse .loader.left').css({
                width: `${count/2}%`,
            });

            // right loader:
            $('.collapse .loader.right').css({
                width: `${count/2}%`,
            });

            // increase the counter:
            count += 1;
        } else {
            // reset the counter:
            clearInterval(counterID);
            count = 0;

            // fade-out the dynamic background and counter:
            $('.count').stop().fadeOut(100);
            $('.loader').stop().fadeOut(100);

            // fade-in the welcome message:
            $('.welcome').stop().fadeIn(3000);
        }
    } , 50);
});
