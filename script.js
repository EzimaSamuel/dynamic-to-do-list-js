// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn'); // Select the "Add Task" button
    const taskInput = document.getElementById('task-input'); // Select the input field for tasks
    const taskList = document.getElementById('task-list'); // Select the unordered list for tasks

    // Function to load tasks from Local Storage when the page loads
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Get tasks from Local Storage
        storedTasks.forEach(taskText => addTask(taskText, false)); // Add tasks to the list without re-saving
    }

    // Function to add a new task to the list
    function addTask(taskText, save = true) {
        // Check if the input is not empty
        if (!taskText) {
            alert('Please enter a task.'); // Alert if input is empty
            return;
        }

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn'); // Add the 'remove-btn' class for styling
        listItem.appendChild(removeButton); // Append the remove button to the list item

        // Add the list item to the task list
        taskList.appendChild(listItem);

        // Event listener to remove a task
        removeButton.addEventListener('click', () => {
            taskList.removeChild(listItem); // Remove the task from the DOM
            removeTaskFromLocalStorage(taskText); // Remove task from Local Storage
        });

        // Save to Local Storage if 'save' is true
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Get current tasks
            storedTasks.push(taskText); // Add the new task
            localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save the updated task list to Local Storage
        }
    }

    // Function to remove a task from Local Storage
    function removeTaskFromLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Get tasks from Local Storage
        const updatedTasks = storedTasks.filter(task => task !== taskText); // Remove the specified task
        localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Save the updated task list
    }

    // Add event listener to the "Add Task" button
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim(); // Get and trim the input value
        addTask(taskText); // Call addTask function to add a task
        taskInput.value = ''; // Clear the input field
    });

    // Add event listener to allow adding tasks by pressing 'Enter'
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim(); // Get and trim the input value
            addTask(taskText); // Call addTask function to add a task
            taskInput.value = ''; // Clear the input field
        }
    });

    // Load tasks from Local Storage when the page loads
    loadTasks();
});