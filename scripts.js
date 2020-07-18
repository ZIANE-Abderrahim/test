var activeplayer,score,t_scores,PlayingGame,winscore;
activeplayer=0;
var lastDice=0;
score=0;
t_scores=[0,0];
document.querySelector(".roll").addEventListener("click",function(){
    if(PlayingGame){
    var dice=Math.floor(Math.random()*6)+1;
    
    document.getElementById("roll1").src="img/dice-"+dice+".png";
    document.querySelector(".dice").style.display='block';
    /*if(dice!==1){
        
        score+=dice;
        
        document.querySelector(".current-"+activeplayer).textContent=score; 
           
    }
    else{
        NextPlayer();
        
    }
    lose=dice;*/
    if (dice === 6 && lastDice === 6) {
        //Player looses score
        t_scores[activeplayer] = 0;
        document.querySelector('.total-score-'+ activeplayer).textContent = '0';
        NextPlayer();
    } else if (dice !== 1) {
        //Add score
        score += dice;
        document.querySelector('.current-'+ activeplayer).textContent =score;
    } else {
        //Next player
        NextPlayer();
    }
    lastDice = dice;
}
});
document.querySelector(".hold").addEventListener("click",function(){
    if(PlayingGame){
    t_scores[activeplayer]+=score;
    document.querySelector(".total-score-"+activeplayer).textContent=t_scores[activeplayer];
        
    if(t_scores[activeplayer]>=winscore){
        document.querySelector(".player-"+activeplayer).classList.add('winner')
        document.querySelector(".player-"+activeplayer).textContent='WINNER!!';
        document.querySelector(".dice").style.display='none';
        PlayingGame=false;
    }else{
        NextPlayer();
    }
}
});
document.querySelector(".new").addEventListener("click",function(){
    init();
});
document.querySelector(".win").addEventListener("click",function(){
    document.querySelector(".dice").style.display='none';
    document.querySelector(".winform").style.display='block';
    
});
function NextPlayer(){
    
    activeplayer==0 ? activeplayer=1 : activeplayer=0;
    document.querySelector(".player-area-0").classList.toggle("active");
    document.querySelector(".player-area-1").classList.toggle("active");
    document.querySelector(".current-0").textContent='0';
    document.querySelector(".current-1").textContent='0';
    score=0;
    document.querySelector(".dice").style.display='none';
}
function init(){
    t_scores = [0,0];
    score=0;
    activeplayer=0;
    PlayingGame=true;
    document.querySelector(".current-0").textContent='0';
    document.querySelector(".current-1").textContent='0';
    document.querySelector(".total-score-0").textContent='0';
    document.querySelector(".total-score-1").textContent='0';
    document.querySelector(".player-0").textContent='PLAYER 1';
    document.querySelector(".player-1").textContent='PLAYER 2';
    document.querySelector(".player-0").classList.remove('winner');
    document.querySelector(".player-1").classList.remove('winner');
    document.querySelector('.player-area-0').classList.remove('active');
    document.querySelector('.player-area-1').classList.remove('active');
    document.querySelector('.player-area-0').classList.add('active');

}
function winningscore(){
    var inpute= document.getElementById("winscore").value;
    if(inpute){
        winscore= inpute;
    }else{
        winscore=50;
    }
    
    document.querySelector(".winform").style.display='none';
    init();
    
    
}




''