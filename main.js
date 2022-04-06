function preload(){}

function setup(){
    canvas = createCanvas(400 , 400);
    canvas.position(480, 200);
    video = createCapture(VIDEO);
    video.size(400 , 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("model loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }
}

function draw(){
    image(video,0,0,400,400);
}
function takesnap(){
    save("myPhoto.png")
}