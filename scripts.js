function closePopup(event)
{
    console.log("LASKHFLAKJ");
    document.getElementById("main").style.visibility = "visible";
    let popup = document.getElementById("popup");
    let popupFlags = popup.getElementsByClassName("flag");
    for (const popupFlag of popupFlags) {
        popup.removeChild(popupFlag);
    }
    popup.style.visibility = "collapse";
}

function popup(event) {
    document.getElementById("main").style.visibility = "collapse";
    let popup = document.getElementById("popup");
    popup.appendChild(event.currentTarget.cloneNode(true));
    popup.style.visibility = "visible";
}