var flags = {
    "Charlie": "Affirmative",
    "Delta": "Keep clear of me; I am maneuvering with difficulty",
    "Foxtrot": "I am disabled; communicate with me",
    "Golf": "I require a pilot",
    "Hotel": "I have a pilot on board",
    "Juliet": "I am on fire and have dangerous cargo on board: keep well clear of me",
    "Kilo": "I wish to communicate with you",
    "Mike": "My vessel is stopped and making no way through the water",
    "November": "Negative",
    "Papa": "All persons should report on board as the vessel is about to proceed to sea",
    "Uniform": "You are running into danger",
    "Victor": "I require assistance",
    "Whiskey": "I require medical assistance",
    "X-ray": "Stop carrying out your intentions and watch for my signals",
    "Yankee": "I am dragging my anchor",
    "Zulu": "I require a tug"
}

function getFlagHTML(id) {
    const flagDescription = flags[id];
    if (flagDescription == null) {
        return;
    }
    return "<img src=\"./images/ICS_" + id + ".svg\" alt=\"" + id + "\" />"
      + "<p>" + flagDescription + "</p>";
}

function loadAllFlags()
{
    const flags = window.document.getElementsByClassName("flag");
    for (const flag of flags) {
        flag.innerHTML += getFlagHTML(flag.id);
    }
}

function loadFlag() {
    const id = new URL(window.location.href).searchParams.get("id");
    const flagHTML = getFlagHTML(id);
    if (flagHTML == null) {
        return;
    }
    document.getElementById("flag").innerHTML += flagHTML;

    const iconLink = document.createElement("link");
    iconLink.rel = "icon";
    iconLink.href = "./images/ICS_" + id + ".svg";
    document.head.appendChild(iconLink);

    document.title += " - " + id;
}

function openFlag(event) {
    window.location = "./flag.html?id=" + event.currentTarget.id;
}

function closeFlag(event) {
    window.location = "./index.html";
}