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
    //Aparecer contenedor
        let element = document.getElementById("PokemonContainer");
        element.classList.remove("invisible");
    //Declaracion de valores del DOM
        //Nombre y foto
            let pokemonNombreDOM = document.getElementById("pokemonNombre");
            let pokemonimagenDOM = document.getElementById("pokemonImagen");
        //Stats sacadas de la API
            let Stat1DOM = document.getElementById("statUno");
            let Stat2DOM = document.getElementById("statDos");
            let Stat3DOM = document.getElementById("statTres");
            let Stat4DOM = document.getElementById("statCuatro");
        //Habilidades sacadas de la API



    //Cambio de valores en el DOM
        //Nombre y foto
            pokemonNombreDOM.innerHTML = `${[pokemonNameAPI]}`
            pokemonimagenDOM.src = `${[pokemonImgAPI]}`
        //Stats sacadas de la API

        //Habilidades sacadas de la API


}   
