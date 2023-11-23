$(".panel-container").click((e) => {
    if(e.target.classList.contains("rating")){
        $(".rating").removeClass("active");
        $(e.target).addClass("active");
    }
});


$(".submit").click(() => {
    $(".panel-container").addClass("hide");
    $(".panel-container").on("animationend", () => {
        $(".thank-you").addClass("show");
    });
});