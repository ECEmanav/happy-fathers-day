document.addEventListener("DOMContentLoaded", function() {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var captionText = document.getElementById('caption');
    var photos = document.querySelectorAll('.photo-placeholder img');
    var closeBtn = document.querySelector('.close');

    photos.forEach(photo => {
        photo.addEventListener('click', function() {
            lightbox.style.display = "block";
            lightboxImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
