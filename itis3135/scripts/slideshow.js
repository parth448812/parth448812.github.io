$(document).ready(function(){

    $("#pics a").each(function(){
        var swap = new Image();
        swap.src = $(this).attr("href");
    });

    $("#pics a").click(function(evt){
        var imgLoc = $(this).attr("href");
        $("#first").attr("src", imgLoc);

        evt.preventDefault();
    });
    
    $("li:first-child a").focus();

});
