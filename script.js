// Small enhancements: current year + active nav highlight
(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const links = [...document.querySelectorAll('.navlink')];
  const sections = links
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  const setActive = () => {
    const y = window.scrollY + 120; // nav offset
    let idx = -1;
    for (let i = 0; i < sections.length; i++) {
      const s = sections[i];
      if (s.offsetTop <= y) idx = i;
    }
    links.forEach((a, i) => a.classList.toggle('is-active', i === idx));
  };

  window.addEventListener('scroll', setActive, { passive: true });
  setActive();
})();
