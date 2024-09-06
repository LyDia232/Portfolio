document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.textDecoration = 'underline';
      link.style.transform = 'scale(1.1)';
    });

    link.addEventListener('mouseout', () => {
      link.style.textDecoration = 'none';
      link.style.transform = 'scale(1)';
    });
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop - document.querySelector('header').offsetHeight,
        behavior: 'smooth'
      });
    });
  });

  // Add sticky effect to header
  window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Effet de survol pour les sections
  const sections = document.querySelectorAll('.about, .skills, .projects, .experience, .contact');
  sections.forEach(section => {
    section.addEventListener('mouseover', () => {
      section.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
    });

    section.addEventListener('mouseout', () => {
      section.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
  });

  // Effet de survol pour les boutons CTA
  const ctas = document.querySelectorAll('.cta');
  ctas.forEach(cta => {
    cta.addEventListener('mouseover', () => {
      cta.style.transform = 'scale(1.1)';
    });

    cta.addEventListener('mouseout', () => {
      cta.style.transform = 'scale(1)';
    });
  });

  // Hover effect on social media icons
  const socialIcons = document.querySelectorAll('.socials li a img');
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
      icon.style.transform = 'scale(1.2)';
    });

    icon.addEventListener('mouseout', () => {
      icon.style.transform = 'scale(1)';
    });
  });
});
