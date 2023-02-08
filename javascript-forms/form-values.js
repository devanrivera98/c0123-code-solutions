var $contactForm = document.getElementById('contact-form');
console.log($contactForm);

var messageData = {};
function enterSubmit(event) {

  event.preventDefault();
  messageData.name = $contactForm.elements.name.value;
  messageData.email = $contactForm.elements.email.value;
  messageData.message = $contactForm.elements.message.value;
  console.log(messageData);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', enterSubmit);
