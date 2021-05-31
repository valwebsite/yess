score = 0;
function update() {
score = score + 1;
document.getElementById("score.").innerHTML = "Score: " + score;
}

function save() {
    localStorage.setItem("score", score);
}

function next() {
    window.location = "file:///C:/Users/hitam/OneDrive/Desktop/Math%20Quiz%20Game/ADV-C89-student/practice-activity/math%20quiz/index.html";
}