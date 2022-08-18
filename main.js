nose_x = 0;
nose_y = 0;
left_wristX = 0;
right_wristX = 0;
difference = 0;

function  setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 450);
    canvas.position(600 , 120)
    pose_net = ml5.poseNet(video, modelLoaded);
    pose_net.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose_x: " + nose_x + " nose_y: " + nose_y);
        left_wristX = results[0].pose.leftWrist.x;
        right_wristX = results[0].pose.rightWrist.x;
        difference = floor(left_wristX - right_wristX);
        console.log("right_wristX: " + right_wristX + " left_wristX: " + left_wristX + " difference: " + difference);
    }
}

function draw(){
    background('#B5B2B2');
    document.getElementById("square_side").innerHTML = "El ancho y alto del cuadrado será de: " + difference + " pixeles";
    fill('#FF0000');
    stroke('#FF0000');
    square(nose_x, nose_y, difference);
}

function modelLoaded(){
    console.log("PoseNet se inicializó");
    
}


 