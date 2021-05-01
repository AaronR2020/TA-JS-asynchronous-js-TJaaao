baseURL=`https://github.com/AltCampus/basic-todo-api`;

let data={
    todo:{
    title:`drink water`,
    isComplete: false,
    },
    }
    fetch(url,{
    method:`POST`,//replace POST PUT DELETE
    header:{'content-type': 'application/json'
    },
    body:JSON.stringify(data),
    }).then(console.log)