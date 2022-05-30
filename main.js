const moreBtn = document.querySelector('.TitleAndMoreBtn .moreBtn');
const title = document.querySelector('.TitleAndMoreBtn .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});