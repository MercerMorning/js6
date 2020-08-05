let button = document.querySelector('.btn')

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

button.addEventListener('click', e = () => {
    let activeElement;
    let child = document.createElement('div');
    console.log(`#${getRandomArbitrary(1, 9)}${getRandomArbitrary(1, 9)}${getRandomArbitrary(1, 9)}${getRandomArbitrary(1, 9)}${getRandomArbitrary(1, 9)}${getRandomArbitrary(1, 9)}`)
    child.style.backgroundColor = `#${getRandomArbitrary(1, 9)}${getRandomArbitrary(1, 9)}${getRandomArbitrary(1, 9)}${getRandomArbitrary(1, 9)}${getRandomArbitrary(1, 9)}${getRandomArbitrary(1, 9)}`;
    child.style.width = `${getRandomArbitrary(1, 100)}px`;
    child.style.height = `${getRandomArbitrary(1, 100)}px`;
    child.style.position = 'absolute';
    child.style.top = `${getRandomArbitrary(1, 100)}`
    child.style.left = `${getRandomArbitrary(1, 100)}`
    document.body.appendChild(child);
    let mDown = (e) => activeElement = e.target;
    let mUp = (e) => activeElement = null;
    let mMove = (e) => {
        if (activeElement) {
            activeElement.style.top = e.clientY + 'px';
            activeElement.style.left = e.clientX + 'px';
        }
    };
    let mOut = (e) => activeElement = null;
    child.addEventListener('mouseover', mOut);
    child.addEventListener('mousedown', mDown);
    child.addEventListener('mouseup', mUp);
    child.addEventListener('mousemove', mMove);
})