function dothe() {    
    
    const percentageText = document.getElementById("percentage").innerText;
    const percentageValue = parseInt(percentageText);
    document.getElementById("progress-circle").style.setProperty('--percentage', `${percentageValue}%`);
    document.getElementById("progress-circle").id = "modified";
    document.getElementById("percentage").id = "modified";
    
}
let counter = 0;
const items = 40;
while (counter < items) {
    dothe();
    counter++;
}
