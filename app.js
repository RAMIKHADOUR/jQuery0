$(document).ready(function(){
    $("#color-range").on("input change",function(){
        $("body").css("background-color",$(this).val());

        //change 
        if($("#color-range").val() <= "#242424") {
            $("h1").css("color" , "white");
        }else{
            $("h1").css("color" , "black");
        }
    });
});