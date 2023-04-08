$(document).ready(function() {
	
    $("#nav_list li a").click(function(){
        $.ajax({
            type: "get",
            url: "json_files/sorkin.json",
            dataType: "json",
            success: function(data) {
            $.each(data, function(){
                $.each(this, function(key, value){
                    $("main").append(
                        "<h1>" + value.title + "</h1>" + "<h2>" + value.month + "</h2>"
                        + "<h3>" + value.speaker + "</h3>" + 
                        '<img src="' + value.image + '" alt= "json_pic">' + value.text
                    )
                });
            });
        }
    });
    });

    $("#nav_list li a").click(function(){

        $.ajax({
            type: "get",
            url: "json_files/sorkin.json",
            error: function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: "json",
            success: function(data) {
            $.each(data, function(){
                $.each(this, function(key, value){
                    $("main").append(
                        "<h1>" + value.title + "</h1>" + "<h2>" + value.month + "</h2>"
                        + "<h3>" + value.speaker + "</h3>" + 
                        '<img src="' + value.image + '" alt= "sorkin_pic">' + value.text
                    )
                });
            });
        }
    });
    });
    
    $("#nav_list li a").click(function(){
        $.ajax({
            type: "get",
            url: "json_files/chua.json",
            error: function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: "json",
            success: function(data) {
            $.each(data, function(){
                $.each(this, function(key, value){
                    $("main").append(
                        "<h1>" + value.title + "</h1>" + "<h2>" + value.month + "</h2>"
                        + "<h3>" + value.speaker + "</h3>" + 
                        '<img src="' + value.image + '" alt= "chua_pic">' + value.text
                    )
                });
            });
        }
    });
    });
    
    $("#nav_list li a").click(function(){
        $.ajax({
            type: "get",
            url: "json_files/sampson.json",
            error: function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: "json",
            success: function(data) {
            $.each(data, function(){
                $.each(this, function(key, value){
                    $("main").append(
                        "<h1>" + value.title + "</h1>" + "<h2>" + value.month + "</h2>"
                        + "<h3>" + value.speaker + "</h3>" + 
                        '<img src="' + value.image + '" alt= "sampson_pic">' + value.text
                    )
                });
            });
        }
    });
    });
});
