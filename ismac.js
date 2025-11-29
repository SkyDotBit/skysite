function ismac() {
    return /Mac OS X/i.test(navigator.userAgent);
}
function ismobile() {
    return /iPhone|iPad|iPod|Mobi|Android/i.test(navigator.userAgent);
}
if (ismac() && !ismobile()) {
  const clipcontrol = document.getElementById("clipcontrol");
  console.log("Height: " + clipcontrol.height);
  clipcontrol.height = clipcontrol.height + 130;
}
