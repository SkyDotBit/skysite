document.querySelectorAll('.project').forEach(function(div) {
    div.addEventListener('click', function() {
        const url = this.getAttribute('url');
        window.location.href = url;
    });
});
document.querySelectorAll('.smallglow').forEach(function(div) {
    div.addEventListener('click', function() {
        const url = this.getAttribute('url');
        window.location.href = url;
    });
});