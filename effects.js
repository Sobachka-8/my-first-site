// Радужный след за курсором/пальцем
document.addEventListener('pointermove', (e) => {
    const dot = document.createElement('div');
    dot.className = 'trail-dot';
    dot.style.left = e.pageX + 'px';
    dot.style.top = e.pageY + 'px';

    const hue = Math.floor(Math.random() * 360);
    dot.style.background = `hsl(${hue}, 100%, 60%)`;

    document.body.appendChild(dot);

    setTimeout(() => dot.remove(), 600);
});
