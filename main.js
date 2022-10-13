mustasheX = 0;
mustasheY = 0;

function preload() {
    mustashe = loadImage('https://i.postimg.cc/NfTpJ95f/mustashe-removebg-preview.png')
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet is Initialized')
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        mustasheX = results[0].pose.nose.x;
        mustasheY = results[0].pose.nose.y;
        console.log(" x =" + mustasheX);
        console.log(" y =" + mustasheY);
    }
}

function draw() {
    image(video, 0, 0, 400, 400);
    image(mustashe, mustasheX-33, mustasheY+1, 70, 50);
}

function take_snapshot() {
    save('myFilterImage.png');
}