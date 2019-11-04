/*$(document).ready(function(){
    var $modalgallery, $img, $modalImg;

   $modalgallery= $('.modalgallery');
   $img = $("myImg");
   $modalImg= $("img01");
   $img.onclick = function(){
       $modalgallery.style.display = "block";
       $modalImg.src = this.src;
   }
})*/
/*$(document).ready(function(){    
    $("img01").click(function(){    
         $("img01").animate({height: "300px"});
     });
 });*/

 /*$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});*/
window.onload = function() { // add window.onload here and set it equal to a function
    var modal = document.getElementById("modalgallery");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementsByClassName("myImg");
    var modalImg = document.getElementById("img01");
    for (i=0; i<img.length; i++) {
        img[i].onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
          }
    }
    /*img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    }*/
    // stop playing the image when I close the modal
    /*$('#modalgallery').on('hide.bs.modal', function (e) {
        // stop video
        modal.style.display = "none"; 
    })*/
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("closegallery")[0];
    

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }
  } // close the function