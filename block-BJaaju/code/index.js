//access key
//  iypF7_0y1hjR326FuDXHgHvsfNOV04Bbhu-PLd7ywYQ

//client_id
// /?client_id=iypF7_0y1hjR326FuDXHgHvsfNOV04Bbhu-PLd7ywYQ

const url=`https://api.unsplash.com/photos/?client_id=iypF7_0y1hjR326FuDXHgHvsfNOV04Bbhu-PLd7ywYQ`;
const root=document.querySelector(".root");
const search=document.querySelector(`#search`)
function fetch(url,a=1){
    root.innerHTML="";
    let xhr=new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.onload=function onSuccess(){
        a==1?img=JSON.parse(xhr.response):console.log(img=JSON.parse(xhr.response).results);;
        console.log("ON SUCCESS");
            img.forEach(obj => {
                let li=document.createElement('li');
                let img=document.createElement('img');
                img.src=obj.urls.small;
                li.append(img);
                root.append(li);
        })
    }
        
    xhr.onerror=function error(){
        console.error("404 Page not found");
    };
    xhr.send()
}

fetch(url)

search.addEventListener(`keyup`,searchfn)
function searchfn(e){
 if(e.keyCode==13){
     query=e.target.value
     let urlSearch=`https://api.unsplash.com/search/photos?query=${query}&client_id=iypF7_0y1hjR326FuDXHgHvsfNOV04Bbhu-PLd7ywYQ`;
     fetch(urlSearch,2);
 }
}
