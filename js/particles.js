// Создание частиц
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Случайная позиция
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = 6 + Math.random() * 6;

        particle.style.left = left + 'vw';
        particle.style.animationDelay = delay + 's';
        particle.style.animationDuration = duration + 's';

        particlesContainer.appendChild(particle);
    }
}

// Запуск при загрузке
document.addEventListener('DOMContentLoaded', createParticles);