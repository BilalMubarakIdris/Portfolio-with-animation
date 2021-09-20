const airBallon = document.getElementById("air-balloon");
const cloudOne = document.getElementById("cloud-one");
const cloudTwo = document.getElementById("cloud-two");
const cloudThree = document.getElementById("cloud-three");
const cloudFour = document.getElementById("cloud-four");
const cloudFive = document.getElementById("cloud-five");
const javascript = document.getElementById("javascript");
const react = document.getElementById("react");
const graphql = document.getElementById("graphql");

function move(){
    const increaseMeter = window.scrollY;
    airBallon.style.bottom = 10 + increaseMeter * 0.1 + "%";

    cloudOne.style.bottom = 40 + increaseMeter * 0.12 + "%";
    cloudOne.style.marginLeft = 30 + increaseMeter * 0.1 + "%";

    cloudTwo.style.bottom = 80 + increaseMeter * 0.14 + "%";
    cloudTwo.style.marginLeft = 60 + increaseMeter * 0.15 + "%";

    cloudThree.style.bottom = 60 + increaseMeter * 0.1 + "%";
    cloudThree.style.marginRight = 80 + increaseMeter * 0.12 + "%";

    cloudFour.style.bottom = 70 + increaseMeter * 0.16 + "%";
    cloudFour.style.marginRight = 40 + increaseMeter * 0.15 + "%";

    cloudFive.style.bottom = 60 + increaseMeter * 0.2 + "%";
    cloudFive.style.marginLeft = 40 + increaseMeter * 0.16 + "%";

    javascript.style.marginRight = 55 + increaseMeter * 2.2 + "%";
    react.style.marginRight = 43 + increaseMeter * 1.5 + "%";
    graphql.style.marginRight = 31 + increaseMeter * 1 + "%";

}


window.addEventListener("scroll", move);