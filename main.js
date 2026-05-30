document.addEventListener('DOMContentLoaded', () => {
    
    // Front-End Category Grid Filter Mechanism
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active tags across elements
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const activeFilter = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (activeFilter === 'all' || cardCategory === activeFilter) {
                    card.classList.remove('hidden');
                    // Gentle visual entry sequence
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transition = 'opacity 0.3s ease';
                    }, 10);
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // Clean Layout Scroll Spy Indicator framework
    const navLinks = document.querySelectorAll('nav a:not(.nav-cta)');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.removeAttribute('style');
            if (link.getAttribute('href').slice(1) === currentSectionId) {
                link.style.color = '#f59e0b';
            }
        });
    });
});