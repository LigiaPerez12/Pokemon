console.log("FUNCIONES");

function Pokemon (nombre)
{
    this.nombre=nombre;
    this.ataque=50;
    this.vida=200;
    this.atacar=function(pokemonObjetivo)
    {
        if(pokemonObjetivo.vida<=0){
            console.error("Pokemon-MURIO");
            alert("Pokemon "+pokemonObjetivo.nombre+" ha muerto");
        }
        else{
            pokemonObjetivo.vida-=50;
            this.vida +=50;
            this.mostrarInfo(pokemonObjetivo)
        }
    }
    this.mostrarInfo = function(pokemonObjetivo){
        console.log(pokemonObjetivo);
        console.log(this)
    }
}

var pokemon_1="";
var pokemon_2="";

function crearPokemons(){
    pokemon_1= document.getElementById("name").value;
    pokemon_2= document.getElementById("name2").value;
}

var pokemon1 = new Pokemon(pokemon_1);
var pokemon2 = new Pokemon(pokemon_2);

function atackPokemon(){
    pokemon1.atacar(pokemon2);
    document.formulario.nomPokemon1.value=pokemon_1;
    document.formulario.nomPokemon2.value=pokemon_2;
    document.formulario.vidaPokemon1.value=pokemon1.vida;
    document.formulario.vidaPokemon2.value=pokemon2.vida;    
}
