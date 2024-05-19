// Dropdown language \\
const langBtn = document.querySelector(".language");

langBtn.onclick = () => {
    langBtn.classList.toggle("active");
}


// Dropdown profile \\
const profile = document.querySelector(".profile");

profile.onclick = () => {
    profile.classList.toggle("active");
}

// Sidebar opener \\
const opener = document.querySelector(".sidebar-opener");
const sidebar = document.querySelector(".sidebar");

opener.onclick = () => {
    sidebar.classList.toggle("hide");
}



// Fullscreen mode \\
let fullscreenEnabled = false;
const fullscreenBtn = document.querySelector(".fullscreen");
const wrapper = document.querySelector(".wrapper");

fullscreenBtn.onclick = () => {
    if (!fullscreenEnabled) { 
        wrapper.requestFullscreen(); 
        fullscreenEnabled = true;
    }
    else { 
        document.exitFullscreen(); 
        fullscreenEnabled = false;
    }
}

// Dropdown menus \\
function showDropdown(e, itemCount) {
    e.parentElement.classList.toggle(`open-${itemCount}`);
}

// APEX CHARTS \\

