try {
    
    fetch('https://api.mcsrvstat.us/3/play.whirlcraft.xyz')
        .then(response => response.json())
        .then(json => {
            const hostname = json.hostname
            const status = json.online
            const playercount= json.players.online
            const playernames =json.players.list

            const currenthostname = document.getElementById("hostname")
            if (hostname == "play.whirlcraft.xyz") {
                currenthostname.innerHTML = hostname
            } else {
                currenthostname.innerHTML = "Server Offline"
            }

            const currentstatus = document.getElementById("status")
            if (status == true) {
                const embedstatus = "online"
                currentstatus.innerHTML = "Online"
            } else if (status == false) {
                currentstatus.innerHTML = "Offline"
            }
            
            const currentplayercount = document.getElementById("players") ||document.getElementById("playerlist")
            if (playercount < 1) {
                currentplayercount.innerHTML = "None"
            } else{
                currentplayercount.innerHTML = playercount
            }

            const playernamesdiv = document.getElementById("playerlist");
            if (playercount >= 1) {
                playernamesdiv.innerHTML = "";

                playernames.forEach((player) => {
                    let li = document.createElement("li");
                    li.innerHTML = player.name; 
                    playernamesdiv.appendChild(li);
                });
            } else {
                playernamesdiv.innerHTML = "None"
            }

        })

} catch (error) {
    console.log(error)
}