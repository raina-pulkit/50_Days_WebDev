const headers = {
    headers: {
        'Accept': 'application/json'
    }
};


//This works but it makes quite a dirty code as fetch is async function. It makes a promise everytime we call it and we need to tell it what to then after the prommise is fulfilled. So instead we use the await async method

// function nextJoke(){
//     fetch("https://icanhazdadjoke.com", headers).then(response => response.json()).then(data => {
//         $(".joke").text(data.joke);
//         console.log("sucess");
//     });
// }

// $("button.next").click(nextJoke);

async function nextJoke(){
    const resp = await fetch("https://icanhazdadjoke.com", headers);

    const data = await resp.json();   //Since .json() is also a promise maker
    $(".joke").text(data.joke);
}

$("button.next").click(nextJoke);