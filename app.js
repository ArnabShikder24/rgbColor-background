window.onload = () => {
    document.getElementById('change-btn').addEventListener('click', () => {
        const rgbColor = document.getElementById('root');
        const red = Math.round(Math.random() * 255);
        const green = Math.round(Math.random() * 255);
        const blue = Math.round(Math.random() * 255);
        const mainColor = `rgb(${red},${green},${blue})`;
        rgbColor.style.backgroundColor = mainColor;
        document.getElementById('rgb').value = mainColor;
    })
}