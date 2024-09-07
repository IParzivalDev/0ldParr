"use strict";
const handleClick = () => {
    const audio = document.querySelector(".honeypie");
    const happybirthdate = document.querySelector(".happybirthdate");
    const button = document.querySelector(".but");
    audio.play();
    happybirthdate.style.display = "flex";
    // button.style.height = "0px"
    button.style.display = "none";
};
