window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const left = document.querySelector(".pre-left");
  const right = document.querySelector(".pre-right");

  setTimeout(() => {
    left.style.transform = "translateX(-100%)";
    right.style.transform = "translateX(100%)";

    setTimeout(() => {
      gsap.to(preloader, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          preloader.style.display = "none";
        },
      });
    }, 800);
  }, 1500);
});
const menuToggle = document.querySelector('.menu-toggle');
  const links = document.getElementById('links');

  menuToggle.addEventListener('click', () => {
    links.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });


const realText = "BADREDDINE QANOUF";
const hashText = "5d41402abc4b2a76b";
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const el = document.getElementById("aboutContent");
const maxLength = Math.max(realText.length, hashText.length);
const paddedReal = realText.padEnd(maxLength, " ");
const paddedHash = hashText.padEnd(maxLength, " ");
let isToReal = true;
function animate(fromText, toText, callback) {
  let current = fromText.split("");
  let target = toText.split("");
  let i = 0;
  function step() {
    if (i >= target.length) {
      setTimeout(callback, 800);
      return;
    }
    let glitchCount = 0;
    const maxGlitch = 5;
    const glitchInterval = setInterval(() => {
      if (glitchCount < maxGlitch) {
        current[i] = chars[Math.floor(Math.random() * chars.length)];
        el.textContent = current.join("");
        glitchCount++;
      } else {
        clearInterval(glitchInterval);
        current[i] = target[i];
        el.textContent = current.join("");
        i++;
        setTimeout(step, 1);
      }
    }, 15);
  }
  step();
}
function loop() {
  if (isToReal) {
    animate(paddedHash, paddedReal, () => {
      isToReal = false;
      loop();
    });
  } else {
    animate(paddedReal, paddedHash, () => {
      isToReal = true;
      loop();
    });
  }
}
loop();

particlesJS("particles-js", {
  particles: {
    number: { value: 140, density: { enable: true, value_area: 800 } },
    color: { value: "#ec38bc" },
    shape: { type: "circle", stroke: { width: 0, color: "#000" } },
    opacity: { value: 0.5, anim: { enable: false } },
    size: { value: 3, random: true, anim: { enable: false } },
    line_linked: {
      enable: true,
      distance: 130,
      color: "#ec38bc",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 5,
      direction: "none",
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 0.7 } },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
})