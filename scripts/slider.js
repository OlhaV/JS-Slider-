function Slider (sSelector) {
    var s = this;
    
    /* -------------- Properties ---------------- */ 
    
    s.slider = $(sSelector);
    
    s.image = s.slider.find('#slider_image');
    s.prev = s.slider.find('#left_arrow')
    s.next = s.slider.find('#rigth_arrow');
    s.controls = s.slider.find('.slider_button');
    
    s.ticker = null;
    s.counter = 1;
    s.total = 4;
    s.seconds = 2500;
    
    /* -------------- Methods ---------------- */ 
    
    // change the image source: 
    s.shiftImage = function () {
        s.image.attr('src', 'images/image_' + s.counter + '.jpg');
        s.controls.removeClass('active');
        s.controls.eq(s.counter - 1).addClass('active');
    }
    
    s.display = function(iShift) {
        s.counter = s.counter + iShift;
        if (s.counter > s.total) {
            s.counter = 1;
        } 
        if (s.counter < 1) {
            s.counter = s.total;
        }
        
        s.shiftImage();
    }
    
    //bullets functionality   
    s.controlClick = function(event) {
        s.stopAutoSlide();
        s.counter = s.controls.index(this) + 1;
        
        s.shiftImage();
        s.autoSlide(); 
    }
    
    //left arrow functionality 
    s.showPrevious = function() {
        s.stopAutoSlide();
        s.display(-1);  
        s.autoSlide();    
    }
    
    //right arrow functionality
    s.showNext = function() {
        s.stopAutoSlide();
        s.display(1);
        s.autoSlide();
    }
    
    //autoslider
    s.autoSlide = function() {
        s.ticker = window.setInterval(function() {
            s.display(1);    
        }, s.seconds);
    }
    
    //stop autoslider 
    s.stopAutoSlide = function() {
        window.clearInterval(s.ticker);
    }
    
    /* -------------- Events ---------------- */ 
    
    s.autoSlide();
    s.prev.click(s.showPrevious);
    s.next.click(s.showNext);
    s.controls.click(s.controlClick);
    
}