const header = document.getElementById("header-container");
header.style.backgroundColor = "rgb(0, 176, 105)"

const urgenteBackground = document.getElementsByClassName("emergency-tasks")[0];
urgenteBackground.style.backgroundColor = "rgb(255, 159, 132)"

const emergencyTasks = document.querySelectorAll(".emergency-tasks h3")

for (let index = 0; index < emergencyTasks.length; index += 1){
emergencyTasks[index].style.backgroundColor = "rgb(165, 0, 243)"
}

const noEmergency = document.getElementsByClassName("no-emergency-tasks")[0];
noEmergency.style.backgroundColor = "rgb(249, 219, 94)";

const noEmergencyTasks = document.querySelectorAll(".no-emergency-tasks h3")

for (let index = 0; index < noEmergencyTasks.length; index += 1) {
  noEmergencyTasks[index].style.backgroundColor = "rgb(35, 37, 37)"
}

const rodape = document.querySelector("#footer-container")
rodape.style.backgroundColor = "rgb(0, 53, 51)"
