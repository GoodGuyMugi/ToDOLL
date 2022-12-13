let taskUL = document.querySelector(".task-list ul");
let tAgUL = document.querySelector(".catagory ul");
document.addEventListener("DOMContentLoaded", () => {
    //task list

    fetch("tasks.json")
        .then(Response => Response.json())
        .then(tasks => {
            tasks.forEach(task => {
                let LI = document.createElement('LI');
                LI.innerHTML = generateTaskLis(task);
                taskUL.appendChild(LI);
            });
        });
    // catagory tag
    fetch("tag.json")
        .then(Response => Response.json())
        .then(tag => {
            tag.forEach(taG => {
                let list = document.createElement('LI');
                list.setAttribute("onclick", `filter_task('${taG.name}')`);
                list.innerHTML = generateTagLi(taG);
                tAgUL.appendChild(list);
            });
        });

    //Search for task
    let searchDom = document.querySelector(".nav-left .search input[type='text']");
    searchDom.addEventListener("keyup", function (e) {
        searchText = e.target.value;
        taskUL.innerHTML = "";
        fetch("tasks.json")
            .then(Response => Response.json())
            .then(tasks => {
                tasks.forEach(task => {
                    let LI = document.createElement('LI');

                    if (task["name"].includes(searchText)) {
                        LI.innerHTML = generateTaskLis(task);
                        taskUL.appendChild(LI);
                    }
                });
            });

    });
});


//Add new task
let btnAddnewTask = document.querySelector("#add-new");
btnAddnewTask.addEventListener("click", function (e) {
    btnAddnewTask.innerHTML = "";
    let InputtaskName = document.createElement("input");
    let Inputcheck = document.createElement("input");
    Inputcheck.setAttribute("type", "checkbox");
    InputtaskName.setAttribute("type", "text");
    InputtaskName.setAttribute("placeholder", "Input Task");
    btnAddnewTask.appendChild(Inputcheck);
    btnAddnewTask.appendChild(InputtaskName);

    InputtaskName.focus();
    InputtaskName.addEventListener("keyup", function (e) {
        if (e.key == "Enter") {
            const d = "Today";
            let newTname = e.target.value;
            let task = {
                name: newTname,
                catagory: "N/A",
                Date: d,
            };

            let LI = document.createElement('LI');
            LI.innerHTML = generateTaskLis(task);
            taskUL.appendChild(LI);

            InputtaskName.value = "";
        }
    });
});


//Add new Category
let btnAddCat = document.querySelector(".add-new-catagory");
btnAddCat.addEventListener("click", function (e) {
 let newCatLI=document.createElement("LI");
 newCatLI.innerHTML=`<span class="material-symbols-outlined">home</span>
                      <input type="text" placeholder="Input Catagory">`;                     
 newCatInput = newCatLI.querySelector("Input");                 
 tAgUL.appendChild(newCatLI);
 newCatInput.focus();
});


//filter task by catagory
function filter_task(name) {
    taskUL.innerHTML = "";
    fetch("tasks.json")
        .then(Response => Response.json())
        .then(tasks => {
            tasks.forEach(task => {
                if (name == "All Tasks") {
                    let LI = document.createElement("LI");
                    LI.innerHTML = generateTaskLis(task);
                    taskUL.appendChild(LI);
                }
                if (task.catagory == name) {
                    let LI = document.createElement("LI");
                    LI.innerHTML = generateTaskLis(task);
                    taskUL.appendChild(LI);
                }
            });
        });
}
function generateTaskLis(task) {
    let li = `
                 <div class="task">
                     <input type="checkbox" name="game" />
                     <label>${task.name}</label>
                </div>
                <div class="des">
                      <span>${task.catagory}</span>
                      <span>${task.Date}</span>
                </div>
              `;
    return li;
}

function generateTagLi(taG) {
    let T = `<span class="material-symbols-outlined">${taG.logo}</span>${taG.name}<div class="space">${taG.noti}</div>`;
    return T;
}