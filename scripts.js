function closePopup(event)
{
    document.getElementById("main").style.display = "block";
    let popup = document.getElementById("popup");
    let popupFlags = popup.getElementsByClassName("flag");
    for (const popupFlag of popupFlags) {
        popup.removeChild(popupFlag);
    }
    popup.style.display = "none";
}

function popup(event) {
    if (document.getElementById("main").style.display === "none") {
        return;
    }
    document.getElementById("main").style.display = "none";
    let popup = document.getElementById("popup");
    popup.appendChild(event.currentTarget.cloneNode(true));
    popup.style.display = "flex";
}