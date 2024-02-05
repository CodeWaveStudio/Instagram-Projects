const fileInput=document.getElementById('file-input');
const btn=document.getElementById('btn');
const error=document.getElementById('error');
const mainClass=document.querySelector('.main');
let uploadfile;
let isupload=true;
function toggleBtn(){
    if(isupload){
        upload();

    }
    else{
        download();
    }
}

function upload(){
    uploadfile= fileInput.files[0];
    if(fileInput.value){
        error.innerText='Upload Sucessfully';
        error.style.display='block';
        error.style.color='green';
        btn.innerText='Download';
        isupload=false;
    }
    else{
        error.innerText='Please Upload File !';
        error.style.display='block';
        error.style.color='rgb(179, 6, 6)';
    }
    
   
}

function download(){
    if(fileInput.value){
        const blob=new Blob([uploadfile],{type:'application/png'});
        const url=URL.createObjectURL(blob);
        const a=document.createElement('a');
        a.href=url;
        a.download='upload_pdf.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        error.innerText='Download File Sucessfully';
        
}
else{
    error.innerText='Please Upload File !';
    error.style.display='block';
    error.style.color='rgb(179, 6, 6)';
    
}
}