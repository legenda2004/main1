// Обработка формы входа в ЛК
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('check-login-button');
    const loginMessage = document.getElementById('check-login-button-message');
    const authTypeRadios = document.querySelectorAll('input[name="auth_type"]');
    const loginInput = document.querySelector('input[name="login"]');

    loginButton.addEventListener('click', function(e) {
        e.preventDefault();

        const authType = document.querySelector('input[name="auth_type"]:checked').value;
        const loginValue = loginInput.value.trim();

        if (!loginValue) {
            alert('Пожалуйста, введите телефон или email');
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
});