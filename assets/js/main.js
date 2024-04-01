document.addEventListener("DOMContentLoaded", function() {
    // Hide the content initially
    var content = document.getElementById("content");
    content.style.display = "none";
});

function toggleContent() {
    var content = document.getElementById("content");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}