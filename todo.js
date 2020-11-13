const lists = document.getElementById("lists");

const submit = document.getElementById("submit");
submit.addEventListener("click", AddTodoList);

// Append a new todo list item 
function AddTodoList(){
    const todo_text = document.getElementById("todo-text");
    // Create a list item with delete button
    const li = document.createElement("li");
    li.classList.add("list-item");
    const listItem = document.createElement("h2");
    const deletebtn = document.createElement("button");
    deletebtn.innerText = "Delete";
    deletebtn.setAttribute("id", "delete");
    deletebtn.setAttribute("class", "deleteBtn");
    listItem.innerHTML = todo_text.value;
    li.appendChild(listItem);
    li.appendChild(deletebtn);
    lists.appendChild(li);
    // Clear the input field
    todo_text.value = "";
    todo_text.focus();
    // Delete 
    deletebtn.addEventListener("click", () => li.remove());
}