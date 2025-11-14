// Основной JavaScript файл для сайта "Жгучие Туры"

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    createParticles();
    setupNavigation();
    setupTourvisorModules();
    setupLoginForm();
    setupPageAnimations();
}

// Создание анимированных частиц
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Случайная позиция и анимация
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = 6 + Math.random() * 6;
        const size = 2 + Math.random() * 4;

        particle.style.left = left + 'vw';
        particle.style.animationDelay = delay + 's';
        particle.style.animationDuration = duration + 's';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        // Случайный цвет частицы
        const colors = ['#FF4444', '#4CAF50', '#FF9800', '#45B649'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = randomColor;

        particlesContainer.appendChild(particle);
    }
}

// Настройка навигации
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const currentPage = getCurrentPage();

    navItems.forEach(item => {
        // Устанавливаем активный элемент на основе текущей страницы
        const href = item.getAttribute('href');
        if (href && href.includes(currentPage)) {
            item.classList.add('active');
        }

        // Обработка кликов
        item.addEventListener('click', function(e) {
            if (this.classList.contains('active')) return;

            // Анимация перехода
            animatePageTransition(() => {
                navItems.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
            });
        });
    });
}

// Получение текущей страницы
function getCurrentPage() {
    const path = window.location.pathname;
    return path.split('/').pop() || 'index.html';
}

// Настройка модулей Tourvisor
function setupTourvisorModules() {
    // Автоматическая инициализация модулей Tourvisor
    if (typeof window.tvInit === 'function') {
        window.tvInit();
    }

    // Применение кастомных стилей к модулям
    setTimeout(applyTourvisorStyles, 1500);
}

