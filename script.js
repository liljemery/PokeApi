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
async function searchPokemon() {
    //Recurso de contenedor para utilizar mas tarde
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
    //Guardar informacion de la API en la sesion Local
        //Nombre, nivel y foto sacadas de la API
            localStorage.setItem("NameFromAPI",pokemonNameAPI);
            localStorage.setItem("ImgFromAPI",pokemonImgAPI);
            localStorage.setItem("XPFromAPI",pokemonXPAPI);
        //Stats sacadas de la API
            localStorage.setItem("HPFromAPI",pokemonHPAPI);
            localStorage.setItem("ADFromAPI",pokemonADAPI);
            localStorage.setItem("DFFromAPI",pokemonDFAPI);
            localStorage.setItem("SPFromAPI",pokemonSPAPI);
        //Habilidades sacadas de la API
             //Habilidad Uno
                localStorage.setItem("ability1",ability1);
                localStorage.setItem("ability1URL",ability1URL);
             //Habilidad Uno
                localStorage.setItem("ability2",ability2);
                localStorage.setItem("ability2URL",ability2URL);
    //Retorno de valores a almacenar luego que se complete la busqueda
            return pokemonNombreDOM.innerHTML = `${localStorage.getItem("NameFromAPI")}`,
            pokemonImagenDOM.src = `${localStorage.getItem("ImgFromAPI")}`,
            pokemonNivelDOM.innerHTML = `${localStorage.getItem("XPFromAPI")}`,
            Stat1DOM.innerHTML = `${localStorage.getItem("HPFromAPI")}`,
            Stat2DOM.innerHTML = `${localStorage.getItem("ADFromAPI")}`,
            Stat3DOM.innerHTML = `${localStorage.getItem("DFFromAPI")}`,
            Stat4DOM.innerHTML = `${localStorage.getItem("SPFromAPI")}`,
            ability1DOM.innerHTML = `${localStorage.getItem("ability1")}`,
            ability1DOM.href = `${localStorage.getItem("ability1URL")}`,
            ability2DOM.innerHTML = `${localStorage.getItem("ability2")}`,
            ability2DOM.href = `${localStorage.getItem("ability2URL")}`;
            
}
    //Cambio de valores en el DOM
        //Nombre, nivel y foto
        pokemonNombreDOM.innerHTML = `${localStorage.getItem("NameFromAPI")}`
        pokemonImagenDOM.src = `${localStorage.getItem("ImgFromAPI")}`
        pokemonNivelDOM.innerHTML = `${localStorage.getItem("XPFromAPI")}`;
    //Stats
        Stat1DOM.innerHTML = `${localStorage.getItem("HPFromAPI")}`;
        Stat2DOM.innerHTML = `${localStorage.getItem("ADFromAPI")}`;
        Stat3DOM.innerHTML = `${localStorage.getItem("DFFromAPI")}`;
        Stat4DOM.innerHTML = `${localStorage.getItem("SPFromAPI")}`;
    //Habilidades
        //1
            ability1DOM.innerHTML = `${localStorage.getItem("ability1")}`;
            ability1DOM.href = `${localStorage.getItem("ability1URL")}`;
        //2
            ability2DOM.innerHTML = `${localStorage.getItem("ability2")}`;
            ability2DOM.href = `${localStorage.getItem("ability2URL")}`;
//======================================================================//