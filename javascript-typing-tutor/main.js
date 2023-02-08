var $allSpan = document.querySelectorAll('span');

var i = 0;
function inEach(event) {

  var key = event.key;
  if (key === $allSpan[i].textContent) {
    $allSpan[i].className = 'correct';
    $allSpan[i + 1].className = 'current';
    i++;
  } else if (key !== $allSpan[i].textContent) {
    $allSpan[i].className = 'wrong';
  }
}

document.addEventListener('keydown', inEach);

// if key is the same $allSpan[i]
// change the class name of $allspan[i] to the 'correct' class
// & increment
// if the event did not give the desired outcome
// assign the current index a class name of 'wrong'
