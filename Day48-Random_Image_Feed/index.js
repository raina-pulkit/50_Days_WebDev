let i = 144;

function createImage(){
    //We add the sign at the end, so that every element is unique and not the same
    const data = `<div class="image" style="background: url('https://source.unsplash.com/random?sig=${i}') center center / cover no-repeat"></div>`
    $(".container").append(data);
    i--;
}

while(i !== 0){
    createImage();
}