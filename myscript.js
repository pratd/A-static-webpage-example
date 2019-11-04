$(document).ready(function() {
    // Gets the video src
    var $videoSrc;  

    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
    });
    console.log($videoSrc);
    // run when the modal is open

    $('#myModal').on('shown.bs.modal', function (e) {
        // set the video src to autoplay 
        $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
    })
        // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
        // stop video
        $("#video").attr('src',$videoSrc); 
    })      
      
    // document ready  
    });
    
