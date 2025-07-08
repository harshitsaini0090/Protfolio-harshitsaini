 🌗 Toggle Dark Mode const toggle = document.getElementById("darkModeToggle"); toggle.addEventListener("click", () => { document.body.classList.toggle("dark-mode");

// Optional: Save mode in localStorage const isDark = document.body.classList.contains("dark-mode"); localStorage.setItem("mode", isDark ? "dark" : "light"); });

// ✅ On Load: Apply saved mode window.addEventListener("load", () => { const savedMode = localStorage.getItem("mode"); if (savedMode === "dark") { document.body.classList.add("dark-mode"); } });

// 🌗 Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// 👀 Scroll Animation (Fade & Slide Up)
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    observer.observe(card);
  });

  // 🌀 Hover Tilt Effect
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * -10;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  });
});
// 🌗 Dark Mode Toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Save preference
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Auto-load dark mode if previously selected
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }
});
/* 🖼️ Popup Image Styling */
.image-popup {
  display: none;
  position: fixed;
  z-index: 999;
  left: 0; top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.8);
  justify-content: center;
  align-items: center;
}

.image-popup img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0,255,255,0.3);
  animation: zoomIn 0.4s ease;
  cursor: pointer;
}

@keyframes zoomIn {
  from { transform: scale(0.7); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}