  /* ===================== PARTICLES ===================== */
  const particleContainer = document.createElement("div");
  particleContainer.classList.add("particles");
  document.body.appendChild(particleContainer);

  function createParticle() {
    const p = document.createElement("div");
    p.classList.add("particle");
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = 3 + Math.random() * 4 + "s";
    p.style.opacity = 0.3 + Math.random() * 0.7;
    particleContainer.appendChild(p);
    setTimeout(() => p.remove(), 7000);
  }
  setInterval(createParticle, 250);

  /* ===================== SCROLL FADE-IN ===================== */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  });
  document.querySelectorAll(".event, h2").forEach(el => observer.observe(el));

  /* ===================== CARD GLOW ===================== */
  document.querySelectorAll('.event').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = "0 0 25px rgba(228, 194, 123, 0.5)";
    });
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = "";
    });
  });

  /* ===================== SNOWFLAKES ===================== */
  const snowContainer = document.createElement("div");
  snowContainer.classList.add("snow-container");
  document.body.appendChild(snowContainer);

  const snowflakeChars = ["❄", "❅", "❆"];
  let snowflakes = [];

  function createSnowflake() {
    const snowflake = {
      el: document.createElement("div"),
      x: Math.random() * window.innerWidth,
      y: -20,
      speedY: 1 + Math.random() * 2,
      speedX: (Math.random() - 0.5) * 1,
      char: snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)],
      size: 8 + Math.random() * 20
    };
    snowflake.el.textContent = snowflake.char;
    snowflake.el.classList.add("snowflake");
    snowflake.el.style.fontSize = snowflake.size + "px";
    snowflake.el.style.left = snowflake.x + "px";
    snowflake.el.style.top = snowflake.y + "px";
    snowContainer.appendChild(snowflake.el);
    snowflakes.push(snowflake);
  }

  function animateSnowflakes() {
    for (let i = snowflakes.length - 1; i >= 0; i--) {
      let s = snowflakes[i];
      s.y += s.speedY;
      s.x += s.speedX;
      s.el.style.top = s.y + "px";
      s.el.style.left = s.x + "px";
      
      if (s.y > window.innerHeight) {
        s.el.remove();
        snowflakes.splice(i, 1);
      }
    }
    requestAnimationFrame(animateSnowflakes);
  }

  setInterval(createSnowflake, 200);
  animateSnowflakes();
