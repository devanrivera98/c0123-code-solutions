var counter = 0;
var $firstButton = document.querySelector('.button-one');
var $secondButton = document.querySelector('.pop-up-button');
var $sectionTwo = document.querySelector('.section-two-off');

function firstPrompt(event) {
  counter++;
  if (counter >= 1) {
    $sectionTwo.className = 'section-two-on';
  }
}
function secondPrompt(event) {
  counter++;
  if (counter >= 1) {
    $sectionTwo.className = 'section-two-off';
  }
}
$firstButton.addEventListener('click', firstPrompt);
$secondButton.addEventListener('click', secondPrompt);
