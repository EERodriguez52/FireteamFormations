const backyard = document.getElementById("backyard");

const columnButton = document.getElementById("column-btn");

const wedgeButton = document.getElementById("wedge-btn");

const skirmisherButton = document.getElementById("skirmisher-btn");

const echelonButton = document.getElementById("echelon-btn");

// Marine behavior ? 

const marine1 = document.getElementById("marine1");

const marine2 = document.getElementById("marine2");

const marine3 = document.getElementById("marine3");

const marine4 = document.getElementById("marine4");

function showColumn() {

    marine1.style.left = "50%";
    marine1.style.top = "15%";

    marine2.style.left = "50%";
    marine2.style.top = "35%";

    marine3.style.left = "50%";
    marine3.style.top = "55%";

    marine4.style.left = "50%";
    marine4.style.top = "75%";

}

showColumn();

columnButton.addEventListener("click", showColumn);

wedgeButton.addEventListener("click", showWedge);

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
