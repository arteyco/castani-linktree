function setup() {
    createCanvas(displayWidth, displayHeight);
    noStroke();
    fill(0);
  }
  function draw() {
    background(204);
    if (mouseX < displayWidth/3) {
      rect(0, 0, displayWidth/3, displayHeight);  // Left
    }
    else if (mouseX < displayWidth/1.5) {
      rect(displayWidth/3, 0, displayWidth/3, displayHeight-300); // Middle
      
      // Create a anchor object using createA() function
      link = createA("https://www.geeksforgeeks.org/",
                      "GoGG", "_blank");
      
      // Position the anchor objects
      link.position(650, 340);
    }
    else {
      rect(displayWidth/1.5, 0, displayWidth/3, displayHeight-300); // Right
    }
  }