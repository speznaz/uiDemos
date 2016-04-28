$(document).ready(function() {

    $(".source, .target").sortable({
      connectWith: ".connected"
    }).on('dragend', function(e, ui){
        console.info("sortup");
        console.info($(this.closest('.clanx-shift-item')).data('shift-id'));

    });

});