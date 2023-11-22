const imgs = {
    "Home" : 0,
    "Box" : 1,
    "Blog" : 2,
    "About Us" : 3
};

$("ul li").click((e) => {
    $("img").removeClass("show");
    $("ul li").removeClass("click");

    $(e.currentTarget).addClass("click");

    $($("img")[imgs[e.currentTarget.innerText]]).addClass("show");
});