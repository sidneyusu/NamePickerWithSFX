"use strict";


// Add list of names here
//const namesList = [
//    'Seema',
//  'Laya',
 // 'Sayanna',
//  'Shiva',
 // 'Srinivasa',
// 'Jagadeesh',
 // 'Pavithra',
 // 'Alivelu',
 // 'Sneh',
 // 'Monika',
 // 'Pavithra'

//];

var namesList;


// Default variables
let i = 0;
let x = 0;
let intervalHandle = null;
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const loadButton = document.getElementById('loadButton');
const headerOne = document.getElementById('headerNames');

const sfx = document.getElementById('drumRoll');
const clap = document.getElementById('clapping');
const bell = document.getElementById('bell');
const wow = document.getElementById('wow');

// Start or stop the name shuffle on button click
startButton.addEventListener('click', function() {
	sfx.play();
  this.style.display = "none";
	stopButton.style.display = "block";
	intervalHandle = setInterval(function () {
		headerNames.textContent = namesList[i++ % namesList.length];
	}, 50);
});
stopButton.addEventListener('click', function() {
	sfx.pause();
    bell.play();
    clap.play();
    setTimeout(function(){wow.play()}, 2000);

  this.style.display = "none";
	startButton.style.display = "block";
	clearInterval(intervalHandle);
});

// Allow use of spacebar to start/stop name shuffle
document.body.onkeyup = function(e) {
	if (e.keyCode == 32) {
		if (x%2===0) {
			startButton.style.display = "none";
			stopButton.style.display = "block";
			intervalHandle = setInterval(function () {
				headerNames.textContent = namesList[i++ % namesList.length];
			}, 50);
		} else {
			startButton.style.display = "block";
			stopButton.style.display = "none";
			clearInterval(intervalHandle);
			timer.innerHTML = time;
		}
		x++; 
	}
} 

let input = document.querySelector('input');

loadButton.addEventListener('click', function() {
    let files = input.files;
    
    if(files.length == 0) return;
    
    const file = files[0];
    
    let reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function() {
    console.log(reader.result);
    const text = reader.result;
    namesList = text.split(/\r\n|\n/);
    };

    reader.onerror = function() {
    console.log(reader.error);
    };


    
    alert("Names updated");

});

