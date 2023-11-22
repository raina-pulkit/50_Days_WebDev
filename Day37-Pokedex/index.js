const url = "https://pokeapi.co/api/v2/pokemon/";
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}
let elem = `<div class="poke-container">
<div class="pokemon">
    <div class="img-container">
        <img src="https://imgs.search.brave.com/NcfW_hlXenWcWIc9dwZxFjbZ121dvMWez0SNpUczXNo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcG9rZW1vbi9z/bWFsbC9wb2tlbW9u/X1BORzk2LnBuZw">
    </div>

    <div class="info">
        <span class="number">#001</span>
        <h3 class="name">FireBall</h3>
        <small class="type">Type: <span>grass</span></small>
    </div>
</div>
</div>`;

const fetchPokemon = async () => {
    for(let i = 1; i<=100; i++){
        await getPokemon(i);
    }
};

const getPokemon = async (id) => {
    const link = `${url}${id}`;
    const res = await fetch(link);
    const data = await res.json();
    createCard(data);
};

const createCard = (data) => {
    let id = data.id;

    if(id < 10){
        id = `#00${id}`;
    }
    else if(id<100){
        id = `#0${id}`;
    }
    else{
        id = `#${id}`;
    }

    $(".poke-container").append(
        `<div class="pokemon" style = "background-color: ${colors[data.types[0].type.name]}">
            <div class="img-container">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png">
            </div>

            <div class="info">
                <span class="number">${id}</span>
                <h3 class="name">${data.name[0].toUpperCase() + data.name.slice(1)}</h3>
                <small class="type">Type: <span>${data.types[0].type.name}</span></small>
            </div>
        </div>`
    );
};

fetchPokemon();

// fetch(url).then(res => res.json()).then(res => console.log(res))