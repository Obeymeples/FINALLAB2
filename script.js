function evaluateScore(score) {
  var num = Number(score);

  if (isNaN(num) || num < 0 || num > 100) {
    return "Invalid score";
  } else if (num >= 90) {
    return "Excellent";
  } else if (num >= 75) {
    return "Passed";
  } else {
    return "Failed";
  }
}

function startProgram() {
  alert("Welcome to the Student Score Checker!");

  var name = prompt("Please enter your name:");
  if (name === null || name.trim() === "") {
    document.getElementById("result").innerHTML =
      "<p class='invalid'>No name was entered. Program stopped.</p>";
    return;
  }

  var score = prompt("Please enter your score (0-100):");
  if (score === null || score.trim() === "") {
    document.getElementById("result").innerHTML =
      "<p class='invalid'>No score was entered. Program stopped.</p>";
    return;
  }

  var proceed = confirm("Do you want to continue and see your result?");
  if (proceed === false) {
    document.getElementById("result").innerHTML =
      "<p>You chose not to continue.</p>";
    return;
  }

  var remark = evaluateScore(score);

  var remarkClass = "invalid";
  if (remark === "Excellent") {
    remarkClass = "excellent";
  } else if (remark === "Passed") {
    remarkClass = "passed";
  } else if (remark === "Failed") {
    remarkClass = "failed";
  }

  document.getElementById("result").innerHTML =
    "<p><strong>Name:</strong> " +
    name +
    "</p>" +
    "<p><strong>Score:</strong> " +
    score +
    "</p>" +
    "<p><strong>Remark:</strong> <span class='" +
    remarkClass +
    "'>" +
    remark +
    "</span></p>";
}
