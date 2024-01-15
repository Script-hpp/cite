$(document).ready(function () {
    let clickCount = 0;

    $(".word-container").click(function () {
        clickCount++;

        if (clickCount === 1) {
            // First click, show the list
            $("#myList").slideToggle();
        } else if (clickCount === 2) {
            // Second click, show the image
            $("#schuhmacher").slideToggle();
        }
        else if (clickCount === 3)
        {
            $("#schuhmacherText").slideToggle();
        }
        else if (clickCount === 4)
        {
            $('#schuhmacher').animate({ "margin-right": '+=900' });
            $('#schuhmacherText').animate({ "margin-right": '+=900' });
        
            // Slide toggle and move the fischer elements
            $("#fischer").slideToggle();
            $('#fischer').animate({ "margin-top": '-=332' });
            $("#fischerText").slideToggle();
        
            // Slide toggle and move the metzger elements
            $("#metzger").slideToggle();
            $('#metzger').animate({ "margin-left": '+=900', "margin-top": '-=330' });
            $("#metzgerText").slideToggle();
            $('#metzgerText').animate({ "margin-left": '+=900' });

        }
    });
});
