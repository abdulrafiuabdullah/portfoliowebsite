document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("videoModal");
    const video = document.getElementById("demoVideo");
    const source = document.getElementById("videoSource");
    const closeBtn = document.querySelector(".close-video");

    document.querySelectorAll(".watch-demo").forEach(button => {

        button.addEventListener("click", function(e){

            e.preventDefault();

            source.src = this.dataset.video;

            video.load();

            modal.style.display = "flex";

        });

    });

    closeBtn.addEventListener("click", () => {

        modal.style.display = "none";

        video.pause();

    });

    window.addEventListener("click", (e) => {

        if(e.target === modal){

            modal.style.display = "none";

            video.pause();

        }

    });

});
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});