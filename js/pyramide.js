$(document).ready(function () {
    let clickCount = 0;

    $(".word-container").click(function () {
        clickCount++;

        if (clickCount === 1) {
            // First click, show the list
            $("#konigText").slideToggle();
            $("#konigText_zwei").slideToggle();
            $("#pfeil").slideToggle();
            $("#pfeil_zwei").slideToggle();
        } else if (clickCount === 2) {
            // Second click, show the image
            $("#kronText").slideToggle();

        }
        else if (clickCount === 3)
        {
        }
        else if (clickCount === 4)
        {
            

        }
    });
});