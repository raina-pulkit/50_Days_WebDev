

$("#range").on("input", (e) => {
    const val = +e.target.value;

    // console.log(getComputedStyle(e.target).getPropertyValue("width"));
    // All this can be computed outside for once to avoid recalculation again adn again
    const range_width = +getComputedStyle(e.target).getPropertyValue("width").slice(0,-2);
    const label_width = +getComputedStyle(e.target.nextElementSibling).getPropertyValue("width").slice(0,-2);
    const max = +e.target.max;
    const min = +e.target.min;

    const leftOffset = (range_width/max)*val - label_width/2;

    $(e.target.nextElementSibling).css({
        "left": `${leftOffset+15}px`
    });


    $(e.target.nextElementSibling).text(val);
});