const sounds = [
    'applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'
];

sounds.forEach(sound => {
    var btn = `<button class = "btn">${sound}</button>`;
    $(".container").append(btn);

    $(".container").children().last().click(() => {
        $("audio").trigger("pause");
        $(`.${sound}`).trigger('play');
    });
});