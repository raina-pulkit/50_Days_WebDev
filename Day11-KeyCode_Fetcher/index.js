var first = true;

$(document).keypress((e) => {
    if(first){
        $(".info").removeClass("not-active");
        $(".intro").addClass("bring-down");
        first = false;
    }
    console.log(e);
    if(e.key !== " ")
        $(".key .answer").text(`${e.key}`);
    else
    $(".key .answer").text(`Space`)
    $(".keycode .answer").text(`${e.keyCode}`);
    $(".code .answer").text(`${e.code}`);
});