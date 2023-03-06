let randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber)

do{
var  guessed = prompt("Guess a number?")
  guessed = Number.parseInt(guessed)
  if(guessed<randomNumber){
    console.log("try some greater number")
  }else if(guessed>randomNumber){
    console.log("try some little number")
  }
  else
  {
    console.log("You got it")
  }

}while(randomNumber!=guessed);
