var timeTaken = 0;
function calculateTime(){
    timeTaken+= 1;
    postMessage(timeTaken);
    setTimeout(calculateTime,1000);
}
calculateTime();

