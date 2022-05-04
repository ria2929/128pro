music=" ";
music2=" ";
leftWristX= 0;
leftWristY = 0;
rightWristX= 0;
rightWristY = 0;

function preload()
{
   song = loadSound("music.mp3");
   song = loadSound("music2.mp3");

}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCanvas(600, 500);
    canvas.center();

    video= createCreate(VIDEO);
    video.hide();

    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
}

function gotPoses(result)

{
    if(result.length > 0)
    {
        console.log(result);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY );

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + " rightWristY = " + rigthWristY );


    }
}