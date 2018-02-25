var timeStr = function(time){
   if(time < 10)
       return "0" + time;
   return "" + time;
}

var startTime = 0;
var intervalId = -1;
document.getElementById("timer-state").addEventListener("click", function(){
    if(document.getElementById("timer-state").textContent === "Start"){
       if(startTime === 0){
   document.getElementById("foo").classList.add('jello-horizontal');
           document.getElementById("timer-state").textContent = "Stop";
           startTime = new Date().getTime() - ((1000 * 60 * 60 * 100) - 3000);
       }
       intervalId = setInterval(function(){
           var now = new Date().getTime();
           var timePassedInSeconds = Math.floor( (now - startTime) / 1000 );
           var realTimeSeconds = timePassedInSeconds % 60;
           var minutes = Math.floor(timePassedInSeconds / 60);
           var realTimeMinutes =  minutes % 60;
           var realTimeHours = Math.floor( minutes / 60);
           document.getElementById("timer").textContent = timeStr(realTimeHours)+":"+timeStr(realTimeMinutes)+":" + timeStr(realTimeSeconds);
       }, 500);
        return;
    }
    if(document.getElementById("timer-state").textContent === "Stop"){
        document.getElementById("timer-state").textContent = "Start";
        clearInterval(intervalId);
        return;
    }
});
