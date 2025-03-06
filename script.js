document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const videoSource = document.getElementById('videoSource');
    const closeBtn = document.getElementsByClassName('close')[0];

    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            videoSource.src = videoSrc;
            modalVideo.load();
            modal.style.display = 'flex';
            modalVideo.play(); // Automatically play the video
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = 'none';
        modalVideo.pause();
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            modalVideo.pause();
        }
    }
});