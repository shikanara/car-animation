$(document).ready(function(){

    //Variables
    $surface =$('.surface');
    $car =$('.car');
    $img = $('.car img').first(); // Target only the car image, not wheels
    $wheel = $('.wheel');
    $wheels = $('.wheels');
    $container = $('.night'); // Main container
    let flag = true;

    // Updated car array with your new images
    const cars = ['./car/minibus/minibus.png','./car/minibus/minibus_headlight.png']

    // Background selector event
    $('#bg-select').on('change', function(){
        const selectedBackground = $(this).val();

        // Remove all background classes
        $container.removeClass('sunrise day night twilight midnight noon afternoon drawn');

        // Add the selected background class
        $container.addClass(selectedBackground);
    });

    // Surface selector event - NEW FUNCTIONALITY
    $('#surface-select').on('change', function(){
        const selectedSurface = $(this).val();

        // Remove any existing surface class
        $surface.removeClass(function (index, className) {
            return (className.match(/(^|\s)surface-\S+/g) || []).join(' ');
        });

        // Add new surface class
        $surface.addClass('surface-' + selectedSurface);
    });


    //keypress event
    $(document).on('keypress',function(e){
        if(e.which == 32){
            $($surface).toggleClass('moveRight');
            $($car).toggleClass('suspension');

            // Toggle wheel spinning
            if($car.hasClass('suspension')){
                $wheel.addClass('spinning');
            } else {
                $wheel.removeClass('spinning');
            }
        }
    })

    $(document).on('keypress',function(e){
        if(e.which == 69){
            if(flag){
                flag = false;
                $img.attr('src', cars[0]);
                $wheels.removeClass('recover');
                $img.removeClass('car-recover');
            }else{
                flag = true;
                $img.attr('src', cars[1]);

                $wheels.addClass('recover');
                $img.addClass('car-recover');
            }
        }
    })

});

// Typewriting Effect //
const text = ['car animation', 'car animation', 'car animation']
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
    if(count === text.length){
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    setTimeout(type, 400);

}());
