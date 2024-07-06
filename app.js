setInterval(function () {
    if (document.getElementsByClassName("sliderItems")[0].classList.contains("slide")) {

        document.getElementsByClassName("sliderItems")[1].classList.add("slide");
        document.getElementsByClassName("sliderItems")[0].classList.remove("slide");

    }

    else if (document.getElementsByClassName("sliderItems")[1].classList.contains("slide")) {

        document.getElementsByClassName("sliderItems")[2].classList.add("slide");
        document.getElementsByClassName("sliderItems")[1].classList.remove("slide");

    }

    else if (document.getElementsByClassName("sliderItems")[2].classList.contains("slide")) {

        document.getElementsByClassName("sliderItems")[3].classList.add("slide");
        document.getElementsByClassName("sliderItems")[2].classList.remove("slide");

    }

    else {

        document.getElementsByClassName("sliderItems")[0].classList.add("slide");
        document.getElementsByClassName("sliderItems")[3].classList.remove("slide");

    };

},2000);