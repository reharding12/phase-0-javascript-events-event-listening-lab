let eventListenerCalled = true;

function addingEventListener() {
  eventListenerCalled = true;
  console.log('Event listener called');
  alert('I was clicked!');
}

const input = document.getElementById('button');

input.addEventListener('click', addingEventListener);