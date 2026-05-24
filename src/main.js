/**
 * main.js
 * Complete portfolio interactions and animations.
 * Zero external libraries. 
 */

document.addEventListener("DOMContentLoaded", () => {

  /**
   * 1. Scroll-reveal
   * Uses IntersectionObserver to reveal elements when 15% in view.
   */
  const revealElements = document.querySelectorAll('.reveal');
  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Unobserve after revealing to prevent re-animation
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach(el => revealObserver.observe(el));


  /**
   * 2. Typed text animation (hero)
   * Cycles through strings with typing and deleting effect.
   */
  const heroSubtitle = document.querySelector('.hero-subtitle');
  if (heroSubtitle) {
    const titles = [
      "AI & Machine Learning Developer",
      "Cybersecurity Enthusiast",
      "Mozilla Challenge Winner 2024",
      "CS Student · University of Embu, Kenya"
    ];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentTitle = titles[titleIndex];

      if (isDeleting) {
        // Deleting
        heroSubtitle.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          titleIndex = (titleIndex + 1) % titles.length;
          setTimeout(typeEffect, 500); // Small pause before next word
          return;
        }
        setTimeout(typeEffect, 30);
      } else {
        // Typing
        heroSubtitle.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentTitle.length) {
          isDeleting = true;
          setTimeout(typeEffect, 2500); // Pause after full string
          return;
        }
        setTimeout(typeEffect, 60);
      }
    }
    
    // Start typing
    setTimeout(typeEffect, 1000);
  }


  /**
   * 3. Hamburger menu
   * Full-screen overlay nav on mobile.
   */
  const menuBtn = document.querySelector('.menu-btn');
  const navOverlay = document.querySelector('.nav-overlay');
  const navLinks = document.querySelectorAll('.nav-overlay a');

  function toggleMenu() {
    document.body.classList.toggle('nav-open');
    if (navOverlay) navOverlay.classList.toggle('active');
  }

  function closeMenu() {
    document.body.classList.remove('nav-open');
    if (navOverlay) navOverlay.classList.remove('active');
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', toggleMenu);
  }

  if (navOverlay) {
    navOverlay.addEventListener('click', (e) => {
      // Close if clicking outside the menu container, or clicking a link
      if (e.target === navOverlay || e.target.tagName === 'A') {
        closeMenu();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
      closeMenu();
    }
  });


  /**
   * 4. Sticky nav
   * Background and border appear when scrolling past 80px.
   */
  const navbar = document.querySelector('nav');
  function handleScroll() {
    if (window.scrollY > 80) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  // Initial check
  handleScroll();


  /**
   * 5. Project filter
   * Filters projects based on data-category.
   */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active to current
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category.includes(filterValue)) {
          card.style.display = 'block';
          // Use setTimeout to allow display to apply before opacity transition
          setTimeout(() => {
            card.style.opacity = '1';
          }, 10);
        } else {
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300); // Match this with your CSS transition timing
        }
      });
    });
  });


  /**
   * 6. Newsletter form validation
   */
  const newsletterForm = document.querySelector('.newsletter-form');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      
      if (emailInput && emailRegex.test(emailInput.value.trim())) {
        newsletterForm.classList.add('hidden');
        const successMsg = document.querySelector('.newsletter-success');
        if (successMsg) successMsg.classList.remove('hidden');
      }
    });
  }


  /**
   * 7. Contact form validation
   * Validates all required fields and email format.
   */
  const contactForm = document.querySelector('#contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Inputs to check
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');

      function validateField(input, condition, errorMsg) {
        let errorEl = input.nextElementSibling;
        if (!errorEl || !errorEl.classList.contains('error-message')) {
          errorEl = document.createElement('p');
          errorEl.className = 'error-message text-red-500 text-sm font-bold mt-2';
          input.parentNode.insertBefore(errorEl, input.nextSibling);
        }

        if (!condition) {
          errorEl.textContent = errorMsg;
          errorEl.style.display = 'block';
          input.classList.add('border-red-500');
          isValid = false;
        } else {
          errorEl.style.display = 'none';
          input.classList.remove('border-red-500');
        }
      }

      validateField(nameInput, nameInput.value.trim() !== '', 'Full Name is required');
      validateField(subjectInput, subjectInput.value.trim() !== '', 'Subject is required');
      validateField(messageInput, messageInput.value.trim() !== '', 'Message is required');
      
      const isEmailValid = emailInput.value.trim() !== '' && emailRegex.test(emailInput.value.trim());
      validateField(emailInput, isEmailValid, 'Valid Email Address is required');

      if (isValid) {
        contactForm.classList.add('hidden');
        const successMsg = document.querySelector('#contact-success');
        if (successMsg) successMsg.classList.remove('hidden');
      }
    });
  }


  /**
   * 8. Scroll-to-top floating button
   */
  const scrollToTopBtn = document.querySelector('#scroll-to-top');

  if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }


  /**
   * 9. Active nav link tracking
   * Uses IntersectionObserver to track which section is currently in view (40% threshold).
   */
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav a');
  
  const navObserverOptions = {
    threshold: 0.4
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        desktopNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, navObserverOptions);

  sections.forEach(sec => navObserver.observe(sec));

});
