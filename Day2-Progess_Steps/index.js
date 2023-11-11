var currProgress = 1;


$('#next').click(() =>{
    currProgress++;
    if(currProgress > $(".circle").length)
        currProgress = $(".circle").length;

    updateAdd();;
});

$('#prev').click(() =>{
    currProgress--;
    if(currProgress < 1)
        currProgress = 1;

    updateRemove();
});

function updateAdd(){
    $("#prev").attr("disabled", false);
    console.log(currProgress);
    $(`.circle:nth-of-type(${currProgress+1})`).addClass('active');
    $(`.progress-line`).css({width: `${((currProgress-1)/($(".circle").length - 1))*100}%`});

    if(currProgress == 4)
        $("#next").attr("disabled", true);
}

function updateRemove(){
    $("#next").attr("disabled", false);
    console.log(currProgress);
    $(`.circle:nth-of-type(${currProgress+2})`).removeClass('active');
    $(`.progress-line`).css({width: `${((currProgress-1)/($(".circle").length - 1))*100}%`});

    if(currProgress == 1) $("#prev").attr("disabled", true);
}

