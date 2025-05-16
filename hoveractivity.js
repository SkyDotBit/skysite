const projects = document.querySelectorAll('.project');
for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    const glow = document.createElement('div');
    glow.classList.add('hoverglow');
    project.appendChild(glow);
    project.addEventListener('mousemove', (e) => {
        const rect = project.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        glow.style.left = `${x - glow.offsetWidth / 2}px`; 
        glow.style.top = `${y - glow.offsetHeight / 2}px`; 
        glow.style.opacity = 1;
        console.log("Hi I am at " + `(${x}, ${y})`);
    });
    project.addEventListener('mouseleave', () => {
        glow.style.opacity = 0;
        console.log("I go bye bye");
    });
}