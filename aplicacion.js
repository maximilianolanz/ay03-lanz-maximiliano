$(document).ready(function(){

    var change = $("#unu");

    change.mouseenter(function(){
        $("#unu").css("background-color", "red");
    });
    
    var boton1 = $(".boton1");
    
    boton1.click(function(){
        $("#titulo").fadeTo("fast",0)
    });

    var boton2 = $(".boton2");
    
    boton2.click(function(){
        $("#titulo").fadeTo("fast",1)
    });

    var boton3 = $(".boton3");
    
    boton3.click(function(){
        $("#titulo").text("Ayudantia 5 uwu")
    });

});