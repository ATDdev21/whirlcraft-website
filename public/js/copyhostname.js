function copyName() {
    var copyText = document.getElementById("hostname").textContent;

    navigator.clipboard.writeText(copyText)
        .then(function() {
            showPopupMessage("Copied to Clipboard!");
        })
}

function showPopupMessage(message) {
    var popup = document.getElementById("popupMessage");
    popup.textContent = message;
    popup.style.opacity = "1";
    popup.style.display = "block";

    setTimeout(function() {
        popup.style.opacity = "0";
        setTimeout(function() {
            popup.style.display = "none";
        }, 300);
    }, 2000);
}
