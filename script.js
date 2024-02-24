function makebubble(){
    var gar= "";
for(var i= 1; i<=110; i++){
    var r= Math.floor(Math.random()*10)
    gar+= `<div class="bubble">${r}</div>`;
}
document.querySelector("#pbtm").innerHTML= gar;
}


var rn= 0;
function getHit(){
    rn= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent= rn;

}


var timer= 60;
function runtimer(){
    var t= setInterval(function() {
        if(timer > 0){
        timer--;
        document.querySelector("#timeval").textContent= timer;
        }
        else{
            clearInterval(t);
            document.querySelector("#pbtm").innerHTML= `<h2>GAME OVER.</h2>`
        }
    }, 1000);

}

var score= 0;
function scrincrease(){
    score += 10;
    document.querySelector("#scoreval").textContent= score;
}


document.querySelector("#pbtm").addEventListener("click", function(args){
   var clickednum= (Number(args.target.textContent));
   if(clickednum === rn){
    scrincrease();
    makebubble();
    getHit();
   }
})









makebubble();
getHit();
runtimer();
