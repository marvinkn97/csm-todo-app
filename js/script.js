var addBtn = document.querySelector("#addBtnId");

var todoItemList = document.querySelector("#todoulId");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  var todoInput = document.querySelector("#todoId").value;

  if (todoInput.trim() != "") {
    console.log(todoInput);
    var newTodoItem = document.createElement("li");
    newTodoItem.className = `list-group-item list-group-item-primary`;

    newTodoItem.innerHTML =
      todoInput +
      `<a href="#" class="float-right text-danger font-weight-bold">X</a`;
    todoItemList.appendChild(newTodoItem);
  } else {
    alert("please add some text");
  }

  document.querySelector("#todoId").value = "";
});

todoItemList.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.className == `float-right text-danger font-weight-bold`) {
    if (todoItemList.children.length == 1) {
      if (
        confirm("This is the last todo item, are you sure you want to delete?")
      ) {
        e.target.parentElement.remove();
      }
    } else {
      e.target.parentElement.remove();
    }
  }
});
