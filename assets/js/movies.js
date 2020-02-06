$(document).ready(function(){


    $("#btnYes").on("click", function(){
        $(".hero-is-success").css("background-image", "url()")
        $(".title").text("Please select the following options:");

    })

    $(document).on("click", ".movieGenre",function(){
      var movieID = $(this).attr("data-movieID")
      console.log (movieID)
    }) 

    $("#FILLWVAR").on("click", function(event){
        event.preventDefault()
        if(cert !==""){
          var cert = $("#cert").val();
          var certURL = "&certification_country=US&certification="+cert}
        if(genre !==""){
          var genre = $("#genre").val();
          var genreURL = "&with_genres="+genre}
        var pageNum = (Math.floor(Math.random()*10))+2
        var newURLmovie = "https://api.themoviedb.org/3/discover/movie?api_key=f6d55af2d8f9fea21ad4afda60e788bf&language=en-US"+certURL+genreURL+"&region=US&include_adult=false&include_video=true&page="+pageNum
        $("#moviepost").empty()
        console.log(newURLmovie)
        $.ajax({
            url: newURLmovie,
            method: "GET",
          }).then(function(response){
            console.log(response)
            var titleCount = response.results.length;
            var moviesPicked = uniqueFive(titleCount)
            console.log(moviesPicked)
            posterImage(moviesPicked, response)
          })
        })
        function createRandom(n){
          return Math.floor(Math.random()*n)
        }
        
        function uniqueFive(array){
          var numArr = []
          var movieShow = []
          var maxNum = 5
          for(i = 0; i < array; i++){
            numArr.push(i)
          }
          console.log(numArr)
          for(i = 0; i < numArr.length; i++){
            var movieSel = createRandom(numArr.length)
            var k = 0 
            while (movieShow.length < maxNum){
              if (movieSel === movieShow[k]){
                movieSel = createRandom(numArr.length);
                console.log(movieSel);
                k = 0
              }
              else if (k === movieShow.length){
                movieShow.push(movieSel);
                break;
              }
              else{
                k++;
              }
            }
          }
          return movieShow;
        }        

        function posterImage(movie, sel){
          for(i=0; i <movie.length; i++){
            var select = movie[i];
            var picURL = sel.results[select].poster_path
            var posterURL = "http://image.tmdb.org/t/p/w154/"+picURL
            console.log(posterURL)
            var movieImg = $("<img>")
            movieImg.attr("src", posterURL)
            $("#moviepost").append(movieImg)
          }
        }
})