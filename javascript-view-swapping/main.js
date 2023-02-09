var $tabContainer = document.querySelector('.tab-container');
// console.log($tabContainer);
var $allTab = document.querySelectorAll('.tab');
// console.log($allTab);
var $allView = document.querySelectorAll('.view');
// console.log($allView);

$tabContainer.addEventListener('click', tabFunction);

function tabFunction(event) {
  if (!event.target.matches('.tab')) {
    return;
  }
  for (var i = 0; i < $allTab.length; i++) {
    if ($allTab[i] === event.target) {
      $allTab[i].className = 'tab active';
    } else if ($allTab[i] !== event.target) {
      $allTab[i].className = 'tab';
    }
  }
  var dataValue = event.target.getAttribute('data-view');
  for (var j = 0; j < $allView.length; j++) {
    if ($allView[j].getAttribute('data-view') === dataValue) {
      $allView[j].className = 'view';
    } else if ($allView[j].getAttribute('date-view') !== dataValue) {
      $allView[j].className = 'view hidden';
    }
  }
}
