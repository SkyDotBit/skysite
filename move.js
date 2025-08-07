

while (true) {
    animateDiv('animatedstar');
    animateDiv('modified');
}

function animateDiv(classs) {
    const elements = document.querySelectorAll(`.${classs} > *`);
    elements.forEach(element => {
        console.log(element);
        const rect = element.getBoundingClientRect();
        const position = {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
        };
        const randook = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
        if (randook === 0) {
            const ppopo = position.top + Math.floor(Math.random() * (6 - 0 + 1)) + 0 - 3;
            console.log(ppopo);
            rect.top = ppopo;
        } else if (randook === 1) {
            const ppopo = position.left + Math.floor(Math.random() * (6 - 0 + 1)) + 0 - 3;
            rect.left = ppopo;
        }
    });
}