$("button").click((e) => {
    $(e.currentTarget.offsetParent).toggleClass("active-question");
});