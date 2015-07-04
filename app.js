$(document).ready(function() {

    // The following snippet of code highlights
    // the navigation menu item corresponding to the current
    // page, in black color.

    var url = window.location.href;

    // Will only work if string in href matches with location
    $('.navigation a[href="' + url + '"]').addClass('active');




    $("#titleOne").on('click', function() {
        $(".bioOne").slideToggle();
        if ($("#titleOne").hasClass("border")) {
            $("#titleOne").removeClass("border");
        } else {
            setTimeout(function() {
                $("#titleOne").addClass("border");
            }, 365);
        }
    });

    $("#titleTwo").on('click', function() {
        $(".bioTwo").slideToggle();
        if ($("#titleTwo").hasClass("border")) {
            $("#titleTwo").removeClass("border");
        } else {
            setTimeout(function() {
                $("#titleTwo").addClass("border");
            }, 365);
        }
    });


    $("#titleThree").on('click', function() {
        $(".bioThree").slideToggle();
        if ($("#titleThree").hasClass("border")) {
            $("#titleThree").removeClass("border");
        } else {
            setTimeout(function() {
                $("#titleThree").addClass("border");
            }, 365);
        }
    });


    $("#titleFour").on('click', function() {
        $(".bioFour").slideToggle();
        if ($("#titleFour").hasClass("border")) {
            $("#titleFour").removeClass("border");
        } else {
            setTimeout(function() {
                $("#titleFour").addClass("border");
            }, 365);
        }
    });


    $("#titleFive").on('click', function() {
        $(".bioFive").slideToggle();
        if ($("#titleFive").hasClass("border")) {
            $("#titleFive").removeClass("border");
        } else {
            setTimeout(function() {
                $("#titleFive").addClass("border");
            }, 365);
        }
    });

});