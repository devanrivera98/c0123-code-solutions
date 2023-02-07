var counter = 0;
var $body = document.querySelector('body');
var $button = document.querySelector('button');

function changeColor(event) {
  counter++;
  if (counter % 2) {
    $body.className = 'light-body';
    $button.className = 'light-button';
  } else {
    $body.className = 'dark-body';
    $button.className = 'dark-button';
  }
}

$button.addEventListener('click', changeColor);
