// Wait until the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn'); // Button to add a new task
    const taskInput = document.getElementById('task-input'); // Input field for new tasks
    const taskList = document.getElementById('task-list'); // Unordered list to hold tasks

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim task input

        if (taskText === "") {
            alert("Please enter a task"); // Alert if task is empty
            return;
        }

        // Create new <li> element for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create 'Remove' button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn'); // Add class using classList.add

        // Attach event listener to remove task when 'Remove' button is clicked
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        // Append 'Remove' button to the <li>, then append <li> to the task list
        li.appendChild(removeButton);
        li.classList.add('task-item'); // Optional: Add a class for the <li> element if needed
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // Event listener for the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Event listener for pressing "Enter" key to add a task
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});