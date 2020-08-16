// Get UI Elements
const hireBtn = document.getElementById("btn-hire");
const favBtn = document.getElementById("btn-fav");
const counterEls = document.querySelectorAll("#counterEl");
const countSpeed = 24;

// Click Event For The Hire Btn
hireBtn.addEventListener("click", (e) => {
	e.preventDefault();

	if (hireBtn.classList.contains("btn-hire")) {
		hireBtn.classList.remove("btn-hire");
		hireBtn.classList.add("btn-hired");
		hireBtn.innerHTML = `<i class="fas fa-file-signature"></i> Hired`;
	} else if (hireBtn.classList.contains("btn-hired")) {
		hireBtn.classList.remove("btn-hired");
		hireBtn.classList.add("btn-hire");
		hireBtn.innerHTML = `hire debra`;
	}
});

// Click Event For The Favourite Btn
favBtn.addEventListener("click", (e) => {
	e.preventDefault();

	if (favBtn.classList.contains("btn-fav")) {
		favBtn.classList.remove("btn-fav");
		favBtn.classList.add("btn-faved");
		favBtn.innerHTML = `<i class="fas fa-heart"></i> favorites`;
	} else if (favBtn.classList.contains("btn-faved")) {
		favBtn.classList.remove("btn-faved");
		favBtn.classList.add("btn-fav");
		favBtn.innerHTML = `Add to favorites`;
	}
});

// Animated Counter Function
counterEls.forEach((counterEl) => {
	const updatedCount = () => {
		const target = +counterEl.getAttribute("data-target");
		const count = +counterEl.innerText;

		const inc = Math.round(target / countSpeed);

		if (count < target) {
			counterEl.innerText = count + inc;
			setTimeout(updatedCount, 10);
		}

		// console.log(target);
	};

	updatedCount();
});
