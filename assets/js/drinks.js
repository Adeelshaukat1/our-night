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
    getDrink(alcoholType)
})

var userChoice = $("#user-choice").val()
var currentDrink;
var drinkImg;
var instr;

function getDrink(userChoice) {
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (alcohol) {
        drinkImg = alcohol.drinks[0].strDrinkThumb
        console.log(drinkImg);
        instr = alcohol.drinks[0].strInstructions
        var octane = alcohol.drinks[0].strAlcoholic
        // console.log(alcohol)
        console.log(octane);
        // console.log(alcohol);
        if (userChoice === "nonalcoholic" && octane !== "Alcoholic" && octane !== "Optional alcohol") {
            getInfo(alcohol)
            return
        } else if (userChoice === "alcoholic" && octane === "Alcoholic") {
            getInfo(alcohol)
            return
        }
        console.log(currentDrink);
        getDrink(event);
    });
};


function getInfo(alcohol){
    currentDrink = alcohol
    if (drinkImg) {
        var img = $("<img>")
        img.attr("src", drinkImg)
        img.appendTo(".img-here")
    }
    console.log(instr);
    if (instr) {
        var instrDiv = $("<p>")
        instrDiv.text(instr)
        console.log(instrDiv.text)
        instrDiv.appendTo(".img-here")
    }
    let totalIngredients = []
    let totalMeasure = []
    var drink = alcohol.drinks[0]
    for(var i= 1 ; i < 16; i++){
      var ingredientSts = "strIngredient"+i
      var ingredientSt = drink[ingredientSts]
      var measureSts = "strMeasure"+i
      var measureSt = drink[measureSts]
      if(ingredientSt !== null){
        totalIngredients.push(ingredientSt)
        totalMeasure.push(measureSt)
        console.log(ingredientSt)
        var ingredLi = $("<li>")
        $(ingredLi).text(ingredientSt)
        $("#ingredients").append(ingredLi)
        var measureLi = $("<li>")
        $(measureLi).text(measureSt)
        $("#measurements").append(measureLi)
        }
      }
console.log(totalIngredients)
console.log(totalMeasure)
}