// Применение стилей к модулям Tourvisor
function applyTourvisorStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
        /* Стили для модуля поиска */
        .tv-search-form input, 
        .tv-search-form select, 
        .tv-search-form textarea {
            border-radius: 15px !important;
            border: 2px solid rgba(255, 68, 68, 0.3) !important;
            font-family: 'Roboto', sans-serif !important;
            padding: 16px 20px !important;
            font-size: 16px !important;
            transition: all 0.3s ease !important;
            background: rgba(30, 30, 30, 0.9) !important;
            color: white !important;
            box-shadow: inset 0 2px 10px rgba(255, 68, 68, 0.1) !important;
        }
        
        .tv-search-form input:focus, 
        .tv-search-form select:focus, 
        .tv-search-form textarea:focus {
            border-color: #FF4444 !important;
            box-shadow: 0 0 0 3px rgba(255, 68, 68, 0.2), 
                       inset 0 2px 10px rgba(255, 68, 68, 0.2) !important;
            transform: translateY(-2px) !important;
            background: rgba(40, 40, 40, 0.9) !important;
        }
        
        .tv-search-form button, 
        .tv-search-form input[type='submit'] {
            background: linear-gradient(135deg, #FF2E2E, #FF4444, #45B649) !important;
            color: white !important;
            font-weight: bold !important;
            border: none !important;
            border-radius: 15px !important;
            padding: 18px 32px !important;
            font-size: 18px !important;
            transition: all 0.3s ease !important;
            box-shadow: 0 5px 20px rgba(255, 68, 68, 0.4) !important;
            position: relative;
            overflow: hidden;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .tv-search-form button:hover, 
        .tv-search-form input[type='submit']:hover {
            transform: translateY(-3px) scale(1.02) !important;
            box-shadow: 0 8px 25px rgba(255, 68, 68, 0.6) !important;
            background: linear-gradient(135deg, #FF4444, #45B649, #4CAF50) !important;
        }
        
        .tv-search-form button::after, 
        .tv-search-form input[type='submit']::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            transition: left 0.6s;
        }
        
        .tv-search-form button:hover::after, 
        .tv-search-form input[type='submit']:hover::after {
            left: 100%;
        }
        
        .tv-search-form .tv-module-title {
            color: #FF4444 !important;
            font-weight: bold !important;
            font-size: 28px !important;
            text-align: center !important;
            margin-bottom: 30px !important;
            background: linear-gradient(135deg, #FF2E2E, #FF4444, #45B649) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            text-shadow: 0 0 20px rgba(255, 68, 68, 0.3) !important;
        }
        
        .tv-search-form label {
            color: #FF4444 !important;
            font-weight: 600 !important;
            margin-bottom: 12px !important;
            font-size: 16px !important;
            text-shadow: 0 0 10px rgba(255, 68, 68, 0.2) !important;
        }
        
        .tv-search-form .tv-module-block {
            margin-bottom: 25px !important;
            border-left: 3px solid #FF4444 !important;
            padding-left: 15px !important;
            background: rgba(255, 68, 68, 0.05) !important;
            border-radius: 8px !important;
            padding: 15px !important;
        }
        
        /* Стили для горящих туров */
        .tv-hot-tours .tv-item {
            background: rgba(30, 30, 30, 0.8) !important;
            border-radius: 15px !important;
            border: 1px solid rgba(255, 68, 68, 0.3) !important;
            margin-bottom: 15px !important;
            transition: all 0.3s ease !important;
        }
        
        .tv-hot-tours .tv-item:hover {
            transform: translateY(-5px) !important;
            box-shadow: 0 10px 30px rgba(255, 68, 68, 0.3) !important;
            border-color: #FF4444 !important;
        }
        
        .tv-hot-tours .tv-price {
            color: #FF4444 !important;
            font-weight: bold !important;
            font-size: 20px !important;
        }
        
        .tv-hot-tours .tv-title {
            color: white !important;
            font-weight: 600 !important;
        }
    `;

    document.head.appendChild(style);
}

// Настройка формы входа
function setupLoginForm() {
    const loginButton = document.getElementById('check-login-button');
    const loginMessage = document.getElementById('check-login-button-message');
    const authTypeRadios = document.querySelectorAll('input[name="auth_type"]');
    const loginInput = document.querySelector('input[name="login"]');

    if (!loginButton) return;

    loginButton.addEventListener('click', function(e) {
        e.preventDefault();

        const authType = document.querySelector('input[name="auth_type"]:checked').value;
        const loginValue = loginInput.value.trim();

        if (!loginValue) {
            showNotification('Пожалуйста, введите телефон или email', 'error');
            return;
        }

        // Валидация в зависимости от типа
        if (authType === 'tel' && !isValidPhone(loginValue)) {
            showNotification('Пожалуйста, введите корректный номер телефона', 'error');
            return;
        }

        if (authType === 'email' && !isValidEmail(loginValue)) {
            showNotification('Пожалуйста, введите корректный email', 'error');
            return;
        }

        // Показываем сообщение о проверке
        loginButton.style.display = 'none';
        loginMessage.style.display = 'block';

        // Имитация проверки данных
        setTimeout(function() {
            // После успешной проверки переходим в ЛК
            window.location.href = 'https://www.mytour.club/index/welcome';
        }, 2000);
    });

    // Обновление placeholder в зависимости от выбранного типа авторизации
    authTypeRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'tel') {
                loginInput.placeholder = 'Введите номер телефона';
                loginInput.type = 'tel';
            } else {
                loginInput.placeholder = 'Введите email';
                loginInput.type = 'email';
            }
        });
    });

    // Инициализация placeholder
    if (authTypeRadios.length > 0) {
        const event = new Event('change');
        document.querySelector('input[name="auth_type"]:checked').dispatchEvent(event);
    }
}

// Валидация email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Валидация телефона
function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
}

// Показать уведомление
function showNotification(message, type = 'info') {
    // Создаем элемент уведомления
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">${message}</div>
        <button class="notification-close">&times;</button>
    `;

    // Стили для уведомления
    const style = document.createElement('style');
    style.innerHTML = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(20, 20, 20, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 68, 68, 0.3);
            border-radius: 10px;
            padding: 15px 20px;
            color: white;
            display: flex;
            align-items: center;
            gap: 15px;
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification-error {
            border-color: #FF4444;
        }
        
        .notification-success {
            border-color: #4CAF50;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
            padding: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    `;

    if (!document.querySelector('.notification-styles')) {
        style.className = 'notification-styles';
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Показываем уведомление
    setTimeout(() => notification.classList.add('show'), 100);

    // Закрытие по клику
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    });

    // Автоматическое закрытие
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Анимации перехода между страницами
function animatePageTransition(callback) {
    const contentWrapper = document.querySelector('.content-wrapper');
    if (contentWrapper) {
        contentWrapper.style.opacity = '0';
        contentWrapper.style.transform = 'translateY(20px)';

        setTimeout(() => {
            if (callback) callback();

            setTimeout(() => {
                contentWrapper.style.opacity = '1';
                contentWrapper.style.transform = 'translateY(0)';
            }, 50);
        }, 300);
    } else {
        if (callback) callback();
    }
}

// Настройка анимаций страницы
function setupPageAnimations() {
    const contentWrapper = document.querySelector('.content-wrapper');
    if (contentWrapper) {
        contentWrapper.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    }

    // Анимация появления элементов при загрузке
    const animatedElements = document.querySelectorAll('.header-section, .search-section, .module-container');
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100 + index * 100);
    });
}

// Обработка внешнего контента в iframe
function setupExternalContent() {
    const iframes = document.querySelectorAll('.external-content');
    iframes.forEach(iframe => {
        iframe.addEventListener('load', function() {
            // Добавляем индикатор загрузки
            const loader = document.createElement('div');
            loader.className = 'iframe-loader';
            loader.innerHTML = 'Загрузка...';
            loader.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
                font-size: 16px;
            `;

            iframe.parentNode.style.position = 'relative';
            iframe.parentNode.appendChild(loader);

            // Убираем индикатор после загрузки
            setTimeout(() => {
                if (loader.parentNode) {
                    loader.remove();
                }
            }, 1000);
        });
    });
}

// Обработчик изменения размера окна
window.addEventListener('resize', function() {
    // Пересоздаем частицы при изменении размера окна
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        particlesContainer.innerHTML = '';
        createParticles();
    }
});

// Инициализация при полной загрузке страницы
window.addEventListener('load', function() {
    setupExternalContent();

    // Добавляем класс загруженной страницы для CSS анимаций
    document.body.classList.add('page-loaded');
});

// Функция для обновления контента модулей Tourvisor
function refreshTourvisorModules() {
    if (typeof window.tvRefresh === 'function') {
        window.tvRefresh();
    }
}

// Экспорт функций для глобального использования
window.BurningTours = {
    refreshModules: refreshTourvisorModules,
    showNotification: showNotification,
    createParticles: createParticles
};