/**
 * ios-haptics v0.0.9
 * tijn.dev
 * @license MIT
 */
function haptic() {
    try {
        const labelEl = document.createElement('label');
        labelEl.ariaHidden = 'true';
        labelEl.style.display = 'none';
        const inputEl = document.createElement('input');
        inputEl.type = 'checkbox';
        inputEl.setAttribute('switch', '');
        labelEl.appendChild(inputEl);
        document.head.appendChild(labelEl);
        labelEl.click();
        document.head.removeChild(labelEl);
    }
    catch {
        // do nothing
    }
}
;
haptic.confirm = () => {
    haptic();
    setTimeout(() => haptic(), 120);
};
haptic.error = () => {
    haptic();
    setTimeout(() => haptic(), 120);
    setTimeout(() => haptic(), 240);
};
function ismobile() {
    return /iPhone|iPad|iPod|Mobi|Android/i.test(navigator.userAgent);
};
function isiphone() {
    return /iPhone/i.test(navigator.userAgent);
};
document.querySelectorAll('.project').forEach(function(div) {
    div.addEventListener('click', function() {
        const url = this.getAttribute('url');
        if (isiphone()) {
            haptic();
        }
        window.location.href = url;
    });
});
document.querySelectorAll('.smallglow').forEach(function(div) {
    div.addEventListener('click', function() {
        const url = this.getAttribute('url');
        if (isiphone()) {
            haptic();
        }
        window.location.href = url;
    });
    div.addEventListener('touchstart', function() {
        const url = this.getAttribute('url');
        if (isiphone()) {
            haptic();
        }
        window.location.href = url;
    });
});
document.querySelectorAll('.endlang').forEach(function(div) {
    div.addEventListener('click', function() {
        if (isiphone()) {
            haptic();
        }
        const languages = document.getElementById("lang");
        languages.classList.toggle('expanded');
        languages.classList.toggle('compressed');
    });
});
