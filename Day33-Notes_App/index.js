

function addNewNote(text = ''){
    const data = `
    <div class="note">
        <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="${text ? "" : "hidden"}"></div>
        <textarea name="note" class = "${text ? "hidden" : ""}"></textarea>
    </div>
    `;
    $(".container").append(data);
}

$("#add").click(() => {
    addNewNote();
});

function helper(){
    console.log($(".delete"));
}

$(document).on('click', '.edit', function(){
    console.log($($($($(this)[0].parentElement)[0].nextElementSibling)[0].nextSibling));
});