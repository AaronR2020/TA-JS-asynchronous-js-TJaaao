let root=document.querySelector(".book_list")
fetch(`https://www.anapioficeandfire.com/api/books`).then(obj=>obj.json()).then(
    obj=>obj.forEach(book=>{
        let li=document.createElement('li')
        console.log(book,book.name,book.authors[0],book.characters.length);
        let h2=document.createElement('h2');
        let h4=document.createElement('h4');
        let button=document.createElement('button');
        let a=document.createElement('a');
        h2.innerText=`${book.name}`
        h4.innerText=`${book.authors[0]}`
        a.innerText=`show characters (${book.characters.length})`;
        a.href='/charlist.html'
        li.append(h2);
        li.append(h4);
        button.append(a)
        li.append(button);
        root.append(li);
    })
)

