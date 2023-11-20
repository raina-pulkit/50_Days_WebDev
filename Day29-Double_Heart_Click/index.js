var count = 0;

$(".container p span.count-likes").text(count);

$(".image-liked").dblclick((e) => {
    count++;
    $(".container p span.count-likes").text(count);

    $(".image-liked").append(`<div class="heart fa-solid fa-heart active" style="top: ${e.clientY - e.target.offsetTop}px; left: ${e.clientX - e.target.offsetLeft}px;"></div>`);

    setTimeout(() => {
        $(".image-liked").children().first().remove();
    }, 2000);
});