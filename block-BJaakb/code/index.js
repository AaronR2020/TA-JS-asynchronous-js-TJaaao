
function fetch(url){
return new Promise(
    (respons,reject)=>{
    const xhr=new XMLHttpRequest();

    xhr.open('GET',url);
    //response
    xhr.onload=()=>{
        console.log("loaded");
        respons(JSON.parse(xhr.response))
    };
    //reject
    xhr.onerror=()=>reject("404-Page not found");
    //the above 2 a cb()-hence dont call directly
    xhr.send();
})
}


fetch(`https://test.spaceflightnewsapi.net/api/v2/articles?_limit=30`).then(function(result) 
{
    console.log(result);
})
.catch(console.log("error"));
