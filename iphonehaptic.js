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
function isiphone() {
    return /iPhone/i.test(navigator.userAgent);
};
function iphonehaptic(haptic) {
    if (haptic === "haptic" || isiphone()) {
        haptic()
    } else if (haptic === "confirm" || isiphone()) {
        haptic.confirm()
    } else if (haptic === "error" || isiphone()) {
        haptic.error()
    }
    return true;
}
function iphonehaptichref(haptic, href) {
    if (haptic === "haptic" || isiphone()) {
        haptic()
        window.location.href = href;
    } else if (haptic === "confirm" || isiphone()) {
        haptic.confirm()
        window.location.href = href;
    } else if (haptic === "error" || isiphone()) {
        haptic.error()
        window.location.href = href;
    }
}