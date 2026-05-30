document.addEventListener('DOMContentLoaded', () => {
    const btnBroken = document.getElementById('triggerBroken');
    const btnFixed = document.getElementById('triggerFixed');
    const wrapperBox = document.getElementById('bugBoxWrapper');

    if(btnBroken && btnFixed && wrapperBox) {
        btnBroken.addEventListener('click', () => {
            btnFixed.classList.remove('active');
            btnBroken.classList.add('active');
            wrapperBox.className = 'buggy-layout-container legacy-broken';
        });

        btnFixed.addEventListener('click', () => {
            btnBroken.classList.remove('active');
            btnFixed.classList.add('active');
            wrapperBox.className = 'buggy-layout-container modern-fixed';
        });
    }
});