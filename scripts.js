const list = ["intro", "q1", "q2", "q3", "q4", "q5", "summary"];
const questions = ["Lorem question 1", "Lorem question 2", "Lorem question 3", "Lorem question 4", "Lorem question 5"]
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
document.getElementById("error").style.display = "none";

for (let index = 0; index < questions.length; index++) {
    document.getElementsByClassName("question")[index].innerHTML = questions[index];
    
}

function goNext() {
    if(currentlyActive <= 5 && currentlyActive > 0) {
        if(!checkIfAnswered()) {
            return;
        }
    }
    document.getElementById(list[currentlyActive]).style.display = "none";
    currentlyActive++;
    checkButtons();
    document.getElementById("error").style.display = "none";
    document.getElementById(list[currentlyActive]).style.display = "block";
}

function goBack() {
    document.getElementById(list[currentlyActive]).style.display = "none";
    currentlyActive--;
    checkButtons();
    document.getElementById("error").style.display = "none";
    document.getElementById(list[currentlyActive]).style.display = "block";
}

function goTo(question) {
    document.getElementById(list[currentlyActive]).style.display = "none";
    currentlyActive = question;
    checkButtons();
    document.getElementById("error").style.display = "none";
    document.getElementById(list[currentlyActive]).style.display = "block";
}

function checkIfAnswered() {
    if(list[currentlyActive] == "q1") {
        if(!document.getElementsByName("q-1")[0].checked) {
            document.getElementById("error").style.display = "block";
            return false;
        }
    } else if(list[currentlyActive] == "q2") {
        for (let index = 0; index < document.getElementsByName("q-2").length; index++) {
            if(document.getElementsByName("q-2")[index].checked) {
                return true;
            }
        }
        document.getElementById("error").style.display = "block";
        return false;
    } else {
        if(document.getElementsByName("q-" + currentlyActive)[0].value.length <= 0) {
            document.getElementById("error").style.display = "block";
            return false;
        }
    }
    return true;
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
    if(document.getElementsByName("q-1")[0].checked) {
        answers["q1"] = "yes";
    }

    for (let index = 0; index < document.getElementsByName("q-2").length; index++) {
        if(document.getElementsByName("q-2")[index].checked) {
            answers["q2"] = document.getElementsByName("q-2")[index].value;
            break;
        }
    }
    answers["q3"] = document.getElementsByName("q-3")[0].value;
    answers["q4"] = document.getElementsByName("q-4")[0].value;
    answers["q5"] = document.getElementsByName("q-5")[0].value;

    for (let index = 1; index < questions.length + 1; index++) {
        console.log(index, index + 1, index - 1)
        console.log(questions[index - 1], answers["q" + index])
        document.getElementById("answer-" + index).innerHTML = questions[index - 1] + ": " + answers["q" + index];  
    }
}