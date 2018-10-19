$(function(){
    cptTotal = 0;
    nbVictory = 0;
    prct = 0;
    nbDefeat = 0;
$("#valid").click(function(){
  pcChoice = Math.floor(Math.random()*3+1);
  playerChoice = $("#playerChoice").val();
  cptTotal++;
if(pcChoice == playerChoice){
  alert("egalité!");
}else if((pcChoice == 1 && playerChoice == 3) || (pcChoice == 3 && playerChoice == 2) || (pcChoice == 2 && playerChoice == 1)){
  nbDefeat++;
alert("perdu!");
}else {
  nbVictory++;
  alert("gagné!");
}
prct = (nbVictory*100)/cptTotal;
$("#score").html(nbVictory + " Victoire(s) " + nbDefeat + " Defaite(s) " + " Pour un pourcentage de " + prct +"%");
});
});
