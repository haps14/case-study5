Webcam.set({
    width: 310,
    height: 100,
    img_format: 'png',
    png_quality: 90,

    constraints: {
        facingMode: "environment"
    }
});
camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image"src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('  MobileNet', modalLoaded);

function modalLoaded() {
    console.log('Modal Loaded!');
}




function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}


function gotResult(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result)
        document.getElementById("mobile").innerHTML = result[0].label;
    }
}
function back1(){
    window.location = "main_indexi.html";
}


