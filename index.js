const root = document.getElementById('clk1');
const info = document.getElementById('info');

function getRand(max) {
    return Math.round(Math.random() * max);
}

function getColor() {
    return `rgb(${getRand(255)},${getRand(255)},${getRand(255)})`;
}

function opacities(color, opacity) {
    const parts = color.split(/[()]/);
    return `rgba(${parts[1]},${opacit})`;
}

root.onclick = () => {
    const newColor = getColor();
    root.style['background-color'] = newColor;
    root.style['border-color'] = opacities(newColor, 0.5) + ' black';
    info.innerHTML = newColor + '_' + opacities(newColor, 0.5);
};