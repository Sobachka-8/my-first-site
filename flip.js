// Переворот страницы по кнопке
const flipBtn = document.querySelector('#flipButton');
let flipped = false;

if (flipBtn) {
    flipBtn.addEventListener('click', () => {
        flipped = !flipped;
        document.body.style.transition = 'transform 0.8s ease';
        document.body.style.transform = flipped ? 'rotate(180deg)' : 'rotate(0deg)';
    });
}
