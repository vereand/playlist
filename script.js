console.log('hello how are you')
let sonIndex = 0;
let audioElement = new Audio('1.mp3');
let mastarplay = document.getElementById('mastarplay');
let myProgressBar = document.getElementById('myProgressBar');
let songinfoo = document.getElementById('songinfoo');
let mastarSongName = document.getElementById('mastarSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName:'Agar Tum Saath Ho',filepath:'songs/1.mp3',coverPath:'cover/1.jpg'},
    {songName:'Kali Kali Zulfon',filepath:'songs/2.mp3',coverPath:'cover/2.jpg'},
    {songName:'Tera Yaar Hoon Main',filepath:'songs/3.mp3',coverPath:'cover/3.jpg'},
    {songName:'Yaara Teri Meri Yaari ',filepath:'songs/4.mp3',coverPath:'cover/4.jpg'},
    {songName:'Mara Saiya Ji Se Aaj...',filepath:'songs/5.mp3',coverPath:'cover/5.jpg'},
    {songName:'luka chuppi',filepath:'songs/6.mp3',coverPath:'cover/6.jpg'},
    {songName:'O Paalanhaare',filepath:'songs/7.mp3',coverPath:'cover/7.jpg'},
    {songName:'Desi Mera',filepath:'songs/1.mp3',coverPath:'cover/1.jpg'},
]

// audioElement.play();
songItem.forEach((element,i)=>{
    console.log(element,i);
 element.querySelectorAll('img')[0].src = songs[i].coverPath;
 element.getElementsByClassName('name')[0].innerHTML = songs[i].songName
})
//Handal play/pause click
mastarplay.addEventListener('click',()=>{
    // console.log('click');
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        mastarplay.classList.remove('play');
        mastarplay.classList.add('pause')
        songinfoo.style.opacity = 1;
    }
    else{
        audioElement.pause();
        mastarplay.classList.remove('pause')
        mastarplay.classList.add('play');
        songinfoo.style.opacity = 0;
    }
})
//Lisin to Event
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
   let progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
//    console.log(progress)
   myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100
})
const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('pause');
        element.classList.add('play');
    })
}
Array.from(document.querySelectorAll('.songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target.classList);
        makeAllPlay();
        e.target.classList.remove('play');
        e.target.classList.add('pause');
        sonIndex = parseInt(e.target.id)
        audioElement.src = `${sonIndex+1}.mp3`;
        mastarSongName.innerHTML = songs[sonIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        songinfoo.style.opacity = 1;
        mastarplay.classList.remove('play');
        mastarplay.classList.add('pause')
    })
})

document.getElementById('FooterLeft').addEventListener('click',()=>{
   if(sonIndex <= 0){
    sonIndex=0;
   }
   else{
    sonIndex -= 1;
   }
   console.log(sonIndex);
   audioElement.src = `${sonIndex+1}.mp3`;
   mastarSongName.innerHTML = songs[sonIndex].songName;
   audioElement.currentTime=0;
   audioElement.play();
   songinfoo.style.opacity = 1;
   mastarplay.classList.remove('play');
   mastarplay.classList.add('pause')
})

document.getElementById('FooterRight').addEventListener('click',()=>{
   if(sonIndex >= 7){
    sonIndex=0;
   }
   else{
    sonIndex +=1;
   }
   console.log(sonIndex);
   audioElement.src = `${sonIndex+1}.mp3`;
   mastarSongName.innerHTML = songs[sonIndex].songName;
   audioElement.currentTime=0;
   audioElement.play();
   songinfoo.style.opacity = 1;
   mastarplay.classList.remove('play');
   mastarplay.classList.add('pause')
})