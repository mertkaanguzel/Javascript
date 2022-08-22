'use strict';

function showTime() {
    const today = new Date();
    let day = today.toLocaleDateString('tr-TR',{weekday: 'long'});
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();  
    document.getElementById('myClock').innerHTML =  `${hour}:${minutes}:${seconds} ${day}`;
    setTimeout(showTime, 1000);
}

let userName = prompt('Adınız nedir?');
document.getElementById('myName').innerHTML = userName;

showTime();