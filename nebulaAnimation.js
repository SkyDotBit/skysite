function isgecko() {
    return /Gecko\//i.test(navigator.userAgent);
}
if (!isgecko()) {
  const nebula = document.getElementById("nebulagen");
  nebulagen.classList.add("nebulaAnimation");
  console.log("Added nebula animation!");
} else {
  console.log("Uses Gecko");
}
