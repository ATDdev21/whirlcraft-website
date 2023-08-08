try {
    
    fetch('https://api.mcsrvstat.us/3/play.whirlcraft.xyz')
        .then(response => response.json())
        .then(json => {
            const hostname = json.hostname
            const status = json.online
            const playercount= json.players.online

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
                document.querySelector('meta[property="og:title"]').setAttribute("content", `Server is ${embedstatus}`);
            } else if (status == false) {
                currentstatus.innerHTML = "Offline"
            }
            
            const currentplayercount = document.getElementById("players")
            if (playercount < 1) {
                currentplayercount.innerHTML = "None"
            } else {
                currentplayercount.innerHTML = playercount
            }

            console.log(json)
            
            document.querySelector('meta[property="og:description"]').setAttribute("content", `${playercount} Players Online`);
        })

} catch (error) {
    console.log(error)
}