// generate random hex colors
const generateRandomColor = () => {
    const charArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let generatedColor = '#';
    for (let i=0; i<6; i++) {
        let randomIndex = Math.floor(Math.random() * charArray.length);
        generatedColor += charArray[randomIndex];
    }
    return generatedColor;
};

// Wait until the document is ready
$(document).ready(function () {
    $('svg').click(function (e) {
        // prevent default action:
        e.preventDefault();

        // generate random colors:
        const darkColor = generateRandomColor();
        const lightColor = generateRandomColor();

        // set random colors:
        $(':root').css({
            '--dark-color': darkColor,
            '--light-color': lightColor,
        });
    });
});
