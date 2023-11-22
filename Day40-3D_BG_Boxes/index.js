const rows = 4;
const cols = 4;

for(let i = 0; i<rows; i++){
    for(let j = 0; j<cols; j++){
        const data = `<div class="box" style = "background-position: ${10 - 130*j}px ${10 - 130*i}px"></div>`;
        $(".boxes-container").append(data);
    }
}

$("#btn").click(() => {
    $(".boxes-container").toggleClass("big");
});