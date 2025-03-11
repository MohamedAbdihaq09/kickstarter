const themeDropdown = document.querySelector('.js-theme-dropdown')

const getPreferredTheme = () => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
        return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const setTheme = (theme, btn) => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);

    if (btn) {
        themeDropdown.innerHTML = btn.innerHTML;
    } else {
        themeDropdown.innerHTML = theme.charAt(0).toUpperCase() + theme.slice(1);
    }
}

setTheme(getPreferredTheme());

document.querySelectorAll('.js-theme-btn').forEach(btn => {
    const theme = btn.dataset.theme;
    btn.addEventListener('click', () => setTheme(theme, btn));
});