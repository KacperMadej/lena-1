const root = document.getElementById('clk1');
const info = document.getElementById('info');

let currColor = 'red';

function getRand(max) {
    return Math.round(Math.random() * max);
}

function getColor() {
    return `rgb(${getRand(255)},${getRand(255)},${getRand(255)})`;
}

function opacities(color, opacity) {
    const parts = color.split(/[()]/);
    return `rgba(${parts[1]},${opacity})`;
}

root.onclick = () => {
    const newColor = currColor = getColor();
    root.style['background-color'] = newColor;
    info.innerHTML = newColor;
};

// color saving
const save = document.getElementById('save');
const list = document.getElementById('list');
save.onclick = () => {
    const node = document.createElement('div');
    node.className = 'saved-color';
    node.style['background-color'] = currColor;
    node.innerHTML = currColor;
    list.appendChild(node);
}