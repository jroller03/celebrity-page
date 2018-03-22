$(document).ready(function(){
  $("form#info").submit(function(event){

    var name = $("input#name").val();
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var food = $("select#food").val();
    var movie = $("select#movie").val();

    if (!name || !age){
      alert("Please fill out all the forms!");
      return;
    }

    if (gender === 'male'){
      if (age < 30){
        $(".celebrity").text("Margot Robbie");
        $("#match").show();
      }else if (30 <= age && age <=50) {
        $(".celebrity").text("Scarlet Johansson");
        $("#match").show();
      } else if (age > 50){
        $(".celebrity").text("Meryl Streep");
        $("#match").show();
      }

    } else {
        if (age < 30) {
          $(".celebrity").text("Justin Beiber");
          $("#match").show();
        } else if (30 <= age && age <=50) {
          $(".celebrity").text("Justin Timberlake");
          $("#match").show();
        } else if (age > 50){
          $(".celebrity").text("George Clooney");
          $("#match").show();
        }
    }
    event.preventDefault();
  });
});
