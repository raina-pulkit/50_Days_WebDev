const gitURL = "https://api.github.com/users/";
const imgURL = '<a href="#"><img src="https://randomuser.me/api/portraits/men/75.jpg" alt=""/></a>';
const repoURL = 'https://api.github.com/users/';


// fetch(gitURL+"raina-pulkit").then(res => res.json()).then(res => console.log(res));
// fetch(repoURL+"raina-pulkit/repos").then(res => res.json()).then(res => console.log(res));


function createCard(username, userDetails, repoNames){
    const repoCount = Math.min(repoNames.length, 5);
    var data = `
    <div class = "container">
        <div class="card">
            <div class="image">
                <a href="${userDetails.html_url}"><img src="${userDetails.avatar_url}" alt=""/></a>
            </div>

            <div class="user-info">
                <h2>${username}</h2>`;
    
    if(userDetails.bio !== null)
        data += `<p>${userDetails.bio}</p>`;
    else
        data += `<p>&nbsp;</p>`;
    data += `<ul>
                    <li>${userDetails.followers} <br/><span class="desc">Followers</span></li>
                    <li>${userDetails.following} <br/><span class="desc">Following</span></li>
                    <li>${userDetails.public_repos} <br/><span class="desc">Repositories</span></li>
                </ul>

                <div class="repos">
    `;

    for(let i = 0; i<repoCount; i++){
        data += `<a href="${repoNames[i].html_url}" class="repos">${repoNames[i].name}</a>`;
    }
    data += `</div>
        </div>
        </div>
        </div>`;
    $(".main-container").append(data);
}

function createErrorCard(){
    const data = `<div class="container">
    <div class="card">
        <div class="user-info">
            USER NOT FOUND
        </div>
    </div>
</div>`;
    $(".main-container").append(data);
}

async function fetchDetails(username){
    try {
        let x = await fetch(gitURL + username);
        if(!x.ok)
            throw new Error("User Not Found");
        const y = await fetch(repoURL + `${username}/repos`);
        if(!y.ok)
            throw new Error("User Not Found");
        createCard(username, await x.json(), await y.json());
    }catch(error){
        createErrorCard();
    }
}

$("form").submit((e) => {
    $(".container").remove();
    fetchDetails(e.target[0].value);
    e.target[0].value = "";
});
// fetchDetails("raina-pulkit");