$(".circle button").click(() => {
    $(".container").toggleClass("show-nav");

    // console.log($(".container")[0].classList.contains("show-nav"));

    console.log($(".container")[0].classList.contains("show-nav"));

    if($(".container")[0].classList.contains("show-nav"))
        $(".circle-container").css({"transform": "translate(-50%, -50%) rotate(-90deg)"});
    else
        $(".circle-container").css({"transform": "translate(-50%, -50%)"});


});