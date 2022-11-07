// 
function get(id) {
    return document.getElementById(id);
}

const root = get('clk1');
const info = get('info');

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
const save = get('save');
const list = get('list');
save.onclick = () => {
    const node = document.createElement('div');
    node.className = 'saved-color';
    node.style['background-color'] = currColor;
    node.innerHTML = currColor;
    list.appendChild(node);
}

// gradient making
function setSide(isRight) {
    const midPart = '90deg,'
    const oldGrad = list.style['background'].split(midPart);
    const colors = oldGrad[1].split(/[,)]/);

    list.style['backgound'] = oldGrad[0] +
        midPart +
        (isRight ?
            colors[0] + ',' + currColor :
            currColor + ',' + colors[1]) +
        ')';
}

const setLeft = get('setLeft');
const setRight = get('setRight');
[setLeft, setRight].forEach((elem, isRight) => {
    elem.onclick = () => {
        setSide(!!isRight);
    };
});
