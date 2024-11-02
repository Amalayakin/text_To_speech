const textbox = document.querySelector(".textbox");
const selectOpt = document.querySelector("select");
let speechObj = new SpeechSynthesisUtterance();
let pausebtn = document.querySelector(".pause-resume-btn")
let isPaused = false;
let synth = speechSynthesis

let voices = []
const playbtn = document.querySelector(".playbtn");
console.log(textbox.value)
playbtn.addEventListener('click',() =>{
    
    speechObj.text = textbox.value;
    synth.speak(speechObj)

})
window.speechSynthesis.onvoiceschanged = ()=>{
    voices = speechSynthesis.getVoices();
    speechObj.voice = voices[0];

    voices.forEach((voice, i) => (selectOpt.options[i] = new Option(voice.name,i) ));
}

console.log(voices[selectOpt.value])
selectOpt.addEventListener('change',()=>{
    speechObj.voice = voices[selectOpt.value]
})
function pauseResume() {
    if (synth.speaking) {
        if (!isPaused) {
            synth.pause();
            isPaused = true;
            pausebtn.innerText = "Resume";
        } else {
            synth.resume();
            isPaused = false;
            pausebtn.innerText = "Pause";
        }
    }
}

/* 
 function pauseResume(){
    if(synth.speaking){
        synth.pause();
        pausebtn.innerText = "resume";
    }
    else if(synth.paused && synth.speaking) {
        synth.resume();
        pausebtn.innerText = "pause";
    }
    
}*/
pausebtn.addEventListener('click',pauseResume);