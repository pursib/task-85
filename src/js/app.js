import "../scss/app.scss";
import 'regenerator-runtime/runtime';

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  let api_url = "https://pokeapi.co/api/v2/pokemon?limit=10";
  
async function getData () {
  const ul = document.querySelector("ul");
  const response = await fetch(api_url);
  const data = await response.json();
  let pokemons = data.results;
  pokemons.forEach(pokemon => {
    let li = document.createElement('li');
    ul.appendChild(li);

  });
let liArr = document.querySelectorAll('li');
for(let i = 0 ; i < 10; i++){
  let pokemon = pokemons[i];
  let li = liArr[i];
  li.innerText = pokemon.name;
}
}

getData();

 
});
