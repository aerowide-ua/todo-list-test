const list = document.getElementById("list");
let clearBtn = document.getElementById("clear");
let stepsize = document.getElementById("steps");
clearBtn.onclick = clear;
let counter = 1;
function language(q) {
    if (q===1) {
        document.getElementById("header").innerHTML = "To-do List";
        document.getElementById("textbox").placeholder = "Add new task...";
        document.getElementById("add").innerHTML = "Add";
        document.getElementById("steptext").innerHTML = "Steps: ";
        document.getElementById("clear").innerHTML = "Clear";
        alert("!")
    }
    if (q===2) {
        document.getElementById("header").innerHTML = "Список справ";
        document.getElementById("textbox").placeholder = "Додати справу...";
        document.getElementById("add").innerHTML = "Додати";
        document.getElementById("steptext").innerHTML = "Кроки: ";
        document.getElementById("clear").innerHTML = "Очистити";
        alert("!")
    }
}
function add(){
    let goal = document.getElementById("textbox");
    if (goal.value == "") {
        return
    }
    else {

        // task container :P
        let task = document.createElement("li");
        task.id = "task" + String(counter);
        task.className = "task";

        // task name fresh from the input
        let task_text = task.appendChild(document.createElement("p"));
        task_text.innerHTML = String(counter) + ". " + goal.value;
        task_text.className = "nomargin";

        // the evil X button
        let x_button = task.appendChild(document.createElement("button"));
        x_button.innerHTML = "X";
        x_button.id = "x_but" + String(counter);
        x_button.className = "x_btn";
        x_button.onclick = function () {
            document.getElementById("task" + this.id.slice(5)).remove();
            if (list.childElementCount == 0) {clearBtn.style.display = "none";}}

        // progress barr container
        let progress_bar = task.appendChild(document.createElement("div"));
        progress_bar.id = "progress_bar" + String(counter);
        progress_bar.className = "progress_bar";

        // can you guess what this is ???????
        let progress = progress_bar.appendChild(document.createElement("input"));
        progress.id = "progress_value" + String(counter);
        progress.className = "p_value";
        progress.type = "range";
        progress.min = "0";
        progress.max = "100";
        progress.value = "0";
        progress.step = stepsize.value;

        // the percentage number thing i think
        let prog = progress_bar.appendChild(document.createElement("span"));
        prog.className = "p_text";
        prog.innerHTML = progress.value + "%";

        // updates in real time!! pro coding
        progress.addEventListener("input", function () {
            prog.innerHTML = progress.value + "%";
            if (progress.value == 100) {
                // alert("Task " + String(this.id.slice(14)) + " is completed!");
                task_text.style.textDecoration = "line-through";
            } else {
                task_text.style.textDecoration = "none";
            }
        })

        stepsize.addEventListener("input", function () {
            progress.step = stepsize.value;
        })


        // post-processing or whatever its called idk idc
        list.appendChild(task);
        clearBtn.style.display = "block";
        goal.value = "";
        counter++;
    }

}
function clear() {
    document.getElementById("list").innerHTML = "";
    clearBtn.style.display = "none";
    counter = 1;
}

