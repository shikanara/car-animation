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
        $container.removeClass('day night twilight midnight noon afternoon drawn');

        // Add the selected background class
        $container.addClass(selectedBackground);
    });

    //keypress event
    $(document).on('keypress',function(e){
        if(e.which == 13){
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
        if(e.which == 119){
            if(flag){
                flag = false;
                $img.attr('src', cars[0]);
                $wheels.removeClass('recover');
            }else{
                flag = true;
                $img.attr('src', cars[1]);
                $wheels.addClass('recover');
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
