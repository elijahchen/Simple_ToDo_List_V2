/**
 * Created by Elijah on 2/27/2017.
 */
//Check off specific todos by clicking
$("li").click(function(){
    $(this).toggleClass("completed");
});

//Click on X to delete todos
$("span").click(function(event){
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation(); //Stops order bubbling
});
