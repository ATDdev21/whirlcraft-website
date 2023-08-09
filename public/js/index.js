function updateServerInfo() {
    try {
        //fetch('/.data/testserver.json')
        fetch('https://api.mcsrvstat.us/3/play.whirlcraft.xyz')
            .then(response => response.json())
            .then(json => {
                const { hostname, online, players } = json;

                const currentHostname = document.getElementById("hostname");
                currentHostname.innerHTML = (hostname === "play.whirlcraft.xyz") ? hostname : "Server Offline";

                const currentStatus = document.getElementById("status");
                currentStatus.innerHTML = online ? "Online" : "Offline";

                const currentPlayerCount = document.getElementById("players") || document.getElementById("playerlist");
                currentPlayerCount.innerHTML = (players.online > 0) ? players.online : "None";

                const playerNamesDiv = document.getElementById("playerlist");
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
