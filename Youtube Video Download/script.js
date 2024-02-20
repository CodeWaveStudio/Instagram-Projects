const urlText=document.getElementById('url-text');
const imageArea=document.querySelector('.image-area');
const downloadBtn=document.getElementById('download-Btn');

urlText.addEventListener('keyup', () => {
    let url = urlText.value;
    let parts = url.split('/');
    let baseurl = parts[2];
console.log(baseurl);
    if (baseurl === 'youtu.be') {
        let videoId = parts[3].split('?')[0];
        console.log('video id: ' + videoId);
        let thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

        imageArea.innerHTML=`<img id="video-thumbnail" src="${thumbnailUrl}" alt="Video Thumbnail">`;
    } else {
        // Handle invalid URL or different domain
        console.log('Invalid YouTube URL');
        imageArea.innerHTML = '';
    }
});


downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let url = urlText.value;
    let parts = url.split('/');
    let videoId = parts[3].split('?')[0];
    let thumbnailUrl = `cors.php?videoId=${videoId}`;

    // Create an anchor element to trigger the download
    let a = document.createElement('a');
    a.href = thumbnailUrl;
    a.download = 'thumbnail.jpg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

