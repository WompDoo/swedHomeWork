const list = ["intro", "q1", "q2", "q3", "q4", "q5", "summary"];
currentlyActive = "intro";
document.getElementById(currentlyActive).style.display = "block";

if(currentlyActive === list[0]) {
    console.log(currentlyActive)
    document.getElementById("prev").style.display = "none";
}

if(currentlyActive === list[list.length]) {
    document.getElementById("next").style.display = "none";
}

function goNext() {
    console.log(currentlyActive);
    document.getElementById(currentlyActive).style.display = "none";
    currentlyActive = list[list.indexOf(currentlyActive) + 1];
    console.log(currentlyActive);
    document.getElementById(currentlyActive).style.display = "block";
}

function goBack() {
    console.log(currentlyActive);
    document.getElementById(currentlyActive).style.display = "none";
    currentlyActive = list[list.indexOf(currentlyActive) - 1];
    console.log(currentlyActive);
    document.getElementById(currentlyActive).style.display = "block";
}