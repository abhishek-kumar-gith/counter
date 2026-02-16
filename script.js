

const reset=document.querySelector(".reset");
// const SPR=document.getElementsByClassName("startPauseResume");
const SPR=document.querySelector(".startPauseResume");
const counter=document.querySelector(".counter")
let sec=0;
let min=0;
let hour=0;
let time;

var interval;
SPR.addEventListener("click",()=>{
if(SPR.classList.contains("start")){

    SPR.classList.remove("start");
    SPR.classList.add("pause");
    SPR.textContent="Pause";
    reset.disabled = false;
 interval=  setInterval(() => {
   sec++;
   if(sec%60==0 && sec!=0){
    sec=0;
    min++;
   }
   if(min%60==0 && min!=0){
    min=0;
    hour++;
   }
   time=`${hour>=9?hour:'0'+hour}:${min>=9?min:'0'+min}:${sec>=9?sec:'0'+sec}`;
counter.textContent=time;


}, 1000);

}
else if(SPR.classList.contains("pause")){

      SPR.classList.remove("pause");
    SPR.classList.add("resume");
    SPR.textContent="Resume";
    reset.disabled = false;
    clearInterval(interval);
     time=`${hour>=9?hour:'0'+hour}:${min>=9?min:'0'+min}:${sec>=9?sec:'0'+sec}`;
counter.textContent=time;

}
else if(SPR.classList.contains("resume")){
   SPR.classList.remove("resume");
    SPR.classList.add("pause");
    SPR.textContent="Pause";
    reset.disabled = false;
  interval=  setInterval(() => {
   sec++;
   if(sec%60==0 && sec!=0){
    sec=0;
    min++;
   }
   if(min%60==0 && min!=0){
    min=0;
    hour++;
   }
   time=`${hour>=9?hour:'0'+hour}:${min>=9?min:'0'+min}:${sec>=9?sec:'0'+sec}`;
counter.textContent=time;


}, 1000);



}
else{
    console.log("there might be some error");
    
}
})

reset.addEventListener("click",()=>{



    if(reset.classList.contains("reset")){
        clearInterval(interval);
        sec=0;
        min=0;
        hour=0;
        SPR.classList.remove("resume");
        SPR.classList.remove("pause");
        SPR.classList.add("start");
        SPR.textContent="Start";
        reset.disabled = true;
        counter.textContent="00:00:00";
}


})