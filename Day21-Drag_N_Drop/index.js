

function dragStart(){
    // $(this).addClass("hovered");
    $(this).addClass("hold");
}

function dragEnd(){
    $(this).removeClass("hold");
}

function dragOver(e){
    e.preventDefault();   //Prevents immediate rejection of user as previous target
    $(this).addClass("hovered");
}

function dragEnter(e){
    e.preventDefault();
    $(this).addClass("hovered");
}

function dragLeave(){
    $(this).removeClass("hovered");
}

function drop(){
    $(this).removeClass("hovered");
    $(".box > *").removeClass("image");
    $($(this).children().get(0)).addClass("image");
}

function helper(){
    $(".box").each((ind, elem) => {
        if(!elem.children[0].classList.contains('image')){
            $(elem).on('dragover', dragOver);
            $(elem).on('dragenter', dragEnter);
            $(elem).on('dragleave', dragLeave);
            $(elem).on('drop', drop);
        }
    });
}

$(".image").on('dragstart', helper);
$(".image").on('dragend', helper);
