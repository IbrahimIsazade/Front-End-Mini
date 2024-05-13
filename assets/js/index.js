// Dropdown language \\
const langBtn = document.querySelector(".language");

langBtn.onclick = () => {
    langBtn.classList.toggle("active")
}


// Dropdown profile \\
const profile = document.querySelector(".profile");

profile.onclick = () => {
    profile.classList.toggle("active")
}


// Fullscreen mode \\
const fullscreenBtn = document.querySelector(".fullscreen");
const wrapper = document.querySelector(".wrapper");

fullscreenBtn.onclick = () => {
    if (wrapper.requestFullscreen) 
        { wrapper.requestFullscreen(); }
}