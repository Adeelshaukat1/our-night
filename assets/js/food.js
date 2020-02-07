
    // Click event to start ajax call
    $("#confirmButton").click(function(event) {
        event.preventDefault();
    
        // Store information
        var cuisine = $("#cuisine").val();
        var diet = $("#diet").val();
    
        // Information for URLs
        var apiKey = "487918d7ad3042b090e2c9dec14801c7";
        var queryURL = "https://api.spoonacular.com/recipes/complexSearch?cuisine=" + cuisine + "&diet=" + diet + "&apiKey=" + apiKey;
        console.log(queryURL);
    
    
        // Ajax call for response
        $.ajax({
        method: "GET",
        url: queryURL
        }).then(function(response) {
    
        // Make random index to return something random
        var randomIndex = Math.floor(Math.random() * response.results.length) + 1;
    
        // Store random picture as well as the title
        var randompicture = response['results'][randomIndex]['title'];
        var randomImage = response['results'][randomIndex]['image'];
    
        console.log("This is the non random response!");
        console.log(response);
        console.log(randompicture);
        console.log(randomImage);
        console.log('-------------------------------------------');
    
        // Create new images for the received recipies
        var newImage = $("<img>");
        newImage = newImage.attr("src", randomImage);
        $(".images").append(newImage);
        })})
    
    
    
    
    
    
    
    
        
        // NO PREFERENCE AJAX CALL!
        $("#noPreference").click(function(event) {
        event.preventDefault();
        
        // Add variables to query the search
        var cuisine = $("#cuisine").val();
        var diet = $("#diet").val();
        console.log(cuisine);
        var tags = cuisine + ',' + diet;
        console.log(tags)
        // Get 5 random recipies
        var noPreferenceURL = "https://api.spoonacular.com/recipes/random?number=5&tags=" + tags + "&apiKey=487918d7ad3042b090e2c9dec14801c7";
    
        $.ajax({
        method: "GET",
        url: noPreferenceURL    
        }).then(function(response) {
        console.log("This is the response object!!");
        console.log(response);
        console.log("----------------------")
    
        for (var i = 0; i < response['recipes'].length; i++) {
            var image = response['recipes'][i].image;
            var sourceURL = response['recipes'][i].sourceUrl;
            var titleText = response['recipes'][i].title;
            console.log("Here is food #" + i + 1);
            console.log("DIET:")
            console.log(response['recipes'][i]['diets']);
            console.log("CUISINE:")
            console.log(response['recipes'][i]['cuisines']);
            console.log("----------------------------")
            var title = $("<h1>");
            title = title.text(titleText);
            $(".images").append(title);
    
            var a = $("<a>");
                a = a.attr("href", sourceURL);
                a = a.attr("target", "_blank");
                $(".images").append(a);
    
            
            var newImage = $("<img>");
                newImage = newImage.attr("src", image);
                a.append(newImage);
        }
    
    
        
        
        })
        })
    
    
    
    
    