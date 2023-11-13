var input = "";
var words = [];

function createChoices(words){
    var tagsEl = $(".choice");

    if(tagsEl.length === 0){
        const txt = `<div class="choice">${words[0]}</div>`;
        $(".choice-list").append(txt);
    }
    else{
        var i = 0;
        tagsEl.each((ind, word) => {
            word.textContent = words[i++];
        });
        
        if(i < words.length){
            const txt = `<div class="choice">${words[i]}</div>`;
            $(".choice-list").append(txt);
        }
    }
}

function randomPicker(tags){
    return tags[Math.floor(Math.random()*tags.length)];
}


function randomSelector(){
    var tarsEl = $(".choice");
    tarsEl.removeClass("blink final");
    const timePeriod = 100;
    const repetitions = 50;

    const repeater = setInterval(() => {
        const rand = randomPicker(tarsEl);

        rand.classList.add("blink");
        setTimeout(() => {
            rand.classList.remove("blink");
        }, timePeriod);

    }, timePeriod);

    setTimeout(() => {
        clearInterval(repeater);
        randomPicker(tarsEl).classList.add("blink", "final");
    } , timePeriod*repetitions+1);
}


$("textarea").keyup((e) => {
    input = e.target.value;

    if(e.keyCode === 13){
        setTimeout(() => {
            e.target.value = "";
            randomSelector();
        }, 15);
    }
    else{
        words = input.replaceAll(" ", "").split(",").filter(tag => tag.trim() !== '');
        // console.log(words);
        createChoices(words);
    }
});