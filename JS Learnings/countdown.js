"use strict";

window.onload = function() {
    const ele = document.getElementById("timer");

    function updateTime() {
        let time = new Date().toLocaleTimeString();
        ele.innerText = time;
    }

    updateTime()

    setInterval(() => {
        updateTime()
    }, 1000);
}


window.onbeforeunload = function () {
    console.log("Are you sure you want to leave this page?")
    return "Are you sure you want to leave?"
}

