/* <li>
<div class="block">
    <img src="#" alt="">
    <div class="content">
        <h2>Title</h2>
        <p>Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula</p>
        <button>Read More</button>
    </div>

</div>
</li> */
let root=document.querySelector('.news')
fetch(`https://test.spaceflightnewsapi.net/api/v2/articles?_limit=30`)
.then(val=>val.json()).then(data=>{
    //create ui
    data.forEach(val => {
  console.log("UI Entered");
        const li=document.createElement('li'); 
        const div=document.createElement('div');
        div.classList.add("block");
        const img=document.createElement('img');
        img.src=val.imageUrl;
        const div_inner=document.createElement('div');
        div_inner.classList.add("content");
        const h2=document.createElement('h2');
        h2.innerHTML=val.title;
        const p=document.createElement('p');
        p.innerHTML=val.summary;
        const button=document.createElement('button');
        button.innerText=`Read More`;
        root.append(li)
        li.append(div);
        div.append(img);
        div.append(div_inner);
        div_inner.append(h2);
        div_inner.append(p);
        div_inner.append(button)






    });
})