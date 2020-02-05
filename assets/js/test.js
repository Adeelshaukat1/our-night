$(document).ready(function(){

    $(".cards-for-genre").hide();

        $("#btnYes").on("click", function(){
        $("#section").css("background-image", "url(assets/images/landscape-1328858_1920.png)")
        $(".title").text("Please select the following genre:");
        $(".yes").hide();
        $(".cards-for-genre").show();

    })


})