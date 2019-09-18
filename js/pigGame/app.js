var scores,roundScore,activePlayer,gamePlay;
var prev=[];
init();

document.querySelector(".btn-roll").addEventListener("click",function(){
    if(gamePlay){
        
    var diceDom=document.querySelector(".dice");
    var dice=Math.floor(Math.random()*6)+1;
    diceDom.style.display="block";
    diceDom.src="dice-"+dice+".png";
    
if(dice!==1){
    roundScore+=dice;
    document.querySelector("#current-"+activePlayer).textContent=roundScore;
}
else if(prev.length & prev[-1]===6 & dice===6){
     nextPlayer();
}
else{
    nextPlayer();
    
}
        
    }
    prev.push(dice);
    
});

document.querySelector(".btn-hold").addEventListener("click",function(){
   if(gamePlay){
       
    scores[activePlayer]+=roundScore;
    document.querySelector("#score-"+activePlayer).textContent=scores[activePlayer];
    if(scores[activePlayer]>=100){
        document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
        document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
        document.querySelector("#name-"+activePlayer).textContent="winner"
        document.querySelector(".dice").style.display="none"
        gamePlay=false;
    }
    else{
    nextPlayer();
}
       
   } 
    
});
document.querySelector(".btn-new").addEventListener("click",init);

function init(){
    gamePlay=true;
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    prev=[];
    document.querySelector(".dice").style.display="none";
    document.getElementById("score-0").textContent=0;
    document.getElementById("score-1").textContent=0;
    document.getElementById("current-0").textContent=0;
    document.getElementById("current-1").textContent=0;
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector("#name-0").textContent="Player 1"
    document.querySelector("#name-1").textContent="Player 2"
    
}

function nextPlayer(){
    prev=[];
    activePlayer=== 0 ? activePlayer=1 : activePlayer=0;
    document.getElementById("current-0").textContent=0;
    document.getElementById("current-1").textContent=0;
    roundScore=0;
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".dice").style.display="none"
    
}