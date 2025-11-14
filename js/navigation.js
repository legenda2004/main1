// Обработка навигации
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Удаляем активный класс у всех элементов
            navItems.forEach(nav => nav.classList.remove('active'));

            // Добавляем активный класс к текущему элементу
            this.classList.add('active');
        });
    });
});