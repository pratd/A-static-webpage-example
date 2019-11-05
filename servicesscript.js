$(document).ready(function(){
  var colap = document.getElementsByClassName("collapsible") ;
  var i;
  for(i=0; i<colap.length; i++) {
    colap[i].addEventListener("click", function(){
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
})//this is for running the more detailed sections