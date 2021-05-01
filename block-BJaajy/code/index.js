//1
let p1=new Promise((res,rej)=>{
    res(setTimeout(console.log(`one second`),1000));
});
let p2=new Promise((res,rej)=>{
    res(setTimeout(console.log(`two second`),2000));
});
let p3=new Promise((res,rej)=>{
    res(setTimeout(console.log(`three second`),3000));
});
let p4=new Promise((res,rej)=>{
    res(setTimeout(console.log(`four second`),4000));
});

Promise.all([p1,p2,p3,p4]).then(console.log)
//2
let username=[
    "AaronR2020",
    "Gitify",
    "Sumanth",
    "CharleneVas",
]
Promise.all(username.map(user=>{
        fetch(`https://www.github.com/users/${user}`).then(val=>val.json()).catch(console.log).then(console.log)
}
))
//3
const promise1 =fetch(`https://random.dog/woof.json`).then(data=>data.json()
    ).finally(console.log)

  
  const promise2 = fetch(`https://aws.random.cat/meow`).then(data=>data.json()
    ).finally(console.log)

  
  Promise.race([promise1, promise2]).then((value) => {
    console.log(value);
  });
//4
const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000)
);

data=Promise.allSettled([one,two,three]).finally(console.log);
