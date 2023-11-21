const colors = [
    '#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'
];

const squares = 900;

for(let i = 0; i<squares; i++){
    const elem = $(".container").append(`<div class="square"></div>`);
}

$(".square").on("mouseover", (e) => {
    $($(e.target)[0]).css({
        "background": `${colors[Math.floor(Math.random()*5)]}`,
        "box-shadow": `0 0 5px ${colors[Math.floor(Math.random()*5)]}`
    });
});

$(".square").on("mouseout", (e) => {
    $($(e.target)[0]).css({
        "background": `black`,
        "box-shadow": `0 0 5px black`
    });
});

