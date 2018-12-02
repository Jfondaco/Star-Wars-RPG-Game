// Declaring character variables
var pokemon = {

    pikachu: {
    name = "Pikachu",
    health: 130,
    attackPower: 0,
    counterAttack: 15,
    },

    squirtle: {
        name = "Squirtle",
        health: 110,
        attackPower: 0,
        counterAttack: 20
    },

    bulbasaur: {
        name = "Bulbasaur",
        health: 180,
        attackPower: 0,
        counterAttack: 10
    },

    charmander: {
        name = "Charmander",
        health: 150,
        attackPower:0,
        counterAttack: 25,
    }

};

// game over var
var gameOver = false;

// picked character and defender vars
var pokemonChosen = false;
var defenderChosen = false;

var pokemon = {}
var defender = {}

//function to reset game
function resetGame(){
    $("#pikachu").children(".health").html(pokemon.pikachu.health);
    $("#squirtle").children(".health").html(pokemon.squirtle.health);
    $("#bulbasaur").children(".health").html(pokemon.bulbasaur.health);
    $("#charmander").children(".health").html(pokemon.charmander.health);
    $(".character-image").removeClass("your-pokemon enemy-pokemon defending-pokemon").addClass("available-pokemon");
    var available = $(".available-pokemon").show();
    $("#pokemon-available").html(available);

    pokemonSelected = false;
     defenderSelected = false;
     enemiesDefeated = 0;
     gameOver = false;

    pokemon={}

    gameOver = false;

}
//functions for pokemon
function putCharacter (pickedCharacter){
    pokemon.name = pickedCharacter.name;
    pokemon.health = pickedCharacter.health;
    pokemon.attackPower = pickedCharacter.attackPower;
    pokemon.counterAttack = pickedCharacter.counterAttack;
}

function putDefender (pickedDefender){
    pokemon.name = pickedDefender.name;
    pokemon.health = pickedDefender.health;
    pokemon.attackPower = pickedDefender.attackPower;
    pokemon.counterAttack = pickedCharacter.counterAttack;
}

//ready to not load game until everything else is loaded
//need on click function for picking pokemon (main game function)
$(document).ready(function(){

    //on click function for pikachu if no attacker sets attacker if attacker true set as defender
    // going to need one for each character
    $("#pikachu").on("click", function () {
    
        if(pokemonSelected === false) {  
            putCharacter(characters.pikachu);
            pokemonSelected = true;
            $("#pikachu").removeClass("available-pokemon").addClass("your-pokemon");
            $("#your-pokemon").append(this);
            // not sure if click functions aren't working because im using this incorrectly ??? :(
            moveToEnemies();
    
        } else if ((pokemonSelected === true) && (defenderSelected === false)) {

          if($("#pikachu").hasClass("enemy-pokemon")) {
            putDefender(characters.pikachu);
            defenderSelected = true;
            $("#pikachu").removeClass("enemy-pokemon").addClass("defending-pokemon");
            $("#defender-div").append(this);
          }
        }
      });

      //charmander
      $("#charmander").on("click", function () {
    
        if(pokemonSelected === false) {  
            putCharacter(characters.charmander);
            pokemonSelected = true;
            $("#charmander").removeClass("available-pokemon").addClass("your-pokemon");
            $("#your-pokemon").append(this);
            moveToEnemies();
    
        } else if ((pokemonSelected === true) && (defenderSelected === false)) {

          if($("#charmander").hasClass("enemy-pokemon")) {
            putDefender(characters.charmander);
            defenderSelected = true;
            $("#charmander").removeClass("enemy-pokemon").addClass("defending-pokemon");
            $("#defender-div").append(this);
          }
        }
      });

      //squirtle click
      $("#squirtle").on("click", function () {
    
        if(pokemonSelected === false) {  
            putCharacter(characters.squirtle);
            pokemonSelected = true;
            $("#squirtle").removeClass("available-pokemon").addClass("your-pokemon");
            $("#your-pokemon").append(this);
            moveToEnemies();
    
        } else if ((pokemonSelected === true) && (defenderSelected === false)) {

          if($("#squirtle").hasClass("enemy-pokemon")) {
            putDefender(characters.squirtle);
            defenderSelected = true;
            $("#squirtle").removeClass("enemy-pokemon").addClass("defending-pokemon");
            $("#defender-div").append(this);
          }
        }
      });

      //bulbasaur click
      $("#bulbasaur").on("click", function () {
    
        if(pokemonSelected === false) {  
            putCharacter(characters.bulbasaur);
            pokemonSelected = true;
            $("#bulbasaur").removeClass("available-pokemon").addClass("your-pokemon");
            $("#your-pokemon").append(this);
            moveToEnemies();
    
        } else if ((pokemonSelected === true) && (defenderSelected === false)) {

          if($("#bulbasaur").hasClass("enemy-pokemon")) {
            putDefender(characters.bulbasaur);
            defenderSelected = true;
            $("#bulbasaur").removeClass("enemy-pokemon").addClass("defending-pokemon");
            $("#defender-div").append(this);
          }
        }
      });
}) //end ready function

//function to move pokemon that aren't picked into the enemies section
function moveToEnemies() {
    $(".available-pokemon").removeClass("available-pokemon").addClass("enemy-pokemon");
    $("#enemies-div").append($(".enemy-pokemon"));
  }

  // still need the actual attack function, but right now I cant get myclick functions to work :/

