// remove active class from all list items:
const removeActive = () => {
    const listItems = document.querySelectorAll('.list__item');
    listItems.forEach(element => {
        if (element.classList.contains('active')) {
            element.classList.remove('active');
        }
    });
};

// wait until DOM is ready:
document.addEventListener('DOMContentLoaded', () => {
    // obtain ALL list items:
    const listItems = document.querySelectorAll('.list__item');

    // click events on list items:
    listItems.forEach((element, key) => {
        element.addEventListener('click', (event) => {
            // remove active classes:
            removeActive();

            // add active element:
            element.classList.add('active');
        });
    });

    // obtain toggle icon:
    const toggleIcon = document.querySelector('.toggle__icon');
    // obtain navigation menu:
    const container = document.querySelector('.container');

    // click event on toggle icon:
    toggleIcon.addEventListener('click', () => {
        toggleIcon.classList.toggle('active');
        container.classList.toggle('active');
    });
});
