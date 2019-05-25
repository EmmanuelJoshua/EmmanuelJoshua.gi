function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
 }

window.onscroll = function () {
    scrollFunction()
};

var navbar = document.getElementById("navbar");

function scrollFunction() {
    var scrollPos = $(document).scrollTop();
    $('.navitems').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - 60 <= scrollPos && refElement.position().top + 75 + refElement.height() > scrollPos) {
            $('.navitems').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });

    if (document.body.scrollTop > 440 || document.documentElement.scrollTop > 440) {
        $("#myBtn").fadeIn("4000");
    } else {
        $("#myBtn").fadeOut("4000");
    }

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "0.5px 10px";
        document.getElementById("navbar").style.backgroundColor = "#323B3D";
        document.getElementById("navbar").style.boxShadow = "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)";
        document.getElementById("myDropdown").style.backgroundColor = "#323B3D";

        document.getElementById("drop1").style.color = "#f2f2f2";
        document.getElementById("drop2").style.color = "#f2f2f2";
        document.getElementById("drop3").style.color = "#f2f2f2";
        document.getElementById("drop4").style.color = "#f2f2f2";

    } else {
        document.getElementById("navbar").style.padding = "17px 10px";
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar").style.boxShadow = "";
        document.getElementById("myDropdown").style.backgroundColor = "#f1f1f1";
        document.getElementById("drop1").style.color = "#323B3D";
        document.getElementById("drop2").style.color = "#323B3D";
        document.getElementById("drop3").style.color = "#323B3D";
        document.getElementById("drop4").style.color = "#323B3D";
    }

    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {

            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
}

function my_Function(xy) {
    if (xy.matches) {

    } else {
        document.getElementById("myDropdown").classList.remove("show");
    }
}

var xy = window.matchMedia("(max-width: 750px)");
my_Function(xy);

xy.addListener(my_Function);

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 2000, "easeInOutExpo");
                return false;
            }
        }
    });

})(jQuery);

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("activ");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
