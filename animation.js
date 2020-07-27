let image = document.getElementById('imageanimate1');   //selecting image
const myanimation = image.animate([{        //starting animation
        transform: 'translateY(1em)'           
    },
    {                                       //transform image along Y-axis
        transform: 'translateY(-1em)'
    }
], {
    duration: 1000,                           //setting properties likes duration, iterations, direction and easing
    iterations: Infinity,
    direction: 'alternate',
    easing: 'ease'
});

let image2 = document.getElementById('imageanimate2');  //selecting second image 
const myanimation2 = image2.animate([{           //starting animation
        transform: 'translateY(-1em)'
    },                                      //transform image along Y-axis
    {
        transform: 'translateY(1em)'
    }
], {
    duration: 1000,
    iterations: Infinity,                   //setting properties likes duration, iterations, direction and easing
    direction: 'alternate',
    easing: 'ease-in-out'

});

let image3 = document.getElementById('imageanimate3');      //selecting third image
const myanimation3 = image3.animate([{          //starting animation
    
        transform: 'translateY(1em)'            //transform image along Y-axis               
    },
    {
        transform: 'translateY(-1em)'
    }
], {
    duration: 1000,
    iterations: Infinity,                   //setting properties likes duration, iterations, direction and easing
    direction: 'alternate',
    easing: 'ease-in-out'

});

let image4 = document.getElementById('imageanimate4');      //selecting fourth image
const myanimation4 = image4.animate([{          //starting animation    
        transform: 'translateY(-1em)'
    },
    {                                        //transform image along Y-axis  
        transform: 'translateY(1em)'
    }
], {
    duration: 1000,
    iterations: Infinity,           //setting properties likes duration, iterations, direction and easing
    direction: 'alternate',
    easing: 'ease'

});

let pausebutton = document.getElementById('pausebutton');       //selecting pause button
pausebutton.onclick = function () {
    myanimation.pause();                    //function to pause the animations 
    myanimation2.pause();
    myanimation3.pause();
    myanimation4.pause();
}

let playbutton = document.getElementById('playbutton');         //selecting play button
playbutton.onclick = function () {                  
    myanimation.play();
    myanimation2.play();                    //function to play the animations
    myanimation3.play();
    myanimation4.play();
}

