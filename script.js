document.addEventListener("DOMContentLoaded", function () {
    var grid = document.querySelector('.grid');
    
    imagesLoaded(grid, function () {
        var msnry = new Masonry(grid, {
            itemSelector: '.card',
            columnWidth: '.grid-sizer',
            percentPosition: true,
            gutter: 30 // Increased gutter size
        });
    });
});