// Показ уведомления
function showNotification(text) {
    // Удаляем старое, если есть
    const old = document.querySelector('.notification-overlay');
    if (old) old.remove();

    // Оверлей
    const overlay = document.createElement('div');
    overlay.className = 'notification-overlay';

    // Само уведомление
    const box = document.createElement('div');
    box.className = 'notification-box';

    const msg = document.createElement('p');
    msg.textContent = text;

    const btn = document.createElement('button');
    btn.textContent = 'Окей';
    btn.addEventListener('click', () => overlay.remove());

    box.append(msg, btn);
    overlay.append(box);
    document.body.append(overlay);
}