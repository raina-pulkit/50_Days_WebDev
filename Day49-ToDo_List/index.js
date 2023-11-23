const past = JSON.parse(localStorage.getItem("todo"));

if(past){
    past.forEach((element, ind) => {
        addTask(element.text, element.completed);
    });
}


function addTask(task, classname = false){
        if(task){
            if(classname === false){
                $(".todo").append(`<li>${task}</li>`);
            }
            else
                $(".todo").append(`<li class = "completed">${task}</li>`);

        // id.on("click", (e) => {
        //     e.preventDefault();
        //     console.log($(e.target));
        //     $(e.target).toggleClass("completed")
        // });

        // id.on("contextmenu", (e) => {
        //     e.preventDefault();
        //     $(e.target).remove();
        // });

            updateLocal();
    }
}

function updateLocal(){
    let arr = [];
    $(".todo li").each((ind, elem) => {
        const temp = {
            "text": elem.innerText,
            "completed": elem.classList.contains("completed")
        };
        arr.push(temp);
    });
    localStorage.setItem('todo', JSON.stringify(arr))
}


$(document).on("click", ".todo li", (e) => {
    e.preventDefault();
    $(e.target).toggleClass("completed")
    updateLocal();
});


$(document).on("contextmenu", ".todo li", (e) => {
    e.preventDefault();

    $(e.target).css({
        "animation": "going-out 0.2s ease"
    });

    $(e.target).on("animationend", () => {
        $(e.target).remove();
    });
    updateLocal();
});

$("#submit").click((e) => {
    e.preventDefault();
    addTask($("#input")[0].value);
    $("#input")[0].value = "";
});