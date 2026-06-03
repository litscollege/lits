// Open Fullscreen Modal Function
function openModal(imageSrc) {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    
    if (modal && modalImg) {
        modal.style.display = "flex";
        modalImg.src = imageSrc;
        // Prevent body from scrolling while viewing notice
        document.body.style.overflow = "hidden";
    }
}

// Close Fullscreen Modal Function
function closeModal() {
    const modal = document.getElementById("imgModal");
    if (modal) {
        modal.style.display = "none";
        // Re-enable page scrolling
        document.body.style.overflow = "auto";
    }
}

// Close Modal when pressing 'Escape' Key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});