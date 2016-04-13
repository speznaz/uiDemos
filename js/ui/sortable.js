$(document).ready(function() {

    $(".source, .target").sortable({
      connectWith: ".connected"
    }).on('dragend', function(e, ui){
        console.info("sortup");
        console.info(e);
        console.info(ui);
    });
    
});