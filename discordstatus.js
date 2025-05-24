const activitydiv = document.getElementById("discordstatusbg");
const statusman = document.getElementById("status");
const bigbackdiv = document.getElementById("bigbackdiv");
function discordstatuss() {
    console.log("Staters");
    fetch('https://api.lanyard.rest/v1/users/1154179709341552701')
        .then(response => response.json())
        .then(data => {
            const status = data.data.discord_status;
            const activities = data.data.activities;
            const avatar = data.data.discord_user.avatar;
            const mobiles = data.data.active_on_discord_mobile;
            const desktoper = data.data.active_on_discord_desktop;
            const webbermanorvesktop = data.data.active_on_discord_web;
            statusman.innerHTML = status;
            var platform = "";
            var thingies = 0;
            if (mobiles) {
                platform = platform + '<img src="svgs/iphone.svg" height="16px" width="16px" id="platform">';
                thingies++;
            }
            if (desktoper) {
                platform = platform + '<img src="svgs/windows.svg" height="16px" width="16px" id="platform">';
                thingies++;
            }
            if (webbermanorvesktop) {
                platform = platform + '<img src="svgs/web.svg" height="16px" width="16px" alt="Web or maybe Vesktop" id="platform">';
                thingies++;
            }
            if (status == "online") {
                statusman.style.color = "green";
                statusman.innerHTML = "Online " + platform;
                while (thingies != 0) {
                    document.getElementById("platform").style.fill = "green";
                    document.getElementById("platform").id = "modified";
                    thingies = thingies - 1
                }
            } else if (status == "idle") {
                statusman.style.color = "yellow";
                statusman.innerHTML = "Idle " + platform;
                while (thingies != 0) {
                    document.getElementById("platform").style.fill = "yellow";
                    document.getElementById("platform").id = "modified";
                    thingies = thingies - 1
                }
            } else if (status == "dnd") {
                statusman.style.color = "red";
                statusman.innerHTML = "Do Not Disturb " + platform;
                while (thingies != 0) {
                    document.getElementById("platform").style.fill = "red";
                    document.getElementById("platform").id = "modified";
                    thingies = thingies - 1
                }
            } else if (status == "offline") {
                statusman.style.color = "gray";
                statusman.innerHTML = "Offline";
            }
            
            const elements = document.querySelectorAll('.funnygoobergoo');
            elements.forEach(element =>
                {
                    element.remove();
                })
            var blug = 0;
            for (activity of activities) {
                blug++
            }
            if (blug > 0) {
                console.log("WSUS");
                for (activity of activities) {
                    var activityname = "";
                    var activitytype = "";
                    var activitydetails = "";
                    try {
                        activityname = activity.name;
                    }
                    catch (error) {
                        console.log("Error");
                        activityname = "Unknown";
                    }
                    try {
                        activitytype = activity.type;
                    } catch (error) {
                        console.log("Error");
                        activitytype = "Unknown";
                    }
                    try {
                        const activitystate = activity.state;
                    } catch (error) {
                        console.log("Error");
                    }
                    try {
                        activitydetails = activity.details;
                    } catch (error) {
                        console.log("Error");
                    }
                    try {
                        const activitytimestamp = activity.timestamps.start;
                    } catch (error) {
                        console.log("Error");
                    }
                    try {
                        const activityimage = activity.assets.large_image;
                    } catch (error) {
                        console.log("Error");
                    }
                    try {
                        const activityimagealt = activity.assets.large_text;
                    } catch (error) {
                        console.log("Rorro")
                    }
                    try {
                        const activityapp = activity.assets.small_text;
                    } catch (error) {
                        console.log("Error");
                    }
                    const actore = document.createElement('p');
                    actore.style.color = "white";
                    actore.style.fontFamily = "sfnormal";
                    actore.innerHTML = activitydetails + ": " + activityname;
                    actore.classList.add("funnygoobergoo")
                    bigbackdiv.appendChild(actore);
                    bigbackdiv.classList.add("bigbackdiv")
                    bigboiheight = bigbackdiv.style.height;
                    bigbackdiv.style.height = bigboiheight + 80;
                    console.log("DDID IT");
                
                }
                bigbackdiv.style.height = bigbackdiv.style.height + "px";
            } else {
                bigbackdiv.style.visibility = "hidden";
                bigbackdiv.style.opacity = 1;
                console.log("HELLO");
            }
})
            
}
discordstatuss();
setInterval(discordstatuss, 60000)
// Force push to GitHub pages
