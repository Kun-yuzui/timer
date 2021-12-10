function move(obj, name, target) {
	clearInterval(obj.timerA);
	obj.timerA = setInterval(function() {
		let nowStyle = parseFloat(getComputedStyle(obj)[name]);
		if (nowStyle == target) {
			clearInterval(obj.timerA);
		} else {
			let speed = (target - nowStyle) / 10;
			obj.style[name] = nowStyle + speed + 'px';
		}
	}, 30)
}
