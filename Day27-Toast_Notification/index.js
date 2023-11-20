const messages = [
    "msg 1: Lorem, ipsum dolor.",
    "msg 2: Lorem, ipsum dolor.",
    "msg 3: Lorem, ipsum dolor.",
    "msg 4: Lorem, ipsum dolor.",
    "msg 5: Lorem, ipsum dolor."
];

const m = '<div class="toast">';

function getRandInd(){
    return Math.floor(Math.random()*messages.length);
}

function getNotification(){
    const ind = getRandInd();
    $(".toast-container").append(m+messages[ind]+"</div>");
    setTimeout(() => {
        $(".toast-container").children().first().remove();
    }, 4000);
}

$("#btn").click(getNotification);