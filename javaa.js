
var buttonColors=["red","yellow","blue","green"];
var patternOfGame=[];
var userpattern=[];


var start=false;
var level=0;
var lastInd=0;
$(document).keypress(function(){
    if(start===false){
        $("h1").text("Level" + level);
        start=true;
        nextSequence();
    }
});

$(".btn").click(function(){
    userpattern.push($(this).attr("id"));
  animatePress($(this).attr("id"));
  playSound($(this).attr("id"));
  checkAnswer(userpattern.length-1);
});

function checkAnswer(currLevel){
   if(userpattern[currLevel]===patternOfGame[currLevel]){
    console.log("Success");
    if(userpattern.length===patternOfGame.length){
        setTimeout(function(){
            nextSequence();
        },1000);
    }
   } 
   else{
    console.log("failure");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
   }
}
function startOver(){
    level=0;
    patternOfGame=[];
    start=false;
}
function nextSequence(){
    userpattern=[];
    level++;
$("h1").text("Level "+ level);
var newNum=Math.random();
newNum*=4;
newNum=Math.floor(newNum);
patternOfGame.push(buttonColors[newNum]);
$("#"+buttonColors[newNum]).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(buttonColors[newNum]);
}

function playSound(name){
     var sounses=new Audio("./sounds/"+name+".mp3");
     sounses.play();

}
function animatePress(temp){
    $("#"+temp).addClass("pressed");
   setTimeout(function () {
    console.log();
    $("#"+temp).removeClass("pressed");
   }, 100);
}