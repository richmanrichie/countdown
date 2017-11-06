// function for a count down timer
countdownTimer();
const audio = document.querySelector(`audio[data-key="68"]`);
function countdownTimer() {

// if minutes and seconds are 0, and return false
if(ctmnts==0 && ctsecs==0 && cthr==0) {
return false;
}
else {
// decrease seconds, and decrease minutes if seconds reach to 0
ctsecs--;
if(ctsecs < 0) {
  if(ctmnts > 0) {
    ctsecs = 59;
    ctmnts--;
    if(ctmnts <= 0){
      if(cthr > 0){
        ctmnts = 59;
        cthr--;
      }
    }
  }
 else {
    ctsecs = 0;
    ctmnts = 0;
    cthr = 0;
  }
}
}


//Richard this is where the code displays the time
document.getElementById('showhr').innerHTML = cthr;
document.getElementById('showmns').innerHTML = ctmnts;
document.getElementById('showscs').innerHTML = ctsecs;

//Richard make the page show it after every one second
setTimeout('countdownTimer()', 1000);

if(ctsecs <= 30 && ctmnts <= 0 && cthr <= 0 ){
  document.getElementById('count').classList.toggle('big');
  audio.play();
}

}

function updown(){
  ctsecs.classList.toggle('big');
  setTimeout('updown()', 1000);
}
// setInterval(countdownTimer, 1000);
//-->
