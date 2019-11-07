$(document).ready(function(){

    
    // select and hide pop up divs
    var popUpdivs = $(".popUpWrapper").children();
    // console.log(popUpdivs);
    $(popUpdivs).hide();

    // dynamically hide and show hotspot pop up divs
    $("body").click(function(event) {

        var activeSpot = event.target;

        // get id for hotspot clicked
        var spotClicked = event.target.getAttribute('id');
        // console.log(spotClicked);

        // get coinciding pop up div class
        var spotClass = "."+spotClicked;
        // console.log("this is the new class" + spotClass);

        $(spotClass).show(function() {
            $(this).show(500, "linear").addClass("active");
            if ($(this).hasClass("active")) {
                $(activeSpot).addClass("activeSpot");
            }
        });

        if($(spotClass).hasClass("active")) {
            $(spotClass).hide(500, "linear").removeClass("active");
            if (!$(this).hasClass("active")) {
                $(activeSpot).removeClass("activeSpot");
            } 
        }
    });
});