// Wait until the document is ready
$(document).ready(function () {
    // Display number of projects:
    $('.category h2').each(function () {
        let counter = $(this).siblings().children().length;
        $(this).append(`<div class="counter">(${counter})</div>`);
    });

    // Hide All Projects Except The First One:
    $('.category:not(:first-of-type) section').slideUp();

    // Handle click events for the titles:
    $('.category h2').click(function () {
        // Hide all projects:
        $('.category section').siblings().not($(this)).siblings().slideUp();

        // Show only the clicked projects:
        $(this).siblings('section').slideToggle(1000);
        console.log($(this).siblings('section').children().length);
    });
});
