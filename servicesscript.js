$(document).ready(function(){
    var $modalgallery, $img, $modalImg;

   $modalgallery= $('.modalgallery');
   $img = $("myImg");
   $modalImg= $("img01");
   $img.onclick = function(){
       $modalgallery.style.display = "block";
       $modalImg.src = this.src;
   }
})

/*var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}*/