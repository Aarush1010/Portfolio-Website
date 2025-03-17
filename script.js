// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
//var captionText = document.getElementById("caption");

// Get all images and store them in an array
var images = document.querySelectorAll('.gallery-item');
var currentIndex = 0;

images.forEach((item, index) => {
    item.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        currentIndex = index;
    });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

// Ensure modal is hidden on page load
window.onload = function() {
    modal.style.display = "none";
}

// Get the navigation arrows
var prev = document.getElementsByClassName("prev")[0];
var next = document.getElementsByClassName("next")[0];

// When the user clicks on the next arrow
next.onclick = function() {
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].alt;
}

// When the user clicks on the prev arrow
prev.onclick = function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].alt;
}