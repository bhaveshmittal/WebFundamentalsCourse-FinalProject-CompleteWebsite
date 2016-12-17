document.getElementById('cta-buy').addEventListener('mouseover', play);

function play() {
	var audio = document.getElementById('audio');
	audio.currentTime = 0;
	audio.play();
}