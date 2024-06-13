// Select references to the button, input, and list elements
const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

// Function to add a new goal list item
function addGoal() {
  // Get the entered value from the input field
  const enteredValue = inputEl.value.trim(); // Trim leading/trailing whitespace

  // Check if the entered value is empty or only whitespace
  if (enteredValue === '') {
    alert('Please enter a goal!'); // Inform user about empty input
    return; // Exit the function early if no value is entered
  }

  // Create a new list item element
  const listItemEl = document.createElement('li');

  // Set the text content of the list item to the entered value
  listItemEl.textContent = enteredValue;

  // Append the new list item to the unordered list
  listEl.appendChild(listItemEl);

  // Clear the input field for the next goal
  inputEl.value = '';
}

// Add an event listener to the button for the 'click' event
buttonEl.addEventListener('click', addGoal);
