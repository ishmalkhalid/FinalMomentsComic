let closedbook = document.getElementById('closedbook');
let openedbook = document.getElementById('openbook');

let bookmark1 = document.getElementById('bookmark1');
let bookmark2 = document.getElementById('bookmark2');
let bookmark3 = document.getElementById('bookmark3');
let bookmark4 = document.getElementById('bookmark4');
//let bookmarks = document.getElementsByClassName('bookmark');

let hideclosedbook = () => {
    closedbook.style.display = "none";
    openedbook.style.display = "block";
    bookmark1.style.display = "block";
    bookmark2.style.display = "block";
    bookmark3.style.display = "block";
    bookmark4.style.display = "block";
}

closedbook.addEventListener('click', hideclosedbook)

let openclosedbook = () => {
    closedbook.style.display = "block";
    openedbook.style.display = "none";
    bookmark1.style.display = "none";
    bookmark2.style.display = "none";
    bookmark3.style.display = "none";
    bookmark4.style.display = "none";
}

openedbook.addEventListener('click', openclosedbook)
