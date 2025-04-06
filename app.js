let maxNo = prompt("enter the number");
let randomNo = Math.floor(Math.random()*maxNo)+1
let guess = prompt("enter your guess no");
while(true){
    if(guess == "quit"){
      console.log("user quit");
      break;
    }
    else if(guess == randomNo){
      console.log(`congrats! random no is ${randomNo}`);
      break;
    }
    else if(guess < randomNo){
      guess = prompt("try next time you num to small");
    }
    else if(guess > randomNo){
      guess = prompt("try again your no large");
    }
  
}