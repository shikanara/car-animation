$(document).ready(function(){

    //Variables
    $surface =$('.surface');
    $car =$('.car');
    $img = $('.car img').first(); // Target only the car image, not wheels
    $wheels = $('.wheel');
    let flag = true;

const cars = ['./Car 1.PNG','./Car 2.PNG']

        //keypress event
    $(document).on('keypress',function(e){
        if(e.which == 13){
            $($surface).toggleClass('moveRight');
            $($car).toggleClass('suspension');

            // Toggle wheel spinning
            if($car.hasClass('suspension')){
                $wheels.addClass('spinning');
            } else {
                $wheels.removeClass('spinning');
            }
        }
    })

    $(document).on('keypress',function(e){
        if(e.which == 119){
            if(flag){
                flag = false;
                $img.attr('src', cars[0]);
            }else{
                flag = true;
                $img.attr('src', cars[1]);
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