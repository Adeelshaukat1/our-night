$(document).ready(function(){
  $(".cards-for-cuisines").hide();
  $(".cards-for-genre").hide();
  $(".cards-for-rating").hide();
  $(".food-question").hide();
  $(".cards-for-diets").hide();
  $(".alcohol-question").hide();
  $(".cards-for-alcohol").hide();
  $(".results-page").hide();
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

var movieID = ""


$(".movieType").on("click",function(event){
    event.preventDefault();
    $("#section").css("background-image", "url(assets/images/landscape-1328858_1920.png)")
    $(".cards-for-rating").show();
    $(".title").text("Please select the rating: ")




    movieID = $(this).attr("data-movieID")
    console.log(movieID)
    var movieCard = document.querySelector(".cards-for-genre")
    movieCard.setAttribute("style", "display: none");
    return (movieID)
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
// asks you if you want dinner
console.log(movieID)
$(".movieCert").on("click",function(event,){
    $(".food-question").show();
    event.preventDefault();
    
    $("#section").css("background-image", "url()")
    $(".title").text("Are you interested in making a delicious dinner tonight?")

    var movieCert = $(this).attr("data-movieCert")
    var movieCertEl = document.querySelector(".cards-for-rating")
    movieCertEl.setAttribute("style", "display: none");
    console.log(movieCert);
    console.log(movieID)
    var genreURL = "&with_genres="+movieID;
    var certURL = "&certification_country=US&certification="+movieCert;
    var movieURL = "https://api.themoviedb.org/3/discover/movie?api_key=f6d55af2d8f9fea21ad4afda60e788bf&language=en-US"+certURL+genreURL+"&region=US&include_adult=false&include_video=true&page=1"
    console.log(movieURL)
    $.ajax({
        url: movieURL,
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
    }
  }






