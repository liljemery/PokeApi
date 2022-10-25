//Entrada de texto del usuario
async function searchPokemon() {
    //Recurso de contenedor para utilizar mas tarde
    let element = document.getElementById("PokemonContainer");
    //Sacar input del usuario
        let userInput= document.getElementById("valorForm").value;
    //Recurso para crear URL para conectar con la API
        function createURL(a){
            return `https://pokeapi.co/api/v2/pokemon/${a}`
        }
    //Conectar con la API
        let response = await fetch(`${createURL(userInput)}`);
        let pokemon = await  response.json();

    //======================================================================//
    //Sacar informacion de la API
        //Nombre, nivel y foto sacadas de la API
            let pokemonNameAPI = pokemon["name"];
            let pokemonImgAPI = pokemon["sprites"]["front_default"];
            let pokemonXPAPI = pokemon["base_experience"];
        //Stats sacadas de la API
            let pokemonHPAPI = pokemon["stats"][0]["base_stat"];
            let pokemonADAPI = pokemon["stats"][1]["base_stat"];
            let pokemonDFAPI = pokemon["stats"][2]["base_stat"];
            let pokemonSPAPI = pokemon["stats"][5]["base_stat"];
        //Habilidades sacadas de la API
            //Habilidad Uno
                let ability1 = pokemon["abilities"][0]["ability"]["name"];
                let ability1URL = pokemon["abilities"][0]["ability"]["url"];
            //Habilidad Dos
                let ability2 = pokemon["abilities"][1]["ability"]["name"];
                let ability2URL = pokemon["abilities"][1]["ability"]["url"];
    //======================================================================//

    //Prueba de codigo para saber si los valores son correctos.

         //Nombre, nivel y foto
            console.log(pokemonNameAPI)
            console.log(pokemonImgAPI)
            console.log(pokemonXPAPI)
        //Stats
            console.log(pokemonHPAPI)
            console.log(pokemonADAPI)
            console.log(pokemonDFAPI)
            console.log(pokemonSPAPI)
        //Habilidades
            //1
                console.log(ability1)
                console.log(ability1URL)
            //2
                console.log(ability2)
                console.log(ability2URL);

    //======================================================================//
    //Declaracion de valores del DOM
        //Nombre, nivel y foto
            let pokemonNombreDOM = document.getElementById("pokemonNombre");
            let pokemonImagenDOM = document.getElementById("pokemonImagen");
            let pokemonNivelDOM = document.getElementById("pokemonNivel");
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
        //Nombre, nivel y foto
            pokemonNombreDOM.innerHTML = `${[pokemonNameAPI]}`
            pokemonImagenDOM.src = `${[pokemonImgAPI]}`
            pokemonNivelDOM.innerHTML = `${pokemonXPAPI}`;
        //Stats
            Stat1DOM.innerHTML = `${pokemonHPAPI}`;
            Stat2DOM.innerHTML = `${pokemonADAPI}`;
            Stat3DOM.innerHTML = `${pokemonDFAPI}`;
            Stat4DOM.innerHTML = `${pokemonSPAPI}`;
        //Habilidades
            //1
                ability1DOM.innerHTML = `${ability1}`;
                ability1DOM.href = `${ability1URL}`;
            //2
                ability2DOM.innerHTML = `${ability2}`;
                ability2DOM.href = `${ability2URL}`;
    //======================================================================//

//Aparecer contenedor
element.classList.remove("invisible");
}   
