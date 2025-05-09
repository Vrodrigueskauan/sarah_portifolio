const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;

      if (entry.isIntersecting) {
        el.classList.remove('fade-out');
        el.classList.add('fade-up');
      } else {
        el.classList.remove('fade-up');
        el.classList.add('fade-out');
      }
    });
  }, {
    threshold: 0.1 // Ativa quando 10% entra ou sai
  });

  document.querySelectorAll('.observe').forEach(el => {
    observer.observe(el);
  });