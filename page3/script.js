function AutoScale() {
    // Функция для автоматической настройки масштаба в зависимости от размера окна.
    let width = window.innerWidth;
    // Получаем ширину окна.

    let height = window.innerHeight;
    // Получаем высоту окна.

    if (width > 1280) {
        ChangeScale("big");
        // Если ширина больше 1280px, вызываем функцию ChangeScale с параметром "big".
    } else if (width <= 1280 && width > 720) {
        ChangeScale("normal");
        // Если ширина от 720px до 1280px, вызываем функцию ChangeScale с параметром "normal".
    } else if (width < 720) {
        ChangeScale("small");
        // Если ширина меньше 720px, вызываем функцию ChangeScale с параметром "small".
    }

    AdjustHeight(height);
    // Вызываем функцию AdjustHeight для настройки высоты контента в зависимости от высоты окна.
}

function AdjustHeight(height) {
    // Функция для настройки минимальной высоты страницы в зависимости от высоты окна.
    if (height < 600) {
        document.body.style.minHeight = "100vh";
        // Если высота меньше 600px, устанавливаем минимальную высоту тела документа в 100% высоты окна.
    } else {
        document.body.style.minHeight = "auto";
        // Для больших экранов сбрасываем минимальную высоту на авто.
    }
}