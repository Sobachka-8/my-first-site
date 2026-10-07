// Переворот страницы по кнопке
const flipBtn = document.querySelector('#flipButton');
const wrapper = document.querySelector('.wrapper');
let flipped = false;

if (flipBtn && wrapper) {
    flipBtn.addEventListener('click', () => {
        flipped = !flipped;
        wrapper.style.transition = 'transform 0.8s ease';
        wrapper.style.transform = flipped ? 'rotate(180deg)' : 'rotate(0deg)';
    });
}
