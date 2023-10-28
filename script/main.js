const lenis = new Lenis();

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const glider = new Glider(document.querySelector(".glider"), {
	dots: "#dots",
});

function sliderAuto(slider, miliseconds) {
	const slidesCount = slider.track.childElementCount;
	let slideTimeout = null;
	let nextIndex = 1;

	function slide() {
		slideTimeout = setTimeout(function () {
			if (nextIndex >= slidesCount) {
				nextIndex = 0;
			}
			slider.scrollItem(nextIndex++);
		}, miliseconds);
	}

	slider.ele.addEventListener("glider-animated", function () {
		window.clearInterval(slideTimeout);
		slide();
	});

	slide();
}
sliderAuto(glider, 2000);

let timeline_1 = gsap.timeline({
	scrollTrigger: {
		trigger: ".section_4",
		start: "top center",
		end: "90% center",
		scrub: true,
		markers: false,
	},
});
timeline_1
	.to(".card_wrapper", {
		y: -200,
	})
	.to(".card_wrapper", {
		y: 0,
	});

let timeline_2 = gsap.timeline({
	scrollTrigger: {
		trigger: ".section_4",
		start: "top center",
		end: "90% center",
		scrub: true,
		markers: false,
	},
});
timeline_2
	.to(".card_1", {
		y: -200,
	})
	.to(".card_1", {
		y: 0,
	});

let timeline_3 = gsap.timeline({
	scrollTrigger: {
		trigger: ".section_4",
		start: "top center",
		end: "90% center",
		scrub: true,
		markers: false,
	},
});
timeline_3
	.to(".card_3", {
		y: -100,
	})
	.to(".card_3", {
		y: 0,
	});

let timeline_4 = gsap
	.timeline({
		scrollTrigger: {
			trigger: ".section_5",
			start: "top center",
			end: "90% center",
			scrub: true,
			markers: false,
		},
	})
	.to(".c_1", {
		y: -700,
	})
	.to(".c_1", {
		y: 0,
	});

let timeline_5 = gsap
	.timeline({
		scrollTrigger: {
			trigger: ".section_5",
			start: "top center",
			end: "90% center",
			scrub: true,
			markers: false,
		},
	})
	.to(".c_2", {
		y: -400,
	})
	.to(".c_2", {
		y: 0,
	});

let timeline_6 = gsap
	.timeline({
		scrollTrigger: {
			trigger: ".section_5",
			start: "top center",
			end: "90% center",
			scrub: true,
			markers: false,
		},
	})
	.to(".c_3", {
		y: -700,
	})
	.to(".c_3", {
		y: 0,
	});

let timeline_7 = gsap
	.timeline({
		scrollTrigger: {
			trigger: ".section_5",
			start: "top center",
			end: "90% center",
			scrub: true,
			markers: false,
		},
	})
	.to(".c_4", {
		y: -400,
	})
	.to(".c_4", {
		y: 0,
	});

let timeline_8 = gsap
	.timeline({
		scrollTrigger: {
			trigger: ".section_5",
			start: "top center",
			end: "90% center",
			scrub: true,
			markers: false,
		},
	})
	.to(".c_5", {
		y: -700,
	})
	.to(".c_5", {
		y: 0,
	});

let timeline_9 = gsap
	.timeline({
		scrollTrigger: {
			trigger: ".section_5",
			start: "top center",
			end: "90% center",
			scrub: true,
			markers: false,
		},
	})
	.to(".c_6", {
		y: -400,
	})
	.to(".c_6", {
		y: 0,
	});

const h1 = document.querySelector(".typing_effect");
const originalText = h1.innerText;
const newTexts = [
	"que elevam a presença digital da sua empresa.",
	"por um preço de outra galáxia.",
	"que vai te fazer vender mais.",
	"mais bonito que o site do seu concorrente.",
];
let currentTextIndex = 0;
let currentIndex = 0;
const typingSpeed = 50;

function typeText(text, i) {
	if (i < text.length) {
		h1.innerText = text.slice(0, i + 1);
		setTimeout(function () {
			typeText(text, i + 1);
		}, typingSpeed);
	} else {
		setTimeout(eraseText, 1000);
	}
}

function eraseText() {
	if (currentIndex < h1.innerText.length) {
		h1.innerText = h1.innerText.slice(0, currentIndex - 1);
		currentIndex--;
		setTimeout(eraseText, typingSpeed);
		currentIndex++;
	} else {
		currentTextIndex = (currentTextIndex + 1) % newTexts.length;
		typeText(newTexts[currentTextIndex], 0);
	}
}

typeText(newTexts[currentTextIndex], currentIndex);

function updateActiveImage(element) {
	if (element.classList.contains("active")) {
		element.innerHTML += `<img class="active_option" src="./img/active.svg" alt="" />`;
	} else {
		element.querySelector("img.active_option").remove();
	}
}

document.querySelectorAll(".button").forEach((item) => {
	item.addEventListener("click", () => {
		item.classList.toggle("active");
	});
});

var subOptions = document.querySelectorAll(".sub_option");
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");

function updateSubOptions() {
	if (
		page1.classList.contains("active") ||
		page2.classList.contains("active")
	) {
		// Remova a classe "disabled" de todos os elementos
		subOptions.forEach(function (opt) {
			opt.classList.remove("disabled");
		});
	} else {
		// Adicione a classe "disabled" aos elementos
		subOptions.forEach(function (opt) {
			opt.classList.add("disabled");
		});
		// Remova a classe "active" de todos os elementos
		subOptions.forEach(function (opt) {
			opt.classList.remove("active");
		});
	}
}

// Adicione um ouvinte de clique aos elementos "page1" e "page2"
page1.addEventListener("click", updateSubOptions);
page2.addEventListener("click", updateSubOptions);

// Chame a função para inicializar o estado
updateSubOptions();

// Adicione um evento de clique a cada elemento com classe "sub_option"
subOptions.forEach(function (subOption) {
	subOption.addEventListener("click", function () {
		if (!subOption.classList.contains("disabled")) {
			// Remova a classe "active" de todos os elementos
			subOptions.forEach(function (opt) {
				opt.classList.remove("active");
			});

			// Adicione a classe "active" apenas ao elemento clicado
			subOption.classList.add("active");
		}
	});
});

var buttons = document.querySelectorAll(".button");

buttons.forEach(function (button) {
	button.addEventListener("click", function () {
		var serviceOptions = button
			.closest(".select_service")
			.querySelector(".service_options");

		// Verifique se o botão possui a classe "active"
		if (button.classList.contains("active")) {
			serviceOptions.style.display = "block";
		} else {
			serviceOptions.style.display = "none";
		}
	});
});
