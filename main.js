function setup(){
    canvas = createCanvas(600,600);
    canvas.center();

    video = createCapture(VIDEO)
    video.hide();

    model = ml5.poseNet(video , ModelLoaded)
    model.on("pose",showresult)
}

function preload(){
    song1 = loadSound("Happy.mp3")
    song2 = loadSound("U Cant Touch This.mp3")
    song3 = loadSound("Monkeys.mp3")
}

function ModelLoaded(){
    console.log("Model has loaded")
}
lwy = 0;
lwx = 0;
rwx = 0;
rwy = 0;
sn = 0;
leftScore = 0;
rightScore = 0;

function showresult(result){
    console.log(result)
    lwx = result[0].pose.leftWrist.x;
    lwy = result[0].pose.leftWrist.y;
    rwx = result[0].pose.rightWrist.x;
    rwy = result[0].pose.rightWrist.y;
    leftScore = result[0].pose.keypoints[9].score
    rightScore = result[0].pose.keypoints[10].score
}
function draw(){
    image(video , 0 , 0 , 600 , 600)
    fill("blue")
    stroke("blue")
    

    if(leftScore > 0.2){
        circle(lwx, lwy , 20)

        if(sn == 1){
            if(lwy > 0 && lwy < 120){
                song1.rate(2.5)
                document.getElementById("speed").innerHTML = "Speed = 2.5"
            }
    
            if(lwy  > 120 && lwy < 240  ){
                song1.rate(2)
                document.getElementById("speed").innerHTML = "Speed = 2"
            }
    
            if(lwy  > 240 && lwy < 360  ){
                song1.rate(1.5)
                document.getElementById("speed").innerHTML = "Speed = 1.5"
            }
            
            if(lwy  > 360 && lwy < 480){
                song1.rate(1)
                document.getElementById("speed").innerHTML = "Speed = 1"
            }
    
            if(lwy  > 480 && lwy < 600){
                song1.rate(0.5)
                document.getElementById("speed").innerHTML = "Speed = 0.5"
            }
        }

        if(sn == 2){
            if(lwy > 0 && lwy < 120){
                song2.rate(2.5)
                document.getElementById("speed").innerHTML = "Speed = 2.5"
            }
    
            if(lwy  > 120 && lwy < 240  ){
                song2.rate(2)
                document.getElementById("speed").innerHTML = "Speed = 2"
            }
    
            if(lwy  > 240 && lwy < 360  ){
                song2.rate(1.5)
                document.getElementById("speed").innerHTML = "Speed = 1.5"
            }
            
            if(lwy  > 360 && lwy < 480){
                song2.rate(1)
                document.getElementById("speed").innerHTML = "Speed = 1"
            }
    
            if(lwy  > 480 && lwy < 600){
                song2.rate(0.5)
                document.getElementById("speed").innerHTML = "Speed = 0.5"
            }
        }
        
        if(sn == 3){
            if(lwy > 0 && lwy < 120){
                song3.rate(2.5)
                document.getElementById("speed").innerHTML = "Speed = 2.5"
            }
    
            if(lwy  > 120 && lwy < 240  ){
                song3.rate(2)
                document.getElementById("speed").innerHTML = "Speed = 2"
            }
    
            if(lwy  > 240 && lwy < 360  ){
                song3.rate(1.5)
                document.getElementById("speed").innerHTML = "Speed = 1.5"
            }
            
            if(lwy  > 360 && lwy < 480){
                song3.rate(1)
                document.getElementById("speed").innerHTML = "Speed = 1"
            }
    
            if(lwy  > 480 && lwy < 600){
                song3.rate(0.5)
                document.getElementById("speed").innerHTML = "Speed = 0.5"
            }
        }
    }
    
    if(rightScore > 0.4){
        circle(rwx, rwy , 20)
        numrwy = Number(rwy);
        vol = numrwy / 500;
        actualvol = 1 - vol;
        if(sn == 1){
            song1.setVolume(actualvol);
        }
        if(sn == 2){
            song2.setVolume(actualvol);
        }
        if(sn == 3){
            song3.setVolume(actualvol);
        }
        document.getElementById("volume").innerHTML = "Volume: " + actualvol.toFixed(2); 
        
    }

    

    
}

function play(){
    uc = document.getElementById("dropdown").value;
    if(uc == "U Cant Touch This"){
        sn = 2;

    }

    if(uc == "Monkeys Spinning Monkeys"){
        sn = 3;
    }

    if(uc == "Happy"){
        sn = 1;
    }

    if(sn == 1){
        song1.setVolume(0.5)
        song1.rate(1)
        song1.play()
        song2.stop();
        song3.stop();
    }
    if(sn == 2){
        song2.setVolume(0.5)
        song2.rate(1)
        song2.play()
        song1.stop();
        song3.stop();
    }

    if(sn == 3){
        song3.setVolume(0.5)
        song3.rate(1)
        song3.play()
        song1.stop();
        song2.stop()
    }
}

function stop(){
    song1.stop();
    song2.stop();
    song3.stop();
}

