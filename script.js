//Entrada de texto del usuario
async function searchPokemon() {

    //Sacar input del usuario
    let userInput= document.getElementById("valorForm").value;


    //Recurso para crear URL para conectar con la API
    function createURL(a){
        return `https://pokeapi.co/api/v2/pokemon/${a}`
    }
    //Prueba de codigo
    // console.log(createURL(userInput))

    // Conectar con la API
    let response = await fetch(`${createURL(userInput)}`);
    let pokemon = await  response.json();

    //Nombre y foto sacadas de la API
    let pokemonName = pokemon["name"];
    let pokemonImg = pokemon["sprites"]["front_default"];

    //Stats sacadas de la API
    let pokemonXP = pokemon["base_experience"]


    //Habilidades sacadas de la API

            //Value


    //Probar que los valores sean validos
    console.log(pokemonName)
    console.log(pokemonImg)
    console.log(pokemonXP)
    //Aparecer contenedor
    let element = document.getElementById("PokemonContainer");
    element.classList.remove("invisible");
}
