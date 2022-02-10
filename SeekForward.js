// ==UserScript==
// @name         Video Seek Forward Backward 3 Seconds
// @namespace    https://github.com/Dadangdut33
// @version      1.0
// @description  Use ctrl + \ and ctrl + ] to seek video forward and backward 3 seconds. To seek forward use ctrl + \. To seek backward use ctrl + ]. You can modify the key and the seek time to your desire easily in the script.
// @author       Dadangdut33
// @include *
// @run-at document-load
// ==/UserScript==

(function () {
	"use strict";

	var videos = document.getElementsByTagName("video");
	const videoItem = [];
	for (let i = 0; i < videos.length; i++) {
		videoItem.push(videos.item(i));
	}

	videoItem.forEach(function (video) {
		window.addEventListener("keydown", function (event) {
			// use https://keycode.info/ to find the keycode
			// check if key press is ctrl + ]
			if (event.ctrlKey && event.keyCode === 221) {
				video.currentTime -= 3; // time to seek backward
			}
			// check if key press is ctrl + \
			if (event.ctrlKey && event.keyCode === 220) {
				video.currentTime += 3; // time to seek forward
			}
		});
	});
})();
