/**
 * Created by Elijah on 2/27/2017.
 */
//Check off specific todos by clicking
$("li").click(function(){
    console.log($(this).css("color"));
    // if($(this).css("color") == "rgb(128, 128, 128)"){
    //     $(this).css("color", "black");
    // }

    $(this).css({
        color: "gray",
        textDecoration: "line-through"
    });
});
