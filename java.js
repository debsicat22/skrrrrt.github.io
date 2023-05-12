function changeColor() {
    var colors = ["black", "blue", "green", "orange", "purple", "pink"];
    var heading = document.getElementById("gamehub-heading");
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    heading.style.color = randomColor;
  }
  
  setInterval(changeColor, 1000);