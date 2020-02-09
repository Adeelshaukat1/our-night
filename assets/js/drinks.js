$("#buttonAlcohol-1").on("click", function(){
    $(".alcohol-question").hide();
    $(".cards-for-alcohol").show();
})

$("#buttonAlcohol-2").on("click", function(){
    $(".cards-for-alcohol").hide();
})

$(".alcoholPref").on("click", function(){
    var alcoholType = $(this).attr("data-alcohol")
    console.log(alcoholType)
    $(".cards-for-alcohol").hide();
    $(".results-page").show();
})



