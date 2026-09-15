function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete">Excluir</button>
    `;

    const task = li.querySelector("span");
    const deleteButton = li.querySelector(".delete");

    task.addEventListener("click", function () {
        task.classList.toggle("completed");
    });

    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

