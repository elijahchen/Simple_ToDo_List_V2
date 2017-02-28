/**
 * Created by Elijah on 2/27/2017.
 */
//Check off specific todos by clicking
$("ul").on("click", "li", function () {
    //Selecting the li within the ul makes new todos retroactive
    $(this).toggleClass("completed");
});

//Click on X to delete todos
$("ul").on("click", "span", function (event) {
    //Selecting the li within the ul makes new todos retroactive
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation(); //Stops order bubbling
});

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) { //If enter key is fired
        //Storing values from input
        var todoText = $(this).val();
        $(this).val(""); //Sets new value of an empty string
        //Create new li and add to parent ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-pencil-square-o").click(function () {
   $("input[type='text']").fadeToggle();
});