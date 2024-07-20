let counter = document.getElementById('counter');
let count = 0;

//Increment the timer every second once page loads
function incrementCounter(counterElement) {
  intervalID = setInterval(() => {
    count += 1;
    counterElement.innerText = count;
  }, 1000);
}
counter.addEventListener('load', incrementCounter(counter));

//Manually increment or decrement using plus and minus buttons
let minusButton = document.getElementById('minus');
let plusButton = document.getElementById('plus');

minusButton.addEventListener('click', () => {
  count = count - 1;
});

//Like an Individual Number of the Counter
let heartButton = document.getElementById('heart');
let likesContainer = document.querySelector('.likes');
heartButton.addEventListener('click', () => {
  let comment = document.createElement('li');
  let counter = document.getElementById('counter');
  comment.textContent = `${counter.innerText} has been liked`; //Can't implement click count
  likesContainer.appendChild(comment);
});

//Pausing & Resuming the Counter Functionality
let pauseButton = document.getElementById('pause');
let buttons = document.getElementsByTagName('button');
pauseButton.addEventListener('click', () => {
  if (pauseButton.innerText === 'Pause') {
    clearInterval(intervalID);
    let buttonsArray = [...buttons];
    let newButtonsArray = buttonsArray.filter(
      (button) => button.id !== 'pause'
    );
    newButtonsArray.forEach((button) => button.setAttribute('disabled', true));
    pauseButton.textContent = 'Resume';
  } else {
    incrementCounter(counter);
    let buttonsArray = [...buttons];
    let newButtonsArray = buttonsArray.filter(
      (button) => button.id !== 'pause'
    );
    newButtonsArray.forEach((button) => button.removeAttribute('disabled'));
    pauseButton.textContent = 'Pause';
  }
});
//Leaving Comments
let commentsContainer = document.getElementById('list');
let formInput = document.getElementById('comment-input');
let commentForm = document.getElementById('comment-form');

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let comment = document.createElement('p');
  comment.textContent = formInput.value;
  commentsContainer.appendChild(comment);
  formInput.value = '';
});
