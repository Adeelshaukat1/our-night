
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
        
        // Get 5 random recipies
        var noPreferenceURL = "https://api.spoonacular.com/recipes/random?number=5&apiKey=487918d7ad3042b090e2c9dec14801c7";
    
        $.ajax({
        method: "GET",
        url: noPreferenceURL    
        }).then(function(response) {
            console.log(response);
            console.log(response.recipes.length);
    
        for (var i = 0; i < response['recipes'].length; i++) {
            var image = response['recipes'][i].image;
            var sourceURL = response['recipes'][i].sourceUrl;
            var titleText = response['recipes'][i].title;
            console.log(image);
            console.log(sourceURL);
            console.log(titleText);
    
            var title = $("<h1>");
            title = title.text(titleText);
            $(".images").append(title);
            console.log(title);
    
            var a = $("<a>");
                a = a.attr("href", sourceURL);
                a = a.attr("target", "_blank");
                $(".images").append(a);
                console.log(a)
            
            var newImage = $("<img>");
                newImage = newImage.attr("src", image);
                a.append(newImage);
        }
    
        // Store variables from response
        var image = response['recipes'][0].image;
        var sourceURL = response['recipes'][0].sourceUrl;
        var titleText = response['recipes'][0].title;
    
        // Incorporate title into picture as well
        var title = $("<h1>");
        title = title.text(titleText);
        $(".images").append(title);
    
    
        // Create link for picture
        var a = $("<a>");
        a = a.attr("href", sourceURL);
        a = a.attr("target","_blank");
        $(".images").append(a);
    
        // Link picture to the document
        var newImage = $("<img>");
        newImage = newImage.attr("src", image);
        a.append(newImage);
    
    
        
        
        })
        })
    