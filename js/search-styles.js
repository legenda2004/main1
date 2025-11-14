// Инъекция стилей для модуля поиска
function injectSearchStyles() {
    const customStyles = `
        .tv-search-form input, .tv-search-form select, .tv-search-form textarea {
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
        .tv-search-form input:focus, .tv-search-form select:focus, .tv-search-form textarea:focus {
            border-color: #FF4444 !important;
            box-shadow: 0 0 0 3px rgba(255, 68, 68, 0.2), inset 0 2px 10px rgba(255, 68, 68, 0.2) !important;
            transform: translateY(-2px) !important;
            background: rgba(40, 40, 40, 0.9) !important;
        }
        .tv-search-form button, .tv-search-form input[type='submit'] {
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
        .tv-search-form button:hover, .tv-search-form input[type='submit']:hover {
            transform: translateY(-3px) scale(1.02) !important;
            box-shadow: 0 8px 25px rgba(255, 68, 68, 0.6) !important;
            background: linear-gradient(135deg, #FF4444, #45B649, #4CAF50) !important;
        }
        .tv-search-form button::after, .tv-search-form input[type='submit']::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            transition: left 0.6s;
        }
        .tv-search-form button:hover::after, .tv-search-form input[type='submit']:hover::after {
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
    `;

    const style = document.createElement('style');
    style.innerHTML = customStyles;
    document.head.appendChild(style);
}

// Применяем стили после загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(injectSearchStyles, 1000);
});