
window.onload=function(){
const input=document.querySelector("input");
const userImg=document.querySelector(".userImg");
const handle=document.querySelector(".handle");
const followers=document.querySelector(".followers");
const following=document.querySelector(".following");
const submit=document.querySelector(".submit");
const carPic=document.querySelector(".carPic");


//input eventHandler
input.addEventListener("keyup",handleEvent);

function handleEvent(e){
    if(e.keyCode==13){

       const userName=e.target.value;
      let xhr=new XMLHttpRequest()
      xhr.open('GET',`https://api.github.com/users/${e.target.value}`);
      xhr.onload=function eventLoad(){
        displayUI(JSON.parse(xhr.response));
      }
      xhr.send()
    }
  
}

function sideLogo(obj,a){
    if(obj.length>5){
        for(let i=0;i<5;i++){
            let img=document.createElement('img')
            img.src=obj[i].avatar_url;
            img.width=50;
            img.height=50;
            a==1?followers.append(img):following.append(img)
        }
    }
     
}

function displayUI(val){
    userImg.src=val.avatar_url;
    handle.innerText=`@${val.login}`;

 if(val.followers>0){
        let xhr=new XMLHttpRequest()
        xhr.open('GET',val.followers_url);
        xhr.onload=function followers(){
            sideLogo(JSON.parse(xhr.response),1)
            
        }
        xhr.send();
}   

 if(val.following>0){
    let xhra=new XMLHttpRequest()
    xhra.open('GET',val.following_url.replace('{/other_user}',``));
    xhra.onload=function following(){
        sideLogo(JSON.parse(xhra.response),2)
       
    }
    xhra.send();
}

}



submit.addEventListener("click",generatePic)

function displayCat(obj){
let img=document.createElement(`img`);
img.src=obj[0].url
img.width=250;
img.margin=20;
carPic.append(img)

}
function generatePic(){
    carPic.innerHTML=""
    let xhr=new XMLHttpRequest();
    xhr.open(`GET`,`https://api.thecatapi.com/v1/images/search?limit=1&size=full`);
    xhr.onload=function catLoad(){
displayCat(JSON.parse(xhr.response))
}
xhr.send()
}

  }

//didnt reset the followers on every keyCode==13>do later
