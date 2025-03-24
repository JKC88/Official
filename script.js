// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Popup functionality
    const popup = document.getElementById("popup");
    if (popup) {
        popup.style.display = "flex";
    }
});

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
