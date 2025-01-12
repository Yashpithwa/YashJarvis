const button =document.querySelector(".button");
const listen =document.querySelector(".listen");

function speech(text)
{
    const txtspeech = new SpeechSynthesisUtterance(text);
    txtspeech.rate=1;
    txtspeech.pitch=1;
    txtspeech.volume=1;
    window.speechSynthesis.speak(txtspeech);
    
}

function wishme()
{
 const date =new Date();
 const hour=date.getHours();
 switch(true)
 {
    case (hour>=1 && hour<12 ): speech("GOOD MORNING CLIENT HOW MAY I HELP YOU?");
       break;

    case (hour>=12 && hour<17): speech("GOOD AFTERNOON CLIENT HOW MAY I HELP YOU?");
    break;

    case (hour>=17 && hour<21): speech("GOOD EVENING CLIENT HOW MAY I HELP YOU?");
    break;
    
    default: speech("HOW MAY I HELP YOU?");
        
 }
}

window.addEventListener('load',()=>
{
   speech("loading yashtron please wait!");
   wishme();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const rec= SpeechRecognition;
 
rec.onresult=(event)=>
{
    const resultindex= event.resultIndex;
    const transcript= event.results[resultindex][0].transcript;
    listen.textContent=transcript;
    takeCommand(transcript.toLowerCase());


}

button.addEventListener("click",()=>
{
    listen.textContent=" Listening...."
});