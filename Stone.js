const computerChoiceDisplay = document.getElementById("computer-choosed");
const userChoiceDisplay = document.getElementById("user-choosed");
const userChoiceButtons = document.querySelectorAll('.user-btn');
let userChoice;
let computerChoice;
let count = 0;
let noOfTries = 10;
const startButton = document.getElementById("start");
let gameStatus;
let computerPoints =0;
let userPoints=0;
const finishedResult = document.getElementById('finished');
const tryAgain = document.getElementById('try-again');
startButton.addEventListener('click', (e)=>{
    
    document.getElementById("stone").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissor").disabled = false;
    document.getElementById("table-count").style.display = 'block';
    e.target.style.display = "none";
})
    
userChoiceButtons.forEach(userChoosed => userChoosed.addEventListener('click',function(e) {
count ++;
userChoice = e.target.value;
userChoiceDisplay.value = userChoice;
computerChoose();

if(count > noOfTries){
    document.getElementById("stone").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissor").disabled = true;
}

}))
function computerChoose(){
    let randomNumber = Math.floor(Math.random() * userChoiceButtons.length);
    if(randomNumber == 0){
        computerChoice = "Stone";
    }
    else if(randomNumber == 1){
        computerChoice = "Paper";
    }
    else{
        computerChoice = "Scissor";
    }
    computerChoiceDisplay.value = computerChoice;
    showResults();
}
function showResults(){
    
    if(userChoice == computerChoice){
        gameStatus = "It's a draw";
    }
    if(userChoice == "Stone" && computerChoice == "Paper" || userChoice =="Paper" && computerChoice == "Scissor" || userChoice == "Scissor" && computerChoice =="Stone"){
        gameStatus = "You loose";
    }
    if(userChoice == "Stone" && computerChoice == "Scissor" || userChoice =="Paper" && computerChoice == "Stone" || userChoice == "Scissor" && computerChoice == "Paper"){
        gameStatus = "You win";
    }
    
if(gameStatus == "It's a draw"){
    computerPoints++;
    userPoints++;
}
if(gameStatus == "You loose"){
    computerPoints++;
}
if(gameStatus == "You win"){
    userPoints++;
}
let gamePointsHeadings = "<tr><th>Computer Points</th><th>User Points</th><th>No of tries</th><th>Actions</th><th>Current result</th></tr>";
 let gamePoints = "<tr><td>"+computerPoints+"</td><td>"+userPoints+"</td><td>"+noOfTries+"</td><td><button id='increase-try' class='increase-try'>Increase Tries</button><button id='finish' class='finish'>Finish</button></td><td>"+gameStatus+"</td></tr>";
 document.getElementById("thead").innerHTML = gamePointsHeadings;
 document.getElementById("tbody").innerHTML += gamePoints;
 
const increase_Try = document.querySelectorAll(".increase-try");
increase_Try.forEach(increase => increase.addEventListener('click',() => {
    noOfTries ++;
    let gamePointsHeadings = "<tr><th>Computer Points</th><th>User Points</th><th>No of tries</th><th>Actions</th><th>Current result</th></tr>";
    let gamePoints = "<tr><td>"+computerPoints+"</td><td>"+userPoints+"</td><td>"+noOfTries+"</td><td><button class='increase-try'>Increase Tries</button><button class='finish' id='finish'>Finish</button></td><td>"+gameStatus+"</td></tr>";
 document.getElementById("thead").innerHTML = gamePointsHeadings;
 document.getElementById("tbody").innerHTML += gamePoints; 

 document.getElementById("stone").disabled = false;
 document.getElementById("paper").disabled = false;
 document.getElementById("scissor").disabled = false;
}));

let finishGame = document.querySelectorAll('.finish');
finishGame.forEach(finish => finish.addEventListener('click', () => {
    
    if(computerPoints == userPoints){
     finishedResult.value = "Match Draw";
    }
    if(computerPoints > userPoints){
        finishedResult.value = "You loose the Game";
    }
    if(computerPoints < userPoints){
        finishedResult.value = "You Win the Game";
    }
    finishedResult.style.display = "block";
    tryAgain.style.display = "block";
}));

//  const print = document.getElementById("print");
//  print.addEventListener('click', () => {
//      console.log("Hai");
//     const original = document.body.innerHTML;
    
    // document.body.innerHTML = "<html><head></head><body>Na mattum tha irukkena?</body></html>";
    // console.log(document.body.innerHTML);
    // window.print();
    // document.body.innerHTML = original;
    // console.log(document.body.innerHTML);
 //})
}
tryAgain.addEventListener('click',() => {
 document.getElementById("stone").disabled = false;
 document.getElementById("paper").disabled = false;
 document.getElementById("scissor").disabled = false;
 computerPoints = 0;
 userPoints = 0;
 count = 0;
computerChoiceDisplay.value = "";
userChoiceDisplay.value = "";
finishedResult.style.display = "none";
    tryAgain.style.display = "none";

 let gamePointsHeadings = "<tr><th>Computer Points</th><th>User Points</th><th>No of tries</th><th>Actions</th><th>Current result</th></tr>";
    let gamePoints = "<tr><td>"+computerPoints+"</td><td>"+userPoints+"</td><td>"+noOfTries+"</td><td><button class='increase-try'>Increase Tries</button><button class='finish'>Finish</button></td><td>"+gameStatus+"</td></tr>";
 document.getElementById("thead").innerHTML = gamePointsHeadings;
 document.getElementById("tbody").innerHTML = gamePoints; 
})
if(document.getElementById("tbody").children[0] != undefined){
    const increase_Try = document.getElementsByClassName("increase-try");
increase_Try.forEach(increase =>increase.addEventListener('click',() => {
    noOfTries ++;
    let gamePointsHeadings = "<tr><th>Computer Points</th><th>User Points</th><th>No of tries</th><th>Actions</th><th>Result</th></tr>";
    let gamePoints = "<tr><td>"+computerPoints+"</td><td>"+userPoints+"</td><td>"+noOfTries+"</td><td><button id='increase-try'>Increase Tries</button></td><td>"+gameStatus+"</td></tr>";
 document.getElementById("thead").innerHTML = gamePointsHeadings;
 document.getElementById("tbody").innerHTML = gamePoints; 
}));
}