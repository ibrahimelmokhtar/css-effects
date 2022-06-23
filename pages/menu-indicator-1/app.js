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

    // obtain indicator element:
    const indicator = document.querySelector('.indicator');

    // obtain --width variable within :root css selector:
    const width = getComputedStyle(document.body).getPropertyValue('--width');

    const color = document.querySelector('.list__item:nth-child(3)').style.color;
    // change body background color:
    document.body.style.backgroundColor = color;

    // change indicator background color:
    indicator.style.backgroundColor = color;
    indicator.style.borderColor = color;

    // update indicator position:
    indicator.style.transform = `translate(-50%, calc(${width} * ${2}))`;

    // mouseenter events:
    listItems.forEach((element, key) => {
        element.addEventListener('mouseenter', (event) => {
            // remove active classes:
            removeActive();

            // add active element:
            element.classList.add('active');

            // obtain current color of list item:
            const color = event.target.style.color;

            // change body background color:
            document.body.style.backgroundColor = color;

            // change indicator background color:
            indicator.style.backgroundColor = color;
            indicator.style.borderColor = color;

            // update indicator position:
            indicator.style.transform = `translate(-50%, calc(${width} * ${key}))`;
        });
    });
});
