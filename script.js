console.log("Welcome to spotify");

//initialize the variables
let songIndex = 0;
let audioElement =new Audio('song/1.mp3');

let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


 let songs= [    
    {songName:"Levitating", filePath:"song/1.mp3",coverPath:"1.jpg"},
    {songName:"Prabhu", filePath:"song/2.mp3",coverPath:"2.jpg"},
    {songName:"Tandav", filePath:"song/3.mp3",coverPath:"3.jpg"},
    {songName:"Lag Ja Gale", filePath:"song/4.mp3",coverPath:"Saude.jpg"},
    {songName:"Saudebazi", filePath:"song/5.mp3",coverPath:"Saude.jpg"},
    {songName:"Levitating", filePath:"song/1.mp3",coverPath:"1.jpg"},
    {songName:"Levitating", filePath:"song/1.mp3",coverPath:"1.jpg"},
    {songName:"Levitating", filePath:"song/1.mp3",coverPath:"1.jpg"},
    {songName:"Levitating", filePath:"song/1.mp3",coverPath:"1.jpg"},
    {songName:"Levitating", filePath:"song/1.mp3",coverPath:"1.jpg"},
 ]
 songItems.forEach((element,i)=>{
    // console.log(element ,i);
     element.getElementsByTagName("img")[0].src=songs[i].coverPath;
     element.getElementsByClassName("songName")[0].innerText=songs[i].songName;


 }
 )


// let audioElement = new Audio('song/1.mp3');
// audioElement.play();
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
}
)

//listen to events
audioElement.addEventListener('timeupdate',()=>{
// console.log('timeupdate');
//update seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value = progress;


}
)

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

}
)
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        // element.classList.remove('fa-circle-pause');
        element.classList.remove('fa-circle-pause');  
        element.classList.add('fa-circle-play')  
    }
    )
}
Array.from (document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `song/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');




    })


})

document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex>8){
        songIndex = 0;
    }
    else{

    songIndex += 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
}
)
document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{

    songIndex -= 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

