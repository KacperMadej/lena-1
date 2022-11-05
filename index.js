const root = document.getElementById('clk1');
const info = document.getElementById('info');

function getRand(max) {
    return Math.round(Math.random() * max);
}

function getColor() {
    return `rgb(${getRand(255)},${getRand(255)},${getRand(255)})`;
}

root.onclick = () => {
    const newColor = getColor();
    root.style['background-color'] = newColor;
    info.innerHTML = newColor;
};