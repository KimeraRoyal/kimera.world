(function loadCarousels() {
    var carousel = document.querySelector('.carousel');
    var flkty = new Flickity(carousel, {
        draggable: false,
        wrapAround: true,
        autoPlay: 4000,
        cellAlign: 'center',
        contain: true
    });
})();