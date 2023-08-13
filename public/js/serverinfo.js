function updateServerInfo() {
    try {
        //fetch('/.data/testserver.json')
        fetch('https://api.mcsrvstat.us/3/play.whirlcraft.xyz')
            .then(response => response.json())
            .then(json => {
                const { online, hostname, players } = json;

                const currentHostname = document.getElementById("hostname");
                currentHostname.innerHTML = (hostname === "play.whirlcraft.xyz") ? hostname : "Couldn't Find Server";

                const currentPlayerCount = document.getElementById("players") || document.getElementById("playerlist");

                const playerNamesDiv = document.getElementById("playerlist");

                const currentStatus = document.getElementById("status");
                if (online === false) {
                    currentStatus.innerHTML = "Offline";
                    currentStatus.style.color = "red";
                    currentPlayerCount.innerHTML = "-";
                    playerNamesDiv.innerHTML = "-";
                    return;
                } else {
                    currentStatus.innerHTML = "Online";
                    currentStatus.style.color = "green";
                }

                currentPlayerCount.innerHTML = (players.online > 0) ? players.online : "None";

                if (players.online > 0) {
                    playerNamesDiv.innerHTML = "";
                    players.list.forEach(player => {
                        let li = document.createElement("li");
                        li.innerHTML = player.name;
                        playerNamesDiv.appendChild(li);
                    });
                } else {
                    playerNamesDiv.innerHTML = "None";
                }
            });
    } catch (error) {
        console.error(error);
    }
}
updateServerInfo();
setInterval(updateServerInfo, 30000);
