const url = "https://randomuser.me/api/";
const head = {
    "results": 20
}

async function getData(){
    const res = await fetch(url + `?results=150`);
    const data = await res.json();

    //We can do this or above we could have done const {results} = await res.json(); directly
    return data.results;
}

function createSingleItem(user){
    const data = `
        <li class="user">
            <img src="${user.picture.medium}">
            <div class="user-info">
                <h4>${user.name.title} ${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        </li>
    `;

    $(".user-list").append(data);
}

async function createCards(){
    const data = await getData();
    for(let i = 0; i<data.length; i++){
        createSingleItem(data[i]);
    }
}

createCards();

function filter(search){
    search = search.toLowerCase();
    $("li").each((ind, item) => {
        if($(item)[0].innerText.toLowerCase().includes(search)){
            $(item).removeClass("hidden");
        }
        else{
            $(item).addClass("hidden");
        }
        
    });
}


$("#search").on("input", (e) => {
    filter(e.target.value)
});