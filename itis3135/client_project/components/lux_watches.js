// $(document).ready(function(){
//     $.getJSON("l_watches.json", function(data){
//         $.each(data, function(){
//             $.each(this, function(key, value){
//                 $("#l_watches").append(
//                     "<figure><img src='"+ value.image +"' height = 150>" +
//                     "<figcaption class='cap'><em>"+value.caption+"</em></figcaption></figure>" +
//                     "<h3>" + value.full_name + "</h3>" +
//                     "<ul class='order menu'><li>" + value.bullet1 + "</li>" +
//                     "<li>" + value.bullet2 + "</li>" +
//                     "<li>" + value.bullet3 + "</li></ul>"
//                 );
//             });
//         });
//     });
// });

//both work

    $(document).ready(function() {
    $.ajax({
        type: "get",
        url: "l_watches.json",
        beforeSend: function() {
            $("#l_watches").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#l_watches").html("");
            $.each(data, function(){
                $.each(this, function(key, value){
                    $("#l_watches").append("<figure><img src='"+ value.image +"' height = 150>" +
                    "<figcaption class='cap'><em>"+value.caption+"</em></figcaption></figure>" +
                    "<h3>" + value.full_name + "</h3>" +
                    "<ul class='order menu'><li>" + value.bullet1 + "</li>" +
                    "<li>" + value.bullet2 + "</li>" +
                    "<li>" + value.bullet3 + "</li></ul>");
                });
            });
        }
    });
    });