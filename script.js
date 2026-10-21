document.addEventListener('DOMContentLoaded', () => {
    const luckyBtn = document.getElementById('lucky-btn');
    if (luckyBtn) {
        luckyBtn.addEventListener('click', () => {
            window.location.href = 'https://www.google.com/doodles';
        });
    }
});
