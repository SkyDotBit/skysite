var staramt = 120;
let starcount = 0;
const width = window.innerWidth;
const height = document.documentElement.scrollHeight;
let animatedstar = false;
let starsanimated = 0;
let starsnotanimated = 0;
let currentlocationwidth = 0;
let currentlocationheight = 0;
let currentstar = "";
function trueOrFalse() { return Math.random() < 0.2; }
function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
}
while (starcount != staramt) {
    const p = document.createElement('p');
    starcount = starcount + 1;
    console.log("Test");
    animatedstar = false;
    animatedstar = trueOrFalse();
    console.log(animatedstar);
    if (animatedstar == true) {
        starsanimated = starsanimated + 1;
        p.id = 'animatedstar';
    } else {
        starsnotanimated = starsnotanimated + 1;
    }
    currentlocationheight = getRandomInRange(0, height);
    currentlocationwidth = getRandomInRange(0, width)
    p.className = 'star';
    p.textContent = '●';
    p.style.position = 'absolute';
    p.style.top = currentlocationheight + "px";
    p.style.left = currentlocationwidth + "px";
    document.body.appendChild(p);
}
console.log("Stars animated: " + starsanimated);
console.log("Stars not animated: " + starsnotanimated);
starcount = 0;
while (starcount != staramt) {
    currentstar = document.getElementById("animatedstar");
    currentstar.classList.add("staranimated");
    currentstar.id = "modified";
    starcount = starcount + 1;
}