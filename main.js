const gameStart = () =>{
    //the main game function (the last do while loop) has been commented out so that we don't enter the game. Uncomment it to play the game.

let gameStart = prompt("Your new pokemon is ready to be with you. Please type in your pokemon's name.")

let pokemon = {
  name: gameStart,
  satiety: 5,
  battleXP: 0,
  happiness: 5,
  status: "alive",
}

const named = () => {
  alert(`${pokemon.name} is now standing next to you and is waiting further action.`)
}

named();

let understood;

const instructions = () => {
  understood = prompt(`The game to keep ${pokemon.name} alive and to evolve it is about to start.
You can do the following with your pokemon: feed, battle, or chill.
The goal of the game is to get your pokemon up to 30 battleXP by making your pokemon battle. However fighting decreases satiety and happiness, and chilling decreases satiety while increasing happiness.
The key to the game is to avoid your pokemon's satiety or happiness to reach zero while racking up battleXP through battles. But be aware that your pokemon could also die from battling. If you've understood everything then please type yes.`)
  
  return understood
}

do {
instructions() 
}
while (understood != "yes")
  
  
const gameOver = () => {
  if (pokemon.status != "alive"){
    alert("Game over")
  }  
}

const gameWon = () =>{
  alert(`${pokemon.name} has reached 30 battleXP and has evolved and become independent! Congratulations you've won!`)
}

const feed = () => {
  if (pokemon.satiety < 10 && Math.random() > 0.2){
  pokemon.satiety = pokemon.satiety +1
    alert(`You have fed ${pokemon.name}`)
  }
  else{
    pokemon.satiety = pokemon.satiety -1
    alert(`${pokemon.name} has been poisoned!`)
    if(pokemon.satiety == 0){
      pokemon.status = "dead"
      alert(`${pokemon.name} has died from starvation`)
      gameOver()
    }
  }
}

const battle = () => {
  if (pokemon.battleXP < 30 && Math.random() > 0.15){
  pokemon.battleXP = pokemon.battleXP +1
   pokemon.satiety = pokemon.satiety -1
     pokemon.happiness = pokemon.happiness -1
    alert("You had a poke battle")
    if(pokemon.happiness == 0){
      pokemon.status = "dead"
      alert(`${pokemon.name} has died because it was miserable`)
      gameOver()
    }else if (pokemon.satiety == 0){
      pokemon.status = "dead"
      alert(`${pokemon.name} has died from starvation`)
      gameOver()
    }
  }
  else{alert(`${pokemon.name} has died`)
       pokemon.status = "dead"
       gameOver();

  }
}
const chill = () => {
  if (pokemon.happiness < 10 && Math.random() > 0.1){
  pokemon.happiness = pokemon.happiness +1
    pokemon.satiety = pokemon.satiety -1
    if(pokemon.satiety == 0){
      pokemon.status = "dead"
      alert(`${pokemon.name} has died from starvation`)
      gameOver()
    }
    alert(`You have had an enjoyable and relaxing time with ${pokemon.name}`)
  }
  else{
    pokemon.happiness = pokemon.happiness -1
    alert(`You have upset ${pokemon.name}`)
    if(pokemon.happiness == 0){
      pokemon.status = "dead"
      alert(`${pokemon.name} has died because it was miserable`)
      gameOver()
    }
  }
}

let request

const prompter = () => {
if (pokemon.status == "alive"){
  return request = prompt("Please type your action: feed, battle or chill.")
}
}

const actions = () => {
 if (request == "feed") {feed()} 
  else  if (request == "battle") {battle()}
  else  if (request == "chill") {chill()} 
  
}
  
  
do {
  prompter()
  actions()
  if (pokemon.satiety == 10 && pokemon.status == "alive"){
    alert(`${pokemon.name} is full`)
  }
  else if(pokemon.satiety < 3 && pokemon.status == "alive"){
    alert(`${pokemon.name} is hungry. You need to feed it!`)
  }
  else if (pokemon.battleXP == 5 || pokemon.battleXP == 10 || pokemon.battleXP == 15 || pokemon.battleXP == 20 || pokemon.battleXP == 25 && pokemon.status == "alive"){
    alert(`BattleXP is ${pokemon.battleXP}`)
  }
  else if(pokemon.battleXP == 30){gameWon()}
  else if(pokemon.happiness < 3 && pokemon.status == "alive"){
    alert(`${pokemon.name} is miserable. You need to chill!`)
  }
}


while (pokemon.status == "alive" && pokemon.battleXP < 30)


}

// const gameStop = () => {
//     document.location.reload()
// }

// window.addEventListener("keydown", ()=>{
//     if(event.which == "81"){
//         gameStop()
//     }
// })