console.clear();
var playlistDiv = document.getElementById('playlist-div');
var iframe = document.getElementById('iframe');
var view = document.getElementById('view');
var title = document.getElementById('desc-title');
var para = document.getElementById('desc-para');

function createPlayCard(url,title,id){
    var card = document.createElement('div');
    card.classList.add('card');
    card.id = id;

    var img = document.createElement('img');
    img.classList.add('img-card');
    img.src = url;
    img.alt = title;
    card.appendChild(img);

    var para = document.createElement('p');
    para.classList.add('card-title')
    para.innerHTML = title;
    card.appendChild(para);

    return card;
}

var xhttp = new XMLHttpRequest();
xhttp.open('get','https://5d76bf96515d1a0014085cf9.mockapi.io/playlist',true);
xhttp.send();

xhttp.onreadystatechange = function(){
    if(this.readyState === 4){
        var arr = JSON.parse(this.responseText)
        for(var i=0; i<arr.length; i++){
           var newCard = createPlayCard(arr[i].thumbnail, arr[i].title, arr[i].id);
            playlistDiv.appendChild(newCard);
        }
    }
}


var id = window.location.search.split('=')[1];
var vhttp = new XMLHttpRequest();
vhttp.open('get','https://5d76bf96515d1a0014085cf9.mockapi.io/video/'+id,true);
vhttp.send();

vhttp.onreadystatechange=function(){
    if(this.readyState === 4){
        var obj = JSON.parse(this.responseText);
        iframe.src = "https://player.vimeo.com/video/"+ obj.vimeoId;
        view.innerText = obj.views;
        title.innerText = obj.title;
        para.innerText = obj.description;
    }
}