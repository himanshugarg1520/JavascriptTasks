function getrandomHexcolor() {

    const letters = '0123456789ABCDEF';
    let hashletter = '#';
    for (let i = 0; i < 6; i++) {
        hashletter += letters[Math.floor(Math.random() * 16)];
    }
    return hashletter;

}

function hextoRgb(hex) {
    hex = hex.replace(/^#/, '');

    const bigint = parseInt(hex, 16);

    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `rgb(${r}, ${g}, ${b})`;    
}

function updateColor() {

    const hexColor = getrandomHexcolor();
    const rgbColor = hextoRgb(hexColor);

    document.getElementById('color-box').style.backgroundColor = hexColor;
    document.getElementById('hex-value').textContent = hexColor;
    document.getElementById('rgb-value').textContent = rgbColor;
}

let intervalId;

document.getElementById('start-btn').addEventListener('click', () => {

    if (!intervalId) {
        updateColor(); 
        intervalId = setInterval(updateColor, 2000); 
    }

});

document.getElementById('stop-btn').addEventListener('click', () => {

    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
});

