let userScore = 0;
//const smallUser = "user".fontSize(3);
//const smallComp = "Comp".fontSize(3);
let compScore = 0;
const userScore_span = document.getElementById("user-scrore");
const compScore_span = document.getElementById("computer-score");
const scoreBord_div = document.querySelector(".scrore_board");
const result_div = document.querySelector(".result >p ");
const result_h5 = document.querySelector(".result >h5 ");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
let bwr_h2 = document.getElementById("bwr");

function getComputerChoice (){
    const choices = ["r","p","s"];
    const randomNum = Math.floor(Math.random()*3);
    return choices[randomNum];
}
function commataire(){
    var ramCom = ["You are not Lucky","You are so dumb","whats wrong with you","Screw You","get lost boy","its ok !!!!!","Not need to Cry","Damn you"]
    var ramResult = Math.floor(Math.random()*7);
    if (compScore++) return result_h5.innerHTML=ramCom[ramResult]
}

function mpamadika(teny){
    if (teny === "r" )return "Rock";
    if (teny === "p" )return "paper";
    return "Scissor";
    
    
};

function win(compputerChoise, userChoice){
    console.log("win");
    userScore++;
    userScore_span.innerHTML=userScore;
    result_div.innerHTML= mpamadika(userChoice) + " V& " +mpamadika(compputerChoise) + " YOU WİN";
    var num = ["Wow WELL DONE","You are the KİNG","GOOOOOOOOOOOOOOOOOOOD","You might be a God","You are so lucky"];
    var ranResult = Math.floor(Math.random()*4);
    var comWin = num[ranResult];
    result_h5.innerHTML= comWin;
    console.log(comWin);
    
   
    
};
function lose(compputerChoise, userChoice){    
    
    console.log("lose");
    compScore++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML=mpamadika(userChoice)+ " V& " + mpamadika(compputerChoise )+" YOU LOSE ";
    var ramCom = ["You are not Lucky","You are so dumb","whats wrong with you","Screw You","get lost boy","its ok !!!!!","Not need to Cry","Damn you","Next time it will be better"]
    var ranResult = Math.floor(Math.random()*7);
    var comfinal = ramCom[ranResult]
    console.log(comfinal);
    result_h5.innerHTML= comfinal;
    
    
    
};
function draw(compputerChoise, userChoice){
    
    console.log("draw");
    result_div.innerHTML= mpamadika(userChoice) +" V& "+mpamadika(compputerChoise) +" İTS A DRAW "
    var commentForDraw = ["DO YOUR BEST  NEXT TİME","what a heck ","Mmmm İ WİLL BEAT YOU","Lets keep playing","Okey"];
    var ranResult = Math.floor(Math.random()*3);
    var comDraw = commentForDraw[ranResult];
    result_h5.innerHTML=comDraw;
    
};


function game(userChoise){
    const computerChoise = getComputerChoice ();
    switch(computerChoise + userChoise){
        case "rp":
        case "ps":
        case "sr":
            
            win(computerChoise, userChoise);
            break;
        case "rs":
        case "pr":
        case "sp":

            lose(computerChoise, userChoise);
            break;
        case "rr":
        case "pp":
        case "ss":
        
            draw(computerChoise, userChoise);
            break;
    }
};


function main() {
    rock_div.addEventListener('click', function(){
        game("r");
    })

    scissors_div.addEventListener('click', function(){
        game("s");
    })

    paper_div.addEventListener('click', function(){
        game("p");
    })
};
main();
function fstart(){
    location.reload(); 
}

