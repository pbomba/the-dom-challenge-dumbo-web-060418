//write our code here.



document.addEventListener('DOMContentLoaded', init)

let timer = document.querySelector('#counter')
let paused = false

function init(DOMContentLoadedEvent) {
	let seconds = 0;
	let intervalId = startTimer()
	let timesLiked = []
	
function startTimer(){
	return setInterval(function() {
		timer.innerText = seconds++;
	 }, 1000);
	}

function stopTimer(){
	clearInterval(intervalId);
	}

document.getElementById("-").addEventListener('click', subtractTime)
document.getElementById("+").addEventListener('click', addTime)
document.getElementById("<3").addEventListener('click', likeTime)
document.getElementById("pause").addEventListener('click', pauseTimer)
document.getElementById("comment-form").addEventListener('submit', function(e){
	e.preventDefault();
	const commentText = e.target.querySelector('[name="bodyOfComment"]').value
	comments = document.querySelector(".comments")
	var entry = document.createElement('li');
	entry.appendChild(document.createTextNode(`fuckshit ${commentText}`));
	list.appendChild(entry);
	// comments.innerText += newCommentTemplate
});

function subtractTime(){
	seconds = seconds - 1;
	timer.innerText = seconds
}

function addTime(){
	seconds = seconds + 1;
	timer.innerText = seconds
}

function likeTime(){
	timesLiked.push(seconds)
	let likesNumber = timesLiked.filter(function(el){
		return el === seconds;
	}) 
	alert(`you like ${seconds - 1} seconds (${likesNumber.length} times)`)
}

function pauseTimer(){
	if (paused===false) { 	
		paused = true
	document.getElementById("-").disabled = true;
	document.getElementById("+").disabled = true;
	document.getElementById("<3").disabled = true;
	document.getElementById("pause").innerText = "resume"
	stopTimer()
	} else {
	document.getElementById("-").disabled = false;
	document.getElementById("+").disabled = false;
	document.getElementById("<3").disabled = false;
	paused = false;
	document.getElementById("pause").innerText = "pause"
	intervalId = startTimer();
	}
}


}
