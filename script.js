// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn'); // Select the "Add Task" button
    const taskInput = document.getElementById('task-input'); // Select the input field for tasks
    const taskList = document.getElementById('task-list'); // Select the unordered list for tasks

    // Function to add a new task to the list
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim the input value

        // Check if the input is not empty
        if (taskText === '') {
            alert('Please enter a task.'); // Alert if input is empty
            return;
        }

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText; // Set text of the list item

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove'; // Set button text
        removeButton.className = 'remove-btn'; // Add class for styling

        // Add click event to the remove button
        removeButton.onclick = () => {
            taskList.removeChild(listItem); // Remove the list item from the task list
        };

        listItem.appendChild(removeButton); // Append the remove button to the list item
        taskList.appendChild(listItem); // Append the list item to the task list
        taskInput.value = ''; // Clear the input field
    }

    // Attach event listeners to the button and input field
    addButton.addEventListener('click', addTask); // Call addTask when button is clicked
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') { // Allow adding task with "Enter" key
            addTask();
        }
    });
});