const triggerPoint = 4*(window.innerHeight)/5;

const boxes = $('.box');

boxes.each((box) => {
    if(boxes[box].getBoundingClientRect().top < triggerPoint){
        console.log(boxes[box].classList[1]);
        $(".box." + boxes[box].classList[1]).addClass("active");
    }
});

$(document).scroll((e)=>{
    boxes.each((box) => {
            if(boxes[box].getBoundingClientRect().top < triggerPoint){
                console.log(boxes[box].classList[1]);
                $(".box." + boxes[box].classList[1]).addClass("active");
            }
            if(boxes[box].getBoundingClientRect().top > triggerPoint){
                $(".box." + boxes[box].classList[1]).removeClass("active");
            }
    });
});

