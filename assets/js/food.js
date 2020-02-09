// do you want food or not
$(".food-button").on("click", function(){
    $(".title").hide();
    $(".food-button").hide();
    showFoodOptions();
})


function showFoodOptions(){
    $("#section").css("background-image", "url()")

    $(".cards-for-cuisines").show();
}

var foodType = '';
// this is where when you clock on cuisine it chgnes to diet 
 $(".foodCuisine").on("click",function(event){
    event.preventDefault();
    var foodType = $(this).attr("data-foodCuisine")
    var foodTypeEl = document.querySelector(".cards-for-cuisines")
    foodTypeEl.setAttribute("style", "display: none");
    $(".cards-for-diets").show();
    console.log(foodType);
    return foodType;
  })


  $(".foodDiet").on("click",function(event){
    event.preventDefault();
    var foodDiet = $(this).attr("data-foodDiet")
    console.log(foodDiet)
    var foodDietEl = document.querySelector(".cards-for-diets")
    foodDietEl.setAttribute("style", "display: none");
    // $(".cards-for-diet").show();
    var tags = foodType + ',' + foodDiet;
    // Get 5 random recipies
    var noPreferenceURL = "https://api.spoonacular.com/recipes/random?number=5&tags=" + tags + "&apiKey=487918d7ad3042b090e2c9dec14801c7";
    $(".alcohol-question").show();
        $.ajax({
        method: "GET",
        url: noPreferenceURL    
        }).then(function(response) {
    
        for (var i = 0; i < response['recipes'].length; i++) {
            var image = response['recipes'][i].image;
            var sourceURL = response['recipes'][i].sourceUrl;
            var titleText = response['recipes'][i].title;
            console.log(image);
            console.log(sourceURL);
            console.log(titleText);

            var title = $("<h1>");
            title = title.text(titleText);
    
            var a = $("<a>");
                a = a.attr("href", sourceURL);
                a = a.attr("target", "_blank");

    
            
            var newImage = $("<img>");
                newImage = newImage.attr("src", image);
   
  }})



$("#confirmButton").click(function(event) {
    
    event.preventDefault();


    var intolerances = $("#intolerance").val();
    var cuisine = $("#cuisine").val();
    var diet = $("#diet").val();
    var apiKey = "8d664649a43e494e83023929c061365f";
    var randomURL = "https://api.spoonacular.com/recipes/random?" + "&apiKey=" + apiKey;
    var queryURL = "https://api.spoonacular.com/recipes/complexSearch?cuisine=" + cuisine + "&diet=" + diet + "&intolerances=" + intolerances + "&apiKey=" + apiKey;

    $.ajax({
    method: "GET",
    url: queryURL
    }).then(function(response) {
    console.log("This is the non random response!");
    console.log(response);


    $.ajax({
        method: "GET",
        url: randomURL
    }).then(function(randomResponse){
    console.log("This is the random response!");    
    console.log(randomResponse)
    })
    });

    })
  })
