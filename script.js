// function showSection(sectionId) {
//     const sections = document.querySelectorAll('.section');
//     sections.forEach(sec => sec.style.display = 'none'); // Hide all sections

//     document.getElementById(sectionId).style.display = 'block'; // Show selected
//   }

  // Optional: show "About Me" by default
document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.menu-item a');
  const sections = document.querySelectorAll('.section');

  function showSection(id) {
    sections.forEach(sec => sec.style.display = 'none');
    const target = document.getElementById(id);
    if (target) target.style.display = 'block';
  }

  // Show default section
  showSection('about');

  menuLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const sectionId = link.getAttribute('href').substring(1);
      showSection(sectionId);

      document.querySelectorAll('.menu-item').forEach(item =>
        item.classList.remove('active')
      );
      link.parentElement.classList.add('active');
    });
  });
});
