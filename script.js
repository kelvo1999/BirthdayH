let count = 5;
const countdown = document.getElementById("countdown");
const surprise = document.getElementById("surprise");
const music = document.getElementById("music");

const timer = setInterval(() => {
  count--;
  countdown.innerText = count;

  if(count === 0){
    clearInterval(timer);

    countdown.style.display = "none";
    surprise.classList.remove("hidden");

    music.play();

    balloons();
  }
},1000);

function balloons(){
  for(let i=0; i<30; i++){
    const balloon = document.createElement("div");

    balloon.innerHTML = "🎈";

    balloon.style.position = "absolute";
    balloon.style.left = Math.random()*100 + "vw";
    balloon.style.top = "100vh";
    balloon.style.fontSize = "40px";

    document.body.appendChild(balloon);

    let pos = 100;

    const fly = setInterval(()=>{
      pos--;

      balloon.style.top = pos + "vh";

      if(pos < -10){
        clearInterval(fly);
      }
    },20);
  }
}