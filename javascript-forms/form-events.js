function handleFocus(event) {
  console.log('focus event was fired');
  console.log('event target name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event target name:', event.target.name);
}

function handleInput(event) {
  console.log('value of', event.target.name, event.target.value);
}

var $firstInput = document.getElementById('user-name');
console.log($firstInput);
var $secondInput = document.getElementById('user-email');
console.log($secondInput);
var $textArea = document.getElementById('user-message');
console.log($textArea);

$firstInput.addEventListener('focus', handleFocus);
$firstInput.addEventListener('blur', handleBlur);
$firstInput.addEventListener('input', handleInput);

$secondInput.addEventListener('focus', handleFocus);
$secondInput.addEventListener('blur', handleBlur);
$secondInput.addEventListener('input', handleInput);

$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('blur', handleBlur);
$textArea.addEventListener('input', handleInput);
