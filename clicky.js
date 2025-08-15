/**
 * ios-haptics v0.0.9
 * tijn.dev
 * @license MIT
 */
const langDiv = document.getElementById("lang");
langDiv.classList.remove("jiggle");
const languages = document.getElementById("lang");
languages.classList.remove('expanded');
languages.classList.remove('jiggled');
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
document.querySelectorAll('.endlang').forEach(async function(div) {
    div.addEventListener('click', async function() {
        if (isiphone()) {
            haptic();
        }
        const langDiv = document.getElementById("lang");
        const excpand = langDiv.classList.contains("expanded");
        const endLangButton = document.querySelector(".arrow");
        if (!excpand) {
            langDiv.classList.remove("jiggled");
            endLangButton.classList.remove("rot");
            langDiv.classList.add("jiggle");
            langDiv.classList.add("expanded");
            endLangButton.classList.add("root");
        } else {
            langDiv.classList.remove("jiggle");
            endLangButton.classList.remove("root");
            langDiv.classList.add("jiggled");
            langDiv.classList.remove("expanded");
            endLangButton.classList.add("rot");
        }
    });
});
document.querySelectorAll('.downyago').forEach(async function(div) {
    div.addEventListener('click', async function() {
        if (isiphone()) {
            haptic();
        }
        const langDiv = document.getElementById("downyago");
        const excpand = langDiv.classList.contains("root");
        const endLangButton = document.querySelector(".downyago");
        if (!excpand) {
            endLangButton.classList.remove("rot");
            endLangButton.classList.add("root");
            scrollDown(800);
        } else {
            endLangButton.classList.remove("root");
            endLangButton.classList.add("rot");
            scrollTop(800);
        }
    });
});
function scrollTop(duration) {
    const start = window.scrollY;
    const startTime = performance.now();
    function animate(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const scrollPos = start * (1 - progress);
        window.scrollTo(0, scrollPos);
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    requestAnimationFrame(animate);
}
function scrollDown(duration) {
    const start = window.scrollY;
    const end = document.body.scrollHeight;
    const startTime = performance.now();
    function animate(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const scrollPos = start + (end - start) * progress;
        window.scrollTo(0, scrollPos);
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    requestAnimationFrame(animate);
}