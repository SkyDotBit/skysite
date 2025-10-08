const foxAPI = "https://randomfox.ca/floof/";
let foxImg = "0";
fetch(foxAPI).then(
  response => {
    return response.json();
  }
).then(
  data => {
    foxImg = data.image;
    console.log(data.image);
    const foxcon = document.createElement("link");
    foxcon.rel = "icon";
    foxcon.href = data.image;
    foxcon.type = "image/webp";
    document.head.appendChild(foxcon);
    const foxog = document.createElement("meta");
    foxog.content = data.image;
    foxog.property = "og:image";
    document.head.appendChild(foxog);
  }
)
