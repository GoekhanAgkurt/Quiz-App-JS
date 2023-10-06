// phew… not a lot going on here. Please add some code!

const buttonAnswer = document.querySelector('[data-js="button-answer"]');
const answer = document.querySelector('[data-js="card-answer"]');
const bookmark = document.querySelector('[data-js="bookmark"]');



bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("bookmark--active");
});


buttonAnswer.addEventListener("click", () => {
    answer.classList.toggle("card__answer");
    
})



