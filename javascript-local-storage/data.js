/* exported todos */

var todos = [];
var previousTodasJSON = localStorage.getItem('javascript-local-storage');
if (previousTodasJSON !== null) {
  todos = JSON.parse(previousTodasJSON);
}
window.addEventListener('beforeunload', callBack);

function callBack(event) {
  var todosJson = JSON.stringify(todos);
  var todosLocalStorage = localStorage.setItem('javascript-local-storage', todosJson);
  return todosLocalStorage;
}
