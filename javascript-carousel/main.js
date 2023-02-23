var $selector = document.querySelector('.selector');
var $allCircles = document.querySelectorAll('.circle');
var $allImages = document.querySelectorAll('img');
var $leftArrow = document.querySelector('.fa-less-than');
var $rightArrow = document.querySelector('.fa-greater-than');

var currentIndex = 0;

$selector.addEventListener('click', clickCircle);

function clickCircle(event) {
  for (var i = 0; i < $allCircles.length; i++) {
    if ($allCircles[i] === event.target) {
      $allCircles[i].classList.add('fa-solid');
      $allImages[i].classList.remove('hidden');
    } else if ($allCircles[i] !== event.target) {
      $allCircles[i].classList.remove('fa-solid');
      $allCircles[i].classList.add('fa-regular');
      $allImages[i].classList.add('hidden');
    }
  }
  clearInterval(intervalID);

}

var intervalID = setInterval(myCarousel, 2000);

function myCarousel() {
  // console.log(currentIndex);
  for (var i = 0; i < $allCircles.length; i++) {
    if (i === currentIndex) {
      $allCircles[i].classList.add('fa-solid');
      $allImages[i].classList.remove('hidden');
    } else if ($allCircles[i] !== currentIndex) {
      $allCircles[i].classList.remove('fa-solid');
      $allCircles[i].classList.add('fa-regular');
      $allImages[i].classList.add('hidden');
    }
  }
  currentIndex++;
  if (currentIndex > $allCircles.length - 1) {
    currentIndex = 0;
  }
}

$rightArrow.addEventListener('click', rightFunction);

function rightFunction(event) {
  for (var i = 0; i < $allCircles.length; i++) {
    if (i === currentIndex) {
      $allCircles[i].classList.add('fa-solid');
      $allImages[i].classList.remove('hidden');
    } else if (i !== currentIndex) {
      $allCircles[i].classList.remove('fa-solid');
      $allCircles[i].classList.add('fa-regular');
      $allImages[i].classList.add('hidden');
    }
  }
  currentIndex++;
  if (currentIndex > $allCircles.length - 1) {
    currentIndex = 0;
  }
}

$leftArrow.addEventListener('click', leftFunction);

function leftFunction() {
  for (var i = 0; i < $allCircles.length; i++) {
    if (i === currentIndex) {
      $allCircles[i].classList.add('fa-solid');
      $allImages[i].classList.remove('hidden');
    } else if (i !== currentIndex) {
      $allCircles[i].classList.remove('fa-solid');
      $allCircles[i].classList.add('fa-regular');
      $allImages[i].classList.add('hidden');
    }
  }
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 3;
  }
  clearInterval(intervalID);
}
