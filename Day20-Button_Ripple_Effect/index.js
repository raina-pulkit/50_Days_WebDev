const circle = '<span class="circle"></span>';

$("button").click((e) => {
    const x = e.offsetX;
    const y = e.offsetY;

    $("button").append(circle);
    $(".circle").css({
        "top": `${y}px`,
        "left": `${x}px`
    });
    setTimeout(() => $(".circle").remove(), 701)
});