var $taskList = document.querySelector('.task-list');
// console.log($taskList);
$taskList.addEventListener('click', forClicks);

function forClicks(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target && event.target.matches('button')) {
    console.log('closest target:', event.target.closest('.task-list-item'));
    event.target.closest('.task-list-item').remove();
  }
}
