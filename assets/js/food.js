$("#confirmButton").click(function(event) {
    event.preventDefault();

    var intolerances = $("#intolerance").val();
    var cuisine = $("#cuisine").val();
    var diet = $("#diet").val();
    var apiKey = "8d664649a43e494e83023929c061365f";
    var randomURL = "https://api.spoonacular.com/recipes/random?" + "&apiKey=" + apiKey;
    var queryURL = "https://api.spoonacular.com/recipes/complexSearch?cuisine=" + cuisine + "&diet=" + diet + "&intolerances=" + intolerances + "&apiKey=" + apiKey;
    var randomIndex = Math.floor(Math.random() * 10) + 1;

    $.ajax({
    method: "GET",
    url: queryURL
    }).then(function(response) {
    console.log("This is the non random response!");
    console.log(response);
    console.log(response['results'][randomIndex]['title']);
    console.log('-------------------------------------------');

    $.ajax({
        method: "GET",
        url: randomURL
    }).then(function(randomResponse){
    console.log("This is the random response!");    
    console.log(randomResponse)
    console.log(randomResponse.recipes[0]['title']);
    console.log("------------------------------------------");
    })
    });

    })

    
