//Entrada de texto del usuario
async function searchPokemon() {
    //Declarar codigo en el DOM
    let element = document.getElementById("PokemonContainer");
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
        let pokemonNameAPI = pokemon["name"];
        let pokemonImgAPI = pokemon["sprites"]["front_default"];

    //Stats sacadas de la API
        let pokemonXPAPI = pokemon["base_experience"];


    //Habilidades sacadas de la API

            //Value


    //Probar que los valores sean validos
        console.log(pokemonNameAPI)
        console.log(pokemonImgAPI)
        console.log(pokemonXPAPI)

    //======================================================================//
    //Declaracion de valores del DOM
        //Nombre y foto
            let pokemonNombreDOM = document.getElementById("pokemonNombre");
            let pokemonimagenDOM = document.getElementById("pokemonImagen");
        //Stats
            let Stat1DOM = document.getElementById("statUno");
            let Stat2DOM = document.getElementById("statDos");
            let Stat3DOM = document.getElementById("statTres");
            let Stat4DOM = document.getElementById("statCuatro");
        //Habilidades 
            let ability1DOM = document.getElementById("habilidadUno");
            let ability2DOM = document.getElementById("habilidadDos");
    //======================================================================//

    //Cambio de valores en el DOM
        //Nombre y foto
            pokemonNombreDOM.innerHTML = `${[pokemonNameAPI]}`
            pokemonimagenDOM.src = `${[pokemonImgAPI]}`
        //Stats

        //Habilidades

//Aparecer contenedor
element.classList.remove("invisible");
}   
