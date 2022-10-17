let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://kabayanika.com/wp-content/uploads/2022/10/xam-background.png') {
      myImage.setAttribute('src','https://kabayanika.com/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-08-at-6.46.33-PM.jpeg');
    } else {
      myImage.setAttribute('src','https://kabayanika.com/wp-content/uploads/2022/03/5B2121C2-F239-4CD6-BF29-202248FD2527.jpeg');
    }
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
