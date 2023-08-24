let W;
let H;

function setup() {
    createCanvas(W=displayWidth, H=displayHeight);
    noStroke();
    fill(0);
  }
  function draw() {
    background(204);
    if (mouseX < W/3) {
      rect(0, 0, W/3, H/2);  // Left
            // Create a anchor object using createA() function
            link = createA("https://teia.art/objkt/824511",
            "GoGG-1", "_blank");
              // Position the anchor objects
      link.position(150, 440);
    }
    else if (mouseX < displayWidth/1.5) {
      rect(W/3, 0, W/3, H/2); // Middle
      
      // Create a anchor object using createA() function
      link = createA("https://teia.art/objkt/817364",
                      "GoGG-2", "_blank");
      
      // Position the anchor objects
      link.position(650, 440);
    }
    else {
      rect(910, 0, W/3, H/2); // Right
            // Create a anchor object using createA() function
            link = createA("https://teia.art/objkt/801719",
            "GoGG-3", "_blank");
              // Position the anchor objects
      link.position(1150, 440);
    }
  }