function randomPlaceForget(inputArray, index, color = red, speed = 3000) {
	const container = document.querySelector('.home--forget--cont');
	const item = document.createElement('div');
	item.classList.add('home--forget--item');
	item.style.color = color;
	item.style.animation = `move ${speed}ms linear infinite`;
	item.style.animationDelay = `${speed}ms`;
	item.textContent = inputArray[index];
	container.appendChild(item);
}

export default randomPlaceForget;
