const btn_video = document.getElementById('btn-video');
const overllay_video = document.getElementById('overllay-video');
const myvideo = document.getElementById('myvideo');

btn_video.addEventListener('click',function(){
    overllay_video.classList.add('display-video') ; 
    myvideo.play();
});
overllay_video.addEventListener('click',function(e){
    if(e.target === overllay_video){
    overllay_video.classList.remove('display-video') ; 
    myvideo.pause();
    }
});