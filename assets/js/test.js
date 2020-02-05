$(document).ready(function(){

    $(".cards-for-genre").hide();

    
    function showMovies () {
        $("#section").css("background-image", "url(assets/images/landscape-1328858_1920.png)")
        $(".title").text("Please select the following genre:");
        $(".yes").hide();
        $(".cards-for-genre").show();
        $(".is-rounded").attr("src", "https://media.giphy.com/media/OK5LK5zLFfdm/giphy.gif");
    }

    $("#btnYes").on("click", showMovies)

    

    

})