document.addEventListener('DOMContentLoaded', () => {
  // Generate subtle floating icons on landing page if container exists
  const floatingContainer = document.getElementById('floatingContainer');
  
  if (floatingContainer) {
    const icons = ['✨', '🌸', '💖', '💌', '🌷'];
    const itemCount = 15;

    for (let i = 0; i < itemCount; i++) {
      const item = document.createElement('div');
      item.classList.add('floating-item');
      item.innerText = icons[Math.floor(Math.random() * icons.length)];
      
      // Random positioning and timings
      item.style.left = `${Math.random() * 100}%`;
      item.style.animationDuration = `${6 + Math.random() * 8}s`;
      item.style.animationDelay = `${Math.random() * 5}s`;
      item.style.fontSize = `${1 + Math.random() * 1.2}rem`;

      floatingContainer.appendChild(item);
    }
  }

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
  });
});