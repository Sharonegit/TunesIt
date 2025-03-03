console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    //ani
    {songName: "Master the Blaster", filePath: "songs/1.mp3", coverPath: "covers/1.jpeg"},
    {songName: "Aathi", filePath: "songs/2.mp3", coverPath: "covers/2.jpeg"},
    {songName: "Arabic Kuthu", filePath: "songs/3.mp3", coverPath: "covers/3.jpeg"},
    {songName: "Aaluma Doluma", filePath: "songs/4.mp3", coverPath: "covers/4.webp"},
    {songName: "Donu Donu Donu", filePath: "songs/5.mp3", coverPath: "covers/5.jpeg"},
    {songName: "Boomi Enna Suthuthu", filePath: "songs/6.mp3", coverPath: "covers/6.jpeg"},
    {songName: "Jalabulajangu", filePath: "songs/7.mp3", coverPath: "covers/7.jpeg"},
    {songName: "Naanum Rowdy Thaan", filePath: "songs/8.mp3", coverPath: "covers/8.jpeg"},
    {songName: "Dippam Dappam", filePath: "songs/9.mp3", coverPath: "covers/9.jpeg"},
    {songName: "Dharala Prabhu", filePath: "songs/10.mp3", coverPath: "covers/10.jpeg"},
    //arr
    {songName: "Mukala Mukabula", filePath: "songs/11.mp3", coverPath: "covers/11.jpeg"},
    {songName: "Antha Arabic ", filePath: "songs/12.mp3", coverPath: "covers/12.jpeg"},
    {songName: "Sugam Sugam", filePath: "songs/13.mp3", coverPath: "covers/13.jpeg"},
    {songName: "Yaakai Thiri", filePath: "songs/14.mp3", coverPath: "covers/14.jpeg"},
    {songName: "Chikku Bukku Rayile", filePath: "songs/15.mp3", coverPath: "covers/15.jpeg"},
    {songName: "Ennai Kaanavilaye", filePath: "songs/16.mp3", coverPath: "covers/16.jpeg"},
    {songName: "Telephone Manipol", filePath: "songs/17.mp3", coverPath: "covers/17.jpeg"},
    {songName: "Ottakatha Katiko", filePath: "songs/18.mp3", coverPath: "covers/18.jpeg"},
    {songName: "Ponmagal Vanthal", filePath: "songs/19.mp3", coverPath: "covers/19.jpeg"},
    {songName: "Maya machindra", filePath: "songs/20.mp3", coverPath: "covers/20.jpeg"},
    //harrise
    {songName: "Mudhal Kanave", filePath: "songs/21.mp3", coverPath: "covers/21.jpeg"},
    {songName: "Oru Punnagai Poove", filePath: "songs/22.mp3", coverPath: "covers/22.jpeg"},
    {songName: "Kaadhal Yaanai", filePath: "songs/23.mp3", coverPath: "covers/23.jpeg"},
    {songName: "Manjal Veyil", filePath: "songs/24.mp3", coverPath: "covers/24.jpeg"},
    {songName: "Aagaya suriyanae", filePath: "songs/25.mp3", coverPath: "covers/25.jpeg"},
    {songName: "venmathiye", filePath: "songs/26.mp3", coverPath: "covers/26.jpeg"},
    {songName: "Mazhai mazhai", filePath: "songs/27.mp3", coverPath: "covers/27.jpeg"},
    {songName: "Moongil kaadugalaey", filePath: "songs/28.mp3", coverPath: "covers/28.jpeg"},
    {songName: "Oru Maalai", filePath: "songs/29.mp3", coverPath: "covers/29.jpeg"},
    {songName: "Amali Thumili", filePath: "songs/30.mp3", coverPath: "covers/30.jpeg"},
    //raja
    {songName: "Chinna Thayaval", filePath: "songs/31.mp3", coverPath: "covers/31.jpeg"},
    {songName: "Vaanam mella", filePath: "songs/2.mp3", coverPath: "covers/32.jpeg"},
    {songName: "Ninnukori varanan", filePath: "songs/33.mp3", coverPath: "covers/33.jpeg"},
    {songName: "Aagaya gangai", filePath: "songs/34.mp3", coverPath: "covers/34.jpeg"},
    {songName: "Yamunai Aatrile", filePath: "songs/35.mp3", coverPath: "covers/35.jpeg"},
    {songName: "Santhana Kaatre", filePath: "songs/36.mp3", coverPath: "covers/36.jpeg"},
    {songName: "Pesa Koodatha", filePath: "songs/37.mp3", coverPath: "covers/37.jpeg"},
    {songName: "Sundari Kannal", filePath: "songs/38.mp3", coverPath: "covers/38.jpeg"},
    {songName: "Poongatru Puthithaanathu", filePath: "songs/39.mp3", coverPath: "covers/39.jpeg"},
    {songName: "Vaa Vaa Anbe Anbe", filePath: "songs/40.mp3", coverPath: "covers/30.jpeg"},
    //gv
    {songName: "Ayyayo", filePath: "songs/41.mp3", coverPath: "covers/41.jpeg"},
    {songName: "Ennaku innoru per iruku", filePath: "songs/42.mp3", coverPath: "covers/42.jpeg"},
    {songName: "Manasellam", filePath: "songs/43.mp3", coverPath: "covers/43.jpeg"},
    {songName: "Eeti", filePath: "songs/44.mp3", coverPath: "covers/44.jpeg"},
    {songName: "Sandalee", filePath: "songs/45.mp3", coverPath: "covers/45.jpeg"},
    {songName: "Idhudhan", filePath: "songs/46.mp3", coverPath: "covers/46.jpeg"},
    {songName: "Vaa Senthaazini", filePath: "songs/47.mp3", coverPath: "covers/47.jpeg"},
    {songName: "Yaarai polum illa", filePath: "songs/48.mp3", coverPath: "covers/48.jpeg"},
    {songName: "Yaaro ivan", filePath: "songs/49.mp3", coverPath: "covers/49.jpeg"},
    {songName: "Adiye", filePath: "songs/50.mp3", coverPath: "covers/50.jpeg"},
    //sana
    {songName: "Iraivi", filePath: "songs/51.crdownload", coverPath: "covers/51.jpeg"},
    {songName: "10000pax", filePath: "songs/52.mp3", coverPath: "covers/52.jpeg"},
    {songName: "Aala Saachiputa", filePath: "songs/53.mp3", coverPath: "covers/53.jpeg"},
    {songName: "En Suzhali", filePath: "songs/54.mp3", coverPath: "covers/54.jpeg"},
    {songName: "Missing Me", filePath: "songs/55.mp3", coverPath: "covers/55.jpeg"},
    {songName: "Naan Naan", filePath: "songs/56.mp3", coverPath: "covers/56.jpeg"},
    {songName: "Megamo Aval", filePath: "songs/57.mp3", coverPath: "covers/57.jpeg"},
    {songName: "Endi Ipadi", filePath: "songs/58.mp3", coverPath: "covers/58.jpeg"},
    {songName: "Aval", filePath: "songs/59.mp3", coverPath: "covers/59.jpeg"},
    {songName: "Siriki Vaasam", filePath: "songs/60.mp3", coverPath: "covers/60.jpeg"},

]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=59){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
