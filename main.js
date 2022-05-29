

const ThumbsUp = document.querySelector('.fa-thumbs-up');
const ThumbsDown = document.querySelector('.fa-thumbs-down');
const Share = document.querySelector('.fa-share');
const Plus = document.querySelector('.fa-plus');
const Flag = document.querySelector('.fa-flag');

let count = 0;

ThumbsUp.addEventListener('click', function(){
    count++
    if (count % 2 !== 0){
        ThumbsUp.style.color = 'blue';
    }
    else if (count % 2 === 0){
        ThumbsUp.style.color = '#606060';
    }
})

