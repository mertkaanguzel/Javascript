'use strict';

let listItems = document.getElementsByTagName("li");

for(let i=0; i < listItems.length; i++){ 
    let closeButton = document.createElement("span"); //close icon'u span etiketi içersinde olduğu için yeni bir span elemanı oluşturup ve closeButton değişkenine atadık.
    closeButton.textContent = "\u00D7"; // listede çarpı işaretini oluşturabilmek için "\u00D7" kullandık.
    closeButton.classList.add("close"); // bu butona close class'ını ekledik.
    //closeButton.onclick = removeButton; // ve çarpı işaretine basınca removeButton fonsiyonunu çalıştırması gerektini söyledik.
    listItems[i].appendChild(closeButton); // closeButton değişkenini ullength'in 0, 1, 2... indexlerine ekleyerek aslında for döngüsünü kullanarak var olan listeye çarpı butonunu ekledik. 
    //listItems[i].onclick = check; // üzerine tıklayınca check fonksiyonunu çalıştır dedik.
}

console.log(listItems);

function newElement() {}