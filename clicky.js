document.querySelectorAll('.project').forEach(function(div) {
    document.querySelector('.project').addEventListener('click', function() {
        const url = this.getAttribute('url');
        window.location.href = url;
    });
});