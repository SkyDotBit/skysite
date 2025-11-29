const xmppstatuscheck = document.getElementById("xmppstatus");

function check() {
  fetch("https://xmpp.skydevs.me")
    .then(response => { 
      if (response.ok) {
        console.log("XMPP online ^ ^");
        xmppstatuscheck.innerText = "Online ●";
        xmppstatuscheck.style.color = "green";
      } else {
        console.log("XMPP offline :(");
        xmppstatuscheck.innerText = "Offline ●";
        xmppstatuscheck.style.color = "red";
      }
    }).catch((error) => {
        console.log("XMPP offline :(");
        xmppstatuscheck.innerText = "Offline ●";
        xmppstatuscheck.style.color = "red";
    });
}
check();
setInterval(check, 15000);
