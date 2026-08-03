var score = document.getElementById("score");
var cookie = document.getElementById("cookie");
var clicks = 0;

cookie.onclick = addClick;
function addClick(){
  clicks +=1;
  score.innerHTML = clicks;
}