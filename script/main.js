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

let pageId1 = document.getElementById("page1");
let pageId2 = document.getElementById("page2");
let subOptions = document.querySelectorAll(".sub_option");
let imageCheck = document.createElement("img");
imageCheck.setAttribute("src", "./img/active.svg");

let options = document.querySelectorAll(".option");

let buttons = document.querySelectorAll(".button");
buttons.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    if (item.classList.contains("active")) {
      options.forEach((option) => {
        option.classList.remove("disabled");
      });
    } else {
      options.forEach((option) => {
        option.classList.remove("active");
        option.classList.add("disabled");
      });
      subOptions.forEach((subOption) => {
        subOption.classList.add("disabled");
        subOption.classList.remove("active");
      });
    }
  });
});

options.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.classList.toggle("active");

    if (
      pageId1.classList.contains("active") ||
      pageId2.classList.contains("active")
    ) {
      subOptions.forEach((subOption) => {
        subOption.classList.remove("disabled");
        subOption.addEventListener("click", () => {
          subOptions.forEach((item) => {
            item.classList.remove("active");
          });
          subOption.classList.add("active");
        });
      });
    } else {
      subOptions.forEach((subOption) => {
        subOption.classList.add("disabled");
      });
    }

    if (
      !pageId1.classList.contains("active") &&
      !pageId2.classList.contains("active")
    ) {
      subOptions.forEach((subOption) => {
        subOption.classList.add("disabled");
        subOption.classList.remove("active");
      });
    }
  });
});

let pageId1_2 = document.getElementById("page1_2");
let pageId2_2 = document.getElementById("page2_2");
let subOptions_2 = document.querySelectorAll(".sub_option_2");

let options_2 = document.querySelectorAll(".option_2");

let buttons_2 = document.querySelectorAll(".button_2");
buttons_2.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    if (item.classList.contains("active")) {
      options_2.forEach((option) => {
        option.classList.remove("disabled");
      });
    } else {
      options_2.forEach((option) => {
        option.classList.remove("active");
        option.classList.add("disabled");
      });
      subOptions_2.forEach((subOption) => {
        subOption.classList.add("disabled");
        subOption.classList.remove("active");
      });
    }
  });
});

options_2.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.classList.toggle("active");

    if (
      pageId1_2.classList.contains("active") ||
      pageId2_2.classList.contains("active")
    ) {
      subOptions_2.forEach((subOption) => {
        subOption.classList.remove("disabled");
        subOption.addEventListener("click", () => {
          subOptions_2.forEach((item) => {
            item.classList.remove("active");
          });
          subOption.classList.add("active");
        });
      });
    } else {
      subOptions_2.forEach((subOption) => {
        subOption.classList.add("disabled");
      });
    }

    if (
      !pageId1_2.classList.contains("active") &&
      !pageId2_2.classList.contains("active")
    ) {
      subOptions_2.forEach((subOption) => {
        subOption.classList.add("disabled");
        subOption.classList.remove("active");
      });
    }
  });
});

let pageId1_3 = document.getElementById("page1_3");
let pageId2_3 = document.getElementById("page2_3");
let subOptions_3 = document.querySelectorAll(".sub_option_3");

let options_3 = document.querySelectorAll(".option_3");

let buttons_3 = document.querySelectorAll(".button_3");
buttons_3.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    if (item.classList.contains("active")) {
      options_3.forEach((option) => {
        option.classList.remove("disabled");
      });
    } else {
      options_3.forEach((option) => {
        option.classList.remove("active");
        option.classList.add("disabled");
      });
      subOptions_3.forEach((subOption) => {
        subOption.classList.add("disabled");
        subOption.classList.remove("active");
      });
    }
  });
});

options_3.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.classList.toggle("active");

    if (
      pageId1_3.classList.contains("active") ||
      pageId2_3.classList.contains("active")
    ) {
      subOptions_3.forEach((subOption) => {
        subOption.classList.remove("disabled");
        subOption.addEventListener("click", () => {
          subOptions_3.forEach((item) => {
            item.classList.remove("active");
          });
          subOption.classList.add("active");
        });
      });
    } else {
      subOptions_3.forEach((subOption) => {
        subOption.classList.add("disabled");
      });
    }

    if (
      !pageId1_3.classList.contains("active") &&
      !pageId2_3.classList.contains("active")
    ) {
      subOptions_3.forEach((subOption) => {
        subOption.classList.add("disabled");
        subOption.classList.remove("active");
      });
    }
  });
});

// price 1
// Seleciona os elementos relevantes
let page1 = document.getElementById("page1");
let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");
let opt3 = document.getElementById("opt3");
let priceSpan = document.querySelector(".price span");

// Função para verificar e atualizar o valor do preço
function atualizarPreco() {
  let page1 = document.getElementById("page1");
  let opt1 = document.getElementById("opt1");

  if (page1.classList.contains("active") && opt1.classList.contains("active")) {
    priceSpan.innerHTML = "700"; // Atualiza o valor do preço
  } else if (
    page1.classList.contains("active") &&
    opt2.classList.contains("active")
  ) {
    priceSpan.innerHTML = "850"; // Atualiza o valor do preço
  } else if (
    page1.classList.contains("active") &&
    opt3.classList.contains("active")
  ) {
    priceSpan.innerHTML = "1000"; // Atualiza o valor do preço
  } else {
    priceSpan.innerHTML = "00"; // Define o valor de volta para 00,00
  }
}

// Chama a função inicialmente para definir o valor com base no estado atual
atualizarPreco();

// Verifica e atualiza o preço a cada 1000 milissegundos (1 segundo)
setInterval(atualizarPreco, 1000);
