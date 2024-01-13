function preload() {   
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO)
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480)

fill(0, 128, 0)
stroke(0, 128, 0)
circle(0, 480, 150)

fill(0, 128, 0)
stroke(0, 128, 0)
circle(640, 0, 150)

fill(0, 128, 0)
stroke(0, 128, 0)
circle(640, 480, 150)

fill(0, 128, 0)
stroke(0, 128, 0)
circle(0, 0, 150)
}

function take_snapshot() {
    save('cool image.png')
}