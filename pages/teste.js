
/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        textarea.addEventListener('input', () => {
            localStorage.setItem(textarea.parentElement.id, textarea.value);
        });
        textarea.value = localStorage.getItem(textarea.parentElement.id) || '';
    });
});
