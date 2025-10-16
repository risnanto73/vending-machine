document.addEventListener("DOMContentLoaded", () => {
  // =======================================
  // 🧭 NAVBAR TOGGLE
  // =======================================
  const menuToggle = document.getElementById("menu-toggle");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("hidden");
    menuIcon?.classList.toggle("hidden");
    closeIcon?.classList.toggle("hidden");
  });

  // =======================================
  // ✨ SEQUENTIAL FADE-UP ANIMATION (Hero)
  // =======================================
  const fadeEls = [
    "#anim-1",
    "#anim-2",
    "#anim-3",
    "#anim-4",
    "#anim-5",
    "#anim-6",
  ];
  fadeEls.forEach((selector, i) => {
    const el = document.querySelector(selector);
    if (el) {
      setTimeout(() => el.classList.add("fade-up"), i * 400);
    }
  });

  // =======================================
  // 🌟 UNIVERSAL SCROLL REVEAL FUNCTION
  // =======================================
  const revealElements = document.querySelectorAll("[data-reveal]");
  const handleScrollReveal = () => {
    const trigger = window.innerHeight * 0.85;
    revealElements.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < trigger) {
        el.classList.add("opacity-100", "translate-y-0");
        el.classList.remove("opacity-0", "translate-y-6");
      }
    });
  };
  window.addEventListener("scroll", handleScrollReveal);
  handleScrollReveal();

  // =======================================
  // 🎨 PARALLAX MOVEMENT (Trust Section + QA)
  // =======================================
  const parallaxElements = [
    document.getElementById("trust-parallax"),
    document.getElementById("qa-parallax"),
  ];

  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    parallaxElements.forEach((el) => {
      if (el) el.style.transform = `translate(${x}px, ${y}px)`;
    });
  });

  // =======================================
  // 💬 CINEMATIC Q&A LOOP
  // =======================================
  const challenge = document.getElementById("challenge");
  const answer = document.getElementById("answer");

  if (challenge && answer) {
    let showChallenge = true;

    const toggleQA = () => {
      if (showChallenge) {
        // Show Challenge
        challenge.classList.remove("opacity-0", "scale-95");
        challenge.classList.add("opacity-100", "scale-100");

        answer.classList.remove("opacity-100", "scale-100");
        answer.classList.add("opacity-0", "scale-95");
      } else {
        // Show Answer
        answer.classList.remove("opacity-0", "scale-95");
        answer.classList.add("opacity-100", "scale-100");

        challenge.classList.remove("opacity-100", "scale-100");
        challenge.classList.add("opacity-0", "scale-95");
      }
      showChallenge = !showChallenge;
    };

    // initial state
    challenge.classList.add("opacity-100", "scale-100");
    answer.classList.add("opacity-0", "scale-95");

    // auto-loop every 5s
    setInterval(toggleQA, 5000);
  }
});

// =======================================
// 💬 CINEMATIC Q&A LOOP (Improved version)
// =======================================
const challenge = document.getElementById("challenge");
const answer = document.getElementById("answer");

if (challenge && answer) {
  let showChallenge = true;

  const toggleQA = () => {
    if (showChallenge) {
      // Show Challenge
      challenge.classList.add("opacity-100", "scale-100");
      challenge.classList.remove("opacity-0", "scale-95");

      answer.classList.add("opacity-0", "scale-95");
      answer.classList.remove("opacity-100", "scale-100");
    } else {
      // Show Answer
      answer.classList.add("opacity-100", "scale-100");
      answer.classList.remove("opacity-0", "scale-95");

      challenge.classList.add("opacity-0", "scale-95");
      challenge.classList.remove("opacity-100", "scale-100");
    }
    showChallenge = !showChallenge;
  };

  // initial state
  challenge.classList.add("opacity-100", "scale-100");
  answer.classList.add("opacity-0", "scale-95");

  // auto-loop every 5s
  setInterval(toggleQA, 5000);
}

// ================== ABOUT US ==================
// 🎞️ Sequential Fade-Up on Scroll
const aboutCards = document.querySelectorAll("#about-us .card");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("fade-up", "hover-animated");
        }, i * 300); // Delay antar card
      }
    });
  },
  { threshold: 0.2 }
);

aboutCards.forEach((card) => observer.observe(card));

// ================== HOW IT WORKS ==================
// 🌟 FADE + STAGGER REVEAL
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  reveals.forEach((el, i) => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom && !el.classList.contains("active")) {
      const row = Math.floor(i / 3);
      const col = i % 3;
      const delay = row * 400 + col * 200;
      setTimeout(() => {
        el.classList.add("active");
      }, delay);
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// 🌌 PARTICLE BACKGROUND GENERATOR
const particleContainer = document.getElementById("particle-bg");
const particleCount = 40; // jumlah partikel

for (let i = 0; i < particleCount; i++) {
  const p = document.createElement("div");
  p.classList.add("particle");
  const size = Math.random() * 6 + 2;
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const duration = Math.random() * 5 + 5;

  p.style.width = `${size}px`;
  p.style.height = `${size}px`;
  p.style.left = `${x}%`;
  p.style.top = `${y}%`;
  p.style.animationDuration = `${duration}s`;
  particleContainer.appendChild(p);
}

// ================== WHY CHOOSE VENDI GLOBAL ==================

document
  .querySelectorAll(".why-card")
  .forEach((card) => observer.observe(card));

// Sedikit efek tilt mouse (parallax card)
document.querySelectorAll(".why-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / 20) * -1;
    const rotateY = (x - centerX) / 20;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});

// ================== CONTACT ==================
// **********************************************
// 1. Efek Ripple pada Tombol
// **********************************************
window.showRippleEffect = function (event) {
  const button = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  // Mendapatkan posisi klik relatif terhadap tombol
  const rect = button.getBoundingClientRect();
  const x = event.clientX - rect.left - radius;
  const y = event.clientY - rect.top - radius;

  // Styling elemen ripple
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  circle.classList.add("ripple");

  // Hapus ripple lama jika ada dan tambahkan yang baru
  const oldRipple = button.querySelector(".ripple");
  if (oldRipple) {
    oldRipple.remove();
  }
  button.appendChild(circle);
};

// **********************************************
// 2. Efek Reveal (Scroll Animation)
// **********************************************
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll("[data-reveal]");

  const observerOptions = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.1, // 10% elemen terlihat
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Ketika elemen masuk viewport
        entry.target.classList.add("is-revealed");
        // Hentikan pengamatan setelah di-reveal
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => {
    observer.observe(el);
  });

  // PENTING: Tambahkan validasi sederhana untuk demo
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    const requiredInputs = form.querySelectorAll(
      "input[required], textarea[required]"
    );
    let allValid = true;

    requiredInputs.forEach((input) => {
      if (!input.value.trim()) {
        allValid = false;
        // Tambahkan kelas border merah saat kosong
        input.classList.add("border-red-500", "animate-pulse");
        setTimeout(() => {
          input.classList.remove("border-red-500", "animate-pulse");
        }, 1500);
      }
    });

    if (!allValid) {
      e.preventDefault();
      alert("Harap lengkapi semua bidang!");
    }
  });
});
