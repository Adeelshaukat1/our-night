$(".food-button").on("click", function(){
    $(".title").hide();
    $(".food-button").hide();
    showFoodOptions();
})


function showFoodOptions(){
    $(".cards-for-cuisines").show();
}

 $(".foodCuisine").on("click",function(event){
    event.preventDefault();
    var foodType = $(this).attr("data-foodCuisine")
    var foodTypeEl = document.querySelector(".cards-for-cuisines")
    foodTypeEl.setAttribute("style", "display: none");
    $(".cards-for-diet").show();
    console.log(foodType)
  })


  $(".foodDiet").on("click",function(event){
    event.preventDefault();
    var foodDiet = $(this).attr("data-foodDiet")
    console.log(foodDiet)
    var foodDietEl = document.querySelector(".cards-for-diets")
    foodDietEl.setAttribute("style", "display: none");
    // $(".cards-for-diet").show();
   
  })



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

