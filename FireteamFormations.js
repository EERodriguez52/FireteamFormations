const backyard = document.getElementById("backyard");

const columnButton = document.getElementById("column-btn");

const wedgeButton = document.getElementById("wedge-btn");

const skirmisherSelect = document.getElementById("skirmisher-select");

const echelonSelect = document.getElementById("echelon-select");
     
const marine1 = document.getElementById("marine1");

const marine2 = document.getElementById("marine2");

const marine3 = document.getElementById("marine3");

const marine4 = document.getElementById("marine4");

const formationDescription = document.getElementById("formation-description");

function showColumn() {

    marine1.style.left = "30%";
    marine1.style.top = "35%";

    marine2.style.left = "30%";
    marine2.style.top = "75%";

    marine3.style.left = "70%";
    marine3.style.top = "55%";

    marine4.style.left = "70%";
    marine4.style.top = "15%";

    formationDescription.textContent = 
    
    `The Column formation permits fast,
     controlled movement, while providing fire and maneuverability to the flanks.
     While rapid movement is supported, this formation is vulnerable to the front and rear.
     Ideal dispersion between Marines is 10-15 meters.`

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

    marine1.style.left = "70%";
    marine1.style.top = "40%";

    marine2.style.left = "30%";
    marine2.style.top = "40%";

    marine3.style.left = "50%";
    marine3.style.top = "15%";

    marine4.style.left = "50%";
    marine4.style.top = "65%";

    formationDescription.textContent = 
    `The fireteam weddge is used to provide all around security.
    This formation allows for a rapid transition to react to enemy contact.
    The wedge is most useful when moving through open terrain. 
    The Team Leader and Grenadier postitions are interchangable.`
}

function showSkirmisherLeft() {

    marine1.style.left = "60%";
    marine1.style.top = "60%";

    marine2.style.left = "20%";
    marine2.style.top = "60%";

    marine3.style.left = "40%";
    marine3.style.top = "20%";

    marine4.style.left = "80%";
    marine4.style.top = "20%";

    formationDescription.textContent = 
    `The skirmisher is most commonly used when enemy contact is anticipated. 
    This formation provides maximum firepower to the front and allows for a rapid
    transition to fire and maneuver.`
}
function showSkirmisherRight() {

    marine1.style.left = "40%";
    marine1.style.top = "60%";

    marine2.style.left = "80%";
    marine2.style.top = "60%";

    marine3.style.left = "60%";
    marine3.style.top = "20%";

    marine4.style.left = "20%";
    marine4.style.top = "20%";

    formationDescription.textContent = 
    `The skirmisher is most commonly used when enemy contact is anticipated. 
    This formation provides maximum firepower to the front and allows for a rapid
    transition to fire and maneuver.`
}

function showEchelonLeft() {

    marine1.style.left = "60%";
    marine1.style.top = "65%";

    marine2.style.left = "20%";
    marine2.style.top = "85%";

    marine3.style.left = "35%";
    marine3.style.top = "50%";

    marine4.style.left = "75%";
    marine4.style.top = "30%";

    formationDescription.textContent = 
    `Similar to the column, the echelon staggers Marines so they may provide fire to
    the front or the flanks. `
}function showEchelonRight() {

    marine1.style.left = "40%";
    marine1.style.top = "65%";

    marine2.style.left = "80%";
    marine2.style.top = "85%";

    marine3.style.left = "65%";
    marine3.style.top = "50%";

    marine4.style.left = "25%";
    marine4.style.top = "30%";

}