const invbox1 = document.querySelector('.trigger1');
const hmm = document.querySelector('.hmm');

invbox1.addEventListener('mouseenter', () => {
    hmm.classList.add('move');
});

invbox1.addEventListener('mouseleave', () => {
    hmm.classList.remove('move');
});