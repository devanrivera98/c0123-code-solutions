var timer = setInterval(countdown, 2000);

function countdown() {
  var $h1 = document.querySelector('h1');
  $h1.textContent = $h1.textContent - 1;
  if ($h1.textContent <= 0) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(timer);
  }
}
