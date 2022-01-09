Webcam.set({height:300,width:300,img_format:'jpeg',jpeg_quality:100});

camera=document.getElementById("camera");

Webcam.attach(camera);

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'"  id="captured_picture">'
    })
}

console.log("ml5",ml5.version);
classifier=ml5.imageClassifier("MobileNet",modelLoaded);

function modelLoaded(){
console.log("The MobileNet Model has loaded!")
}

function check(){
    img = document.getElementById("captured_picture")
    classifier.classify(img,gotResult);
}

function gotResult(error,result){
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        document.getElementById("objectname").innerHTML=result[0].label;
    }
}