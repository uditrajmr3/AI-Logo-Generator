function generateLogo() {
    const canvas = document.getElementById('logoCanvas');
    const context = canvas.getContext('2d');
    const text = document.getElementById('text').value;
    const color = document.getElementById('color').value;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = color;
    context.font = 'bold 48px sans-serif';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, canvas.width / 2, canvas.height / 2);
}
