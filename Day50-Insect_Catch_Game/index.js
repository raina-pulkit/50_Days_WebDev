$("#start").click(() => {
    $(".screen.first").removeClass("active");
    $(".screen.first").addClass("leave");

    $(".screen.second").addClass("active");
});

$(".screen.second .insect-list .insect").click((e) => {
    const img = $(e.target).attr("src");
    $(".screen.second").removeClass("active");
    $(".screen.second").addClass("leave");
    $(".screen.third").addClass("active");

    playGame(img);
});

// Game logic

let i = 0;
function updateTime(){
    let sec = i%60;
    let min = Math.floor(i/60);

    if(sec < 10)
        sec = `0${sec}`;
    else
        sec = `${sec}`;

    if(min < 10){
        min = `0${min}`;
    }
    else{
        min = `${min}`;
    }

    $(".time").text(`Time: ${min}:${sec}`);
    i++;
    setTimeout(updateTime, 1000);
}

var score = 0;

function playGame(img_src){
    i = 0;
    updateTime();

    for(let x = 0; x<Math.ceil((score+1)/3); x++){
        const x = randX();
        const y = randY();
        const data = `<div class="insect" style = "top: ${x}px; left: ${y}px; transform: rotate(${Math.floor(Math.random()*360)}deg);"><img src="${img_src}"></div>`;

        const curr = $(".screen.third").append(data);
    }
    
    $(document).on('click', ".screen.third .insect", (e) => {
        $(e.target).remove();
        console.log(e);
        score++;
        updateScore();
        for(let x = 0; x<Math.ceil((score+1)/3); x++){
            addRandomInsect(img_src);
        }
    });
}

function updateScore(){
    $(".score").text(`Score: ${score}`);
    if(score === 10){
        $('.message').removeClass("hidden");
    }
}

function addRandomInsect(img_src){
    const x = randX();
    const y = randY();
    const data = `<div class="insect" style = "top: ${x}px; left: ${y}px; transform: rotate(${Math.floor(Math.random()*360)}deg);"><img src="${img_src}" alt=""></div>`;

    const curr = $(".screen.third").append(data);
    // curr.on('click', (e) => {
    //     $(e.target).remove();
    //     console.log(e);
    //     score++;
    //     updateScore();
    //     for(let x = 0; x<score+1; x++){
    //         addRandomInsect(img_src);
    //     }
    // });
}

let randY = () => {
    return 50 + Math.floor(Math.random()*($(".screen")[0].clientWidth-100));
};

let randX = () => {
    return 50 + Math.floor(Math.random()*($(".screen")[0].clientHeight-100));
};
