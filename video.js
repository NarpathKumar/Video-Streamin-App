console.clear();
var mainGrid = document.getElementById('grid');
var videoDiv = document.getElementById('video-div');
var iframe = document.getElementById('video-player');
var views = document.getElementById('views');
var videoTitle = document.getElementById('video-title');
var videoDesc =document.getElementById('video-desc')
var xhttp = new XMLHttpRequest();
xhttp.open('get','https://5d76bf96515d1a0014085cf9.mockapi.io/playlist',true)
xhttp.send();
xhttp.onreadystatechange = function(){
    if(this.readyState === 4){
        var arr = JSON.parse(this.responseText);
        for(var i=0; i<arr.length; i++){
           console.log(createCard(arr[i].id, arr[i].title, arr[i].thumbnail));
            mainGrid.appendChild(createCard(arr[i].id, arr[i].title, arr[i].thumbnail));
        }
    }
}



function createCard(ids,title,thumbnail){
    var card = document.createElement('div');
    card.id= ids
    card.classList.add('cards');

    var a = document.createElement('a')
    a.href="./playlist.html?vid="+card.id
    var image = document.createElement('img');
    image.src = thumbnail;
    image.alt = title;
    image.classList.add('card-thumbnail')
    a.appendChild(image)

    var para = document.createElement('p');
    para.innerText = title;
    para.classList.add('card-desc');
    a.appendChild(para)
    card.appendChild(a)
    return card;

}

var vHttp = new XMLHttpRequest();
vHttp.open('get','https://5d76bf96515d1a0014085cf9.mockapi.io/video',true)
vHttp.send();
