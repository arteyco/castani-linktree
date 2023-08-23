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
      rect(0, 0, W/3, H);  // Left
    }
    else if (mouseX < displayWidth/1.5) {
      rect(W/3, 0, W/3, H); // Middle
      
      // Create a anchor object using createA() function
      link = createA("https://www.geeksforgeeks.org/",
                      "GoGG", "_blank");
      
      // Position the anchor objects
      link.position(650, 440);
    }
    else {
      rect((w/3)*2, 0, W/3, H); // Right
    }
  }