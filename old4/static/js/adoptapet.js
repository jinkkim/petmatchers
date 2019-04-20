
//Let's remember what you select
var species = "";
if ($("h1").text() == "🐶"){
    species = "Dog";
} else if ($("h1").text() == "🐱"){
    species = "Cat";
} else {

}

var breed = "";
var size = "";
var gender = "";
var age = "";
var color = "";

var search_key = {
    "species": species,
    "breed": breed,
    "size": size,
    "gender": gender,
    "age": age,
    "color": color
};

$(function(){

    //update button text and variable according to what you select

    $("#breed-selector a").on('click', function(){
        $("#breed-button").text($(this).text());
        $("#breed-button").val($(this).text());
        breed = $(this).text();
        search_key["breed"] = breed;
    });

    $("#size-selector a").on('click', function(){
        $("#size-button").text($(this).text());
        $("#size-button").val($(this).text());
        size = $(this).text();
        search_key["size"] = size;
    });

    $("#gender-selector a").on('click', function(){
        $("#gender-button").text($(this).text());
        $("#gender-button").val($(this).text());
        gender = $(this).text();
        search_key["gender"] = gender;
    });

    $("#age-selector a").on('click', function(){
        $("#age-button").text($(this).text());
        $("#age-button").val($(this).text());
        age = $(this).text();
        search_key["age"] = age;
    });

    $("#color-selector a").on('click', function(){
        $("#color-button").text($(this).text());
        $("#color-button").val($(this).text());
        color = $(this).text();
        search_key["color"] = color;
    });

    // send the variables with url through POST method
    $("#search").on("click", function(){
        $.post("/search_this", {"search_data": JSON.stringify(search_key)}, function(){    
            window.location.href = '/adoptapet'   
        });
        
    })

});




