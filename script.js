const favIcon = document.querySelector('#favicon');
console.log(favIcon)

function changeGreen(){
    favIcon.setAttribute('href' , './image/faviconTwo.png');
}
function changeRed(){
    favIcon.setAttribute('href' , './image/favicon.png');
}