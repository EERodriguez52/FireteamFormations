const backyard = document.getElementById("backyard");

const columnButton = document.getElementById("column-btn");

const wedgeButton = document.getElementById("wedge-btn");

const skirmisherSelect = document.getElementById("skirmisher-select");

const echelonSelect = document.getElementById("echelon-select");
    
// Marine behavior ? 

const marine1 = document.getElementById("marine1");

const marine2 = document.getElementById("marine2");

const marine3 = document.getElementById("marine3");

const marine4 = document.getElementById("marine4");

function showColumn() {

    marine1.style.left = "30%";
    marine1.style.top = "35%";

    marine2.style.left = "30%";
    marine2.style.top = "75%";

    marine3.style.left = "70%";
    marine3.style.top = "55%";

    marine4.style.left = "70%";
    marine4.style.top = "15%";

}

showColumn();

columnButton.addEventListener("click", showColumn);

wedgeButton.addEventListener("click", showWedge);

skirmisherSelect.addEventListener("change", function() {
    if (skirmisherSelect.value === "skirmisherLeft") {
        showSkirmisherLeft();
    }

    else if (skirmisherSelect.value === "skirmisherRight") {
        showSkirmisherRight();

    }
});

echelonSelect.addEventListener("change", function() {
    if (echelonSelect.value === "echelonLeft") {
        showEchelonLeft();
    }

    else if (echelonSelect.value === "echelonRight") {
        showEchelonRight();
    
    }
});


function showWedge() {

    marine1.style.left = "50%";
    marine1.style.top = "15%";

    marine2.style.left = "30%";
    marine2.style.top = "40%";

    marine3.style.left = "70%";
    marine3.style.top = "40%";

    marine4.style.left = "50%";
    marine4.style.top = "65%";

}

function showSkirmisherLeft() {

    marine1.style.left = "60%";
    marine1.style.top = "20%";

    marine2.style.left = "20%";
    marine2.style.top = "20%";

    marine3.style.left = "40%";
    marine3.style.top = "60%";

    marine4.style.left = "80%";
    marine4.style.top = "60%";

}
function showSkirmisherRight() {

    marine1.style.left = "50%";
    marine1.style.top = "15%";

    marine2.style.left = "30%";
    marine2.style.top = "40%";

    marine3.style.left = "70%";
    marine3.style.top = "40%";

    marine4.style.left = "50%";
    marine4.style.top = "65%";

}

function showEchelonLeft() {

    marine1.style.left = "50%";
    marine1.style.top = "15%";

    marine2.style.left = "30%";
    marine2.style.top = "40%";

    marine3.style.left = "70%";
    marine3.style.top = "40%";

    marine4.style.left = "50%";
    marine4.style.top = "65%";

}function showEchelonRight() {

    marine1.style.left = "50%";
    marine1.style.top = "15%";

    marine2.style.left = "30%";
    marine2.style.top = "40%";

    marine3.style.left = "70%";
    marine3.style.top = "40%";

    marine4.style.left = "50%";
    marine4.style.top = "65%";

}