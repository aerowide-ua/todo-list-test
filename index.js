const list = document.getElementById("list");
let counter = 1;
function add(){
    let goal = document.getElementById("textbox");
    if (goal.value == "") {
        alert("You gotta write something");
    } else {
        let task = document.createElement("li");
        task.id = "task" + String(counter);
        task.className = "task";

        let task_text = task.appendChild(document.createElement("p"));
        task_text.innerHTML = String(counter) + ". " + goal.value;
        task_text.className = "nomargin";

        let x_button = task.appendChild(document.createElement("button"));
        x_button.innerHTML = "X";
        x_button.id = "x_but" + String(counter);
        x_button.className = "x_btn";
        x_button.onclick = function () {document.getElementById("task" + this.id.slice(5)).remove();}

        let progress_bar = task.appendChild(document.createElement("div"));
        progress_bar.id = "progress_bar" + String(counter);
        progress_bar.className = "progress_bar";

        let progress = progress_bar.appendChild(document.createElement("input"));
        progress.id = "progress_value" + String(counter);
        progress.className = "p_value";
        progress.type = "range";
        progress.min = "0";
        progress.max = "100";
        progress.value = "0";
        progress.step = "5";

        let prog = progress_bar.appendChild(document.createElement("span"));
        prog.className = "p_text";
        prog.innerHTML = progress.value + "%";
        progress.addEventListener("input", function () {
            prog.innerHTML = progress.value + "%";
            if (progress.value == 100) {
                alert("Task " + String(this.id.slice(14)) + " is completed!");
                task_text.style.textDecoration = "line-through";
            }
        })


        list.appendChild(task);
        goal.value = "";
        counter++;
    }

}
