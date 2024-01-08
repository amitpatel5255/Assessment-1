let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;
let refreshInterval;

next.onclick = function() {
    navigateSlider(1);
}

prev.onclick = function() {
    navigateSlider(-1);
}

function navigateSlider(direction) {
    itemActive = (itemActive + direction + countItem) % countItem;
    showSlider();
}

function startAutoSlide() {
    refreshInterval = setInterval(() => {
        navigateSlider(1);
    }, 5000);
}

function showSlider() {
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    clearInterval(refreshInterval);
    startAutoSlide();
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});

// Initial setup
showSlider();
startAutoSlide();
