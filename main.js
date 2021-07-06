var moustacheX = 0;
var moustacheY = 0;
function preload() {
    moustache = loadImage("https://i.postimg.cc/3wKTB474/mustache-clipart-transparent-5.jpg");
}

function setup() {
    canvas = createCanvas(350,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    image(video,0,0,350,350);
    image(moustache,moustacheX,moustacheY,90,30);
}

function takeSnapshot() {

}

function modelLoaded() {
    console.log("PoseNet is initialized");
    }

    function gotPoses(results) {
        if (results.length > 0) {
            console.log(results);
            moustacheX = results[0].pose.nose.x-13;
            moustacheY = results[0].pose.nose.y+40;
        }
        }