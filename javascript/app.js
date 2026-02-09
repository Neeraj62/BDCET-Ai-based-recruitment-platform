function login() {
  window.location.href = "dashboard.html";
}

function uploadResume() {
  let match = Math.floor(Math.random() * 40) + 60; // 60% to 100%
  document.getElementById("match-result").innerHTML =
    "<h3>Matching Percentage: " + match + "%</h3>";
}

function viewJob() {
  window.location.href = "job.html";
}

function applyJob() {
  alert("Job Applied Successfully!");
}
