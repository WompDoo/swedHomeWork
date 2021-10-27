const list = ["intro", "q1", "q2", "q3", "q4", "q5", "summary"];
var answers = {
    q1: false,
    q2: "",
    q3: "",
    q4: "",
    q5: ""
};
currentlyActive = 0;
document.getElementById(list[currentlyActive]).style.display = "block";
document.getElementById("prev").style.display = "none";
document.getElementById("question-nav").style.display = "none";

function goNext() {
    console.log(currentlyActive)
    document.getElementById(list[currentlyActive]).style.display = "none";
    currentlyActive++;
    console.log(currentlyActive)
    checkButtons();
    console.log(list[currentlyActive])
    document.getElementById(list[currentlyActive]).style.display = "block";
}

function goBack() {
    document.getElementById(list[currentlyActive]).style.display = "none";
    currentlyActive--;
    checkButtons();
    document.getElementById(list[currentlyActive]).style.display = "block";
}

function goTo(question) {
    document.getElementById(list[currentlyActive]).style.display = "none";
    currentlyActive = question;
    checkButtons();
    document.getElementById(list[currentlyActive]).style.display = "block";
}

function checkButtons() {
    if(currentlyActive >= 1) {
        document.getElementById("prev").style.display = "inline";
        document.getElementById("question-nav").style.display = "block";
    } else {
        document.getElementById("prev").style.display = "none";
    }

    if(currentlyActive === list.length - 1) {
        document.getElementById("next").style.display = "none";
        document.getElementById("prev").style.display = "none";
        document.getElementById("question-nav").style.display = "none";
        collectValues();
    } else {
        document.getElementById("next").style.display = "inline";
    }

    for (let index = 1; index <= currentlyActive; index++) {
        if(index < 6) {
            document.getElementById("btn-" + index).style.display = "inline";    
        }
        
    }
}

function collectValues() {
    answers["q1"] = document.getElementsByName("q-1")[0].checked;
    for (let index = 0; index < document.getElementsByName("q-2").length; index++) {
        if(document.getElementsByName("q-2")[index].checked) {
            answers["q2"] = document.getElementsByName("q-2")[index].value;
            break;
        }
    }
    answers["q3"] = document.getElementsByName("q-3")[0].value;
    answers["q4"] = document.getElementsByName("q-4")[0].value;
    answers["q5"] = document.getElementsByName("q-5")[0].value;
    console.log(answers);
}