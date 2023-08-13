function copyName() {
    var copyText = document.getElementById("hostname").textContent;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(copyText)
            .then(function() {
                showPopupMessage("Copied to Clipboard!");
            })
            .catch(function(error) {
                console.error("Clipboard copy error:", error);
            });
    } else {
        // Fallback for browsers that don't support clipboard API
        var textArea = document.createElement("textarea");
        textArea.value = copyText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        showPopupMessage("Copied to Clipboard!");
    }
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