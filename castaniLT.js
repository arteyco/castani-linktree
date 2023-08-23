function setup() {
  createCanvas(900, 300);
  noStroke();
  fill(0);
}
function draw() {
  background(204);
  if (mouseX < 300) {
    rect(0, 0, 300, 300);  // Left
  }
  else if (mouseX < 600) {
    rect(300, 0, 300, 300); // Middle
    
	// Create a anchor object using createA() function
	link = createA("https://www.geeksforgeeks.org/",
					"GoGG", "_blank");
	
	// Position the anchor objects
	link.position(430, 140);
  }
  else {
    rect(600, 0, 300, 400); // Right
  }
}