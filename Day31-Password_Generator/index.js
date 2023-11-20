function randNumbers(){
    return Math.floor(Math.random()*10);
}

function randLower(){
    return `${String.fromCharCode(97+(Math.floor(Math.random()*26)))}`;
}

function randUpper(){
    return `${String.fromCharCode(64+(Math.floor(Math.random()*26)))}`;
}

const symbols = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_'];
function randSymbols(){
    return symbols[Math.floor(Math.random()*symbols.length)];
}

function randomComb(len, uc, lc, num, sym){
    let options = [];
    if(uc === true)
        options.push(randUpper);
    if(lc === true)
        options.push(randLower);
    if(num === true)
        options.push(randNumbers);
    if(sym === true)
        options.push(randSymbols);

    let s = "";

    for(let i = 0; i<len; i++){
        s += options[Math.floor(Math.random()*options.length)]();
    }
    
    console.log(s);
    return s;
}

function generatePassword(){
    const len = $("#number")[0].value;
    const uc = $("#uc")[0].checked;
    const lc = $("#lc")[0].checked;
    const num = $("#num")[0].checked;
    const sym = $("#sym")[0].checked;

    if((uc || lc || num || sym) === false){
        alert("Atleast one checkbox to be checked!");
    }
    else{
        let ans = randomComb(len, uc, lc, num, sym);
        console.log(ans);

        $("#password")[0].value = ans;
    }
}


$(".generate").click(generatePassword);

$("i").click((e) => {
    navigator.clipboard.writeText($("#password")[0].value);
});