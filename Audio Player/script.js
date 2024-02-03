document.addEventListener('DOMContentLoaded',()=>{
    const audio=document.getElementById('song-audio'),
    audioName=document.getElementById('song-name'),
    progressBar=document.getElementById('progress-bar'),
    playBtn=document.getElementById('play'),
    preveousBtn=document.getElementById('previous'),
    nextBtn=document.getElementById('next');
   const audioProgress={
    playList:[
        {
            src:'2022_07_05_13_01_13_GOLMAAL-HAI-BHAI-SAB-GOLMAAL-HAI-RINGTONE.mp3',
        },
        {
            src:'2022_11_09_14_55_34_NIGHT-CHANGES-RINGTONE.mp3',
        }
    ],
    currentSongIndex:0,
  previous:function(){
   if(this.currentSongIndex>0){
    this.currentSongIndex--;
  this.playSong();
  }
   },
   next:function(){
    if(this.currentSongIndex<this.playList.length-1){
     this.currentSongIndex++;
     this.playSong();
   }
    },
    playSong:function(){
        const currentSong=this.playList[this.currentSongIndex];
        audio.src=currentSong.src;
        updateSong();
        audio.play();
    }
}
preveousBtn.addEventListener('click',()=>{
    audioProgress.previous();
});
nextBtn.addEventListener('click',()=>{
    audioProgress.next();
})

    playBtn.addEventListener('click',()=>{
        if(audio.paused){
            updateSong();
            audio.play();
            playBtn.innerText='Pause'
        }
        else{
            audio.pause();
            playBtn.innerText='Play'
        }
    });

    function getFileName(url){
 return url.split('/').pop();
    }
    function updateSong(){
        const currentSong=audioProgress.playList[audioProgress.currentSongIndex];
        const fileName=getFileName(currentSong.src).split('.')[0];
        audioName.querySelector('p').innerText=fileName;
    }

    progressBar.addEventListener('input',setInput);
    function setInput(){
        const progressValue=progressBar.value;
        const duration=audio.duration;
       audio.currentTime=(progressValue/100)*duration;
    }
    audio.addEventListener('timeupdate',()=>{
        updateSong();
        const currentSongtime=audio.currentTime;
        const duration=audio.duration;
        const progressValue=(currentSongtime/duration)*100;
        progressBar.value=progressValue;
    })
 } )