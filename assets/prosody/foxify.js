let neofoxos = [];
let regex = null;
(async() => {
    await fetch('https://skydevs.me/assets/neofox/neofox.json')
      .then(response => {
        return response.json();
      })
      .then(data => {
        neofoxos = data;
        funnyfoxxos = neofoxos.map(name => name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        pattern = ":(" + funnyfoxxos.join("|") + "):";
        regex = new RegExp(pattern, "g");
        bigfetchonce();
      })
      .catch(err => {
        console.error(err);
      });
})()
let enabled = true;
let blockedgoobs = "";
async function bigfetchonce(){
    const respon = await fetch("https://skydevs.me/assets/neofox/blacklist.txt");
    blockedgoobs = await respon.text();
    setInterval(async function() { await walk(document.body); }, 1000);
}
async function walk(node) {
  let child, next;
    switch (node.nodeType) {
        case 1:
        case 9:
        case 11:
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;
        case 3:
            await handleText(node);
            break;
    }
}

async function blocklist() {
    for (const site of blockedgoobs.split("\n")) {
        if (window.location.href.includes(site.trim()) && site.trim() != "") {
            console.log("Blocked" + site + blockedgoobs + site);
            return true;
        }
    }
    return false;
}

async function handleText(textNode) {
    let gooberdoo = "";
    for (const image of neofoxos) {
        if (textNode.nodeValue.includes(image)) {
            const supergoo = image + "_";
            if (textNode.nodeValue.includes(supergoo)) {
                if (image.includes(supergoo)) {
                    gooberdoo = image;
                    break;
                }
            } else {
                gooberdoo = image;
                break;
            }
        }
    }
    const match = textNode.nodeValue.match(regex);
    if (match && !(await blocklist()) && enabled) {
        const img = document.createElement("img");
        if (gooberdoo != "neofox_floof_explode") {
            img.src = `https://site.skydevs.me/assets/neofox/${gooberdoo}.png`;
        } else {
            img.src = `https://site.skydevs.me/assets/neofox/${gooberdoo}.gif`;
        }
        img.width = 25;
        img.height = 25;
        img.classList.add("neofox")
        img.alt = gooberdoo
        const parts = textNode.nodeValue.split(match[0]);
        const fragment = document.createDocumentFragment();
        fragment.appendChild(document.createTextNode(parts[0]));
        fragment.appendChild(img);
        fragment.appendChild(document.createTextNode(parts[1] || ""));
        textNode.parentNode.replaceChild(fragment, textNode);
    }
}

function togglestat() {
    enabled = !enabled;
}
