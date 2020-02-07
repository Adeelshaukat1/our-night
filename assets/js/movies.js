$(document).ready(function(){
    $(".cards-for-cuisines").hide();
    $(".cards-for-genre").hide();
    $(".cards-for-rating").hide();
    $(".food-question").hide();
    $(".cards-for-diet").hide();

    function showHide(){
        $("#section").css("background-image", "url(assets/images/landscape-1328858_1920.png)")
        $(".title").text("Please select the following genre:");
        $(".yes").hide();
        $(".cards-for-genre").show();
        $(".is-rounded").hide();
        $(".cards-for-rating").hide();
    }
    $(".yes").on("click", showHide);

})

//when user clicks genre run this function

$(".movieType").on("click",function(event){
    event.preventDefault();
    $("#section").css("background-image", "url(assets/images/landscape-1328858_1920.png)")
    $(".cards-for-rating").show();
    $(".title").text("Please select the rating: ")

    


    var movieID = $(".movieType").attr("data-movieID")
    console.log(movieID)
    var movieCard = document.querySelector(".cards-for-genre")
    movieCard.setAttribute("style", "display: none");
  })
  $('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));



});
/*start the selection of rating*/


$(".movieCert").on("click",function(event){
    $(".food-question").show();
    event.preventDefault();
   
    $("#section").css("background-image", "url()")
    $(".title").text("Are you interested in making a delicious dinner tonight?")
  
    var movieCert = $(this).attr("data-movieCert")
    var movieCertEl = document.querySelector(".cards-for-rating")
    movieCertEl.setAttribute("style", "display: none");


  })





