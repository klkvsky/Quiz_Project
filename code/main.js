const startB = document.getElementById('main__button');
const mainScreen = document.querySelector('.main');
const quiz = document.querySelector('.quiz');
const VideoBG = document.querySelector('#myVideo');
const prevButton = document.querySelector('.quiz__cont__controls__button--prev');
// const prevButton = document.querySelector('.quiz__cont__controls__button--next');


startB.addEventListener(('click'), startQuiz)
prevButton.addEventListener('click', prevButtonLower)

let DisableButton = 0;
let DisableButtonNext = 0;

function prevButtonLower() {
    DisableButtonNext--
}

function cardClick(ele) {
    ele.classList.add('checked')
    setTimeout(cardClickFunc, 1000);

    function cardClickFunc() {
        document.getElementById('quiz__cont__controls__button--next').click();
        DisableButton++;
        DisableButtonNext++;
        DisableStartButton();
    }
}

function DisableStartButton() {

    if (DisableButton > 0) {
        prevButton.disabled = false;
    } else {
        prevButton.disabled = true;
    }
}


function startQuiz() {
    // const quizEl = document.getElementById('quiz').style.display='flex';
    mainScreen.classList.add('hide');
    quiz.classList.add('show');
    VideoBG.classList.add('transitionedBG')

    setTimeout(slowHide, 2000);
}

function slowHide() {
    VideoBG.classList.add('hide');
    mainScreen.classList.add('hidefull');
}


function endtitles() {
    const quiz_left = document.querySelector('.swiper');
    // const quiz_left = document.querySelector('.quiz__cont__content');
    const quiz_right = document.querySelector('.quiz__cont__controls');
    const endtitles = document.querySelector('.quiz__cont__content__slide--end');

    quiz_left.classList.add('hide')
    quiz_right.classList.add('hide')

    setTimeout(function endTransition() {
        quiz_left.classList.add('hidetransition')
        quiz_right.classList.add('hidetransition')
    }, 500);
    setTimeout(function endTransition() {
        endtitles.classList.add('show')
    }, 1000);
    setTimeout(function endTransition() {
        endtitles.classList.add('showtransition')
    }, 1500);
}


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    simulateTouch: false,

    // Navigation arrows
    navigation: {
        nextEl: '.quiz__cont__controls__button--next',
        prevEl: '.quiz__cont__controls__button--prev',
    },
});

// !(function (d) {
//     // Variables to target our base class,  get carousel items, count how many carousel items there are, set the slide to 0 (which is the number that tells us the frame we're on), and set motion to true which disables interactivity.
//     var itemClassName = "quiz__cont__content__slide";
//     items = d.getElementsByClassName(itemClassName),
//         totalItems = items.length,
//         slide = 0,
//         moving = true;

//     // To initialise the carousel we'll want to update the DOM with our own classes
//     function setInitialClasses() {
//         // Target the last, initial, and next items and give them the relevant class.
//         // This assumes there are three or more items.
//         items[totalItems - 1].classList.add("prev");
//         items[0].classList.add("active");
//         items[1].classList.add("next");
//     }

//     // Set click events to navigation buttons

//     function setEventListeners() {
//         var next = d.getElementsByClassName('quiz__cont__controls__button--next')[0],
//             prev = d.getElementsByClassName('quiz__cont__controls__button--prev1')[0];

//         next.addEventListener('click', moveNext);
//         prev.addEventListener('click', movePrev);
//     }

//     // Disable interaction by setting 'moving' to true for the same duration as our transition (0.5s = 500ms)
//     function disableInteraction() {
//         moving = true;

//         setTimeout(function () {
//             moving = false
//         }, 1000);
//     }

//     function moveCarouselTo(slide) {

//         // Check if carousel is moving, if not, allow interaction
//         if (!moving) {

//             // temporarily disable interactivity
//             disableInteraction();

//             // Preemptively set variables for the current next and previous slide, as well as the potential next or previous slide.
//             var newPrevious = slide - 1,
//                 newNext = slide + 1,
//                 oldPrevious = slide - 2,
//                 oldNext = slide + 2;

//             // Test if carousel has more than three items
//             if ((totalItems - 1) > 3) {

//                 // Checks if the new potential slide is out of bounds and sets slide numbers
//                 if (newPrevious <= 0) {
//                     oldPrevious = (totalItems - 1);
//                 } else if (newNext >= (totalItems - 1)) {
//                     oldNext = 0;
//                 }

//                 // Check if current slide is at the beginning or end and sets slide numbers
//                 if (slide === 0) {
//                     newPrevious = (totalItems - 1);
//                     oldPrevious = (totalItems - 2);
//                     oldNext = (slide + 1);
//                 } else if (slide === (totalItems - 1)) {
//                     newPrevious = (slide - 1);
//                     newNext = 0;
//                     oldNext = 1;
//                 }

//                 // Now we've worked out where we are and where we're going, by adding and removing classes, we'll be triggering the carousel's transitions.

//                 // Based on the current slide, reset to default classes.
//                 // items[oldPrevious].className = itemClassName;
//                 items[oldPrevious].classList.remove('prev');
//                 items[oldPrevious].classList.remove('active');
//                 items[oldPrevious].classList.remove('next');
//                 // items[oldNext].className = itemClassName;
//                 items[oldNext].classList.remove('next');
//                 items[oldNext].classList.remove('prev');
//                 items[oldNext].classList.remove('active');


//                 items[newPrevious].classList.remove('active');
//                 items[newPrevious].classList.remove('next');

//                 // Add the new classes
//                 // items[newPrevious].className = itemClassName + " prev";
//                 items[newPrevious].classList.add('prev')
//                 // items[newPrevious].classList.add = "prev"
//                 // items[slide].className = itemClassName + " active";
//                 items[slide].classList.add('active')
//                 items[slide].classList.remove('next')
//                 items[slide].classList.remove('prev')
//                 // items[newNext].className = itemClassName + " next";
//                 items[newNext].classList.add('next');
//                 items[newNext].classList.remove('active');
//             }
//         }
//     }

//     // Next navigation handler
//     function moveNext() {

//         // Check if moving
//         if (!moving) {

//             // If it's the last slide, reset to 0, else +1
//             if (slide === (totalItems - 1)) {
//                 slide = 0;
//             } else {
//                 slide++;
//             }

//             // Move carousel to updated slide
//             console.log(slide)
//             moveCarouselTo(slide);
//         }
//     }

//     // Previous navigation handler
//     function movePrev() {

//         // Check if moving
//         if (!moving) {

//             // If it's the first slide, set as the last slide, else -1
//             if (slide === 0) {
//                 slide = (totalItems - 1);
//             } else {
//                 slide--;
//             }

//             var elms = document.querySelectorAll('.quiz__cont__content__slide');
//             for (var i = 0; i < elms.length; i++) {
//                 elms[i].classList.remove("active");
//             }

//             // if (tempStorage = 'LifelIne') {

//             //     var elms = document.querySelectorAll('.LifelIne');
//             //     for (var i = 0; i < elms.length; i++) {
//             //         // elms[i].parentNode.removeChild(elms[i]);
//             //         elms[i].classList.add("quiz__cont__content__slide");
//             //         tempStorage = '';
//             //         elms[i].classList.remove("LifeLine");
//             //         elms[i].classList.remove("forgoten");
//             //     }

//             //     totalItems = totalItems + 5;
//             // }
//             // if (tempStorage = "SmallLifeLine") {
//             //     var elms = document.querySelectorAll('.SmallLifeLine');
//             //     for (var i = 0; i < elms.length; i++) {
//             //         // elms[i].parentNode.removeChild(elms[i]);
//             //         elms[i].classList.add("quiz__cont__content__slide");
//             //         elms[i].classList.remove("forgoten");
//             //         elms[i].classList.remove("SmallLifeLine");
//             //     }

//             //     totalItems = totalItems + 1;
//             //     tempStorage = 'LifeLine';
//             // }

//             // Move carousel to updated slide
//             moveCarouselTo(slide);
//         }
//     }

//     // Initialise carousel
//     function initCarousel() {
//         setInitialClasses();
//         setEventListeners();
//         quizBackone();
//         DisableStartButton();

//         // Set moving to false now that the carousel is ready
//         moving = false;
//     }

//     // make it rain
//     initCarousel();


// }(document));

function quizBackone() {
    const Life = document.getElementById('forLifeLinePick');
    const $SmallLife = document.querySelectorAll('.forSmallLifeLinePick1')
    const $BigLife = document.querySelectorAll('.forBigLifeLinePick2');
    const Vacation = document.getElementById('forVacationLinePick');
    const Rent = document.getElementById('forRentLinePick');
    const Investor = document.getElementById('forInvestorLinePick');

    Life.addEventListener('click', LifeLine);
    // SmallLife.forEach(SmallLife => SmallLife.addEventListener('click', SmallLifeLine));


    $SmallLife.forEach($SmallLife => $SmallLife.addEventListener('click', SmallLifeLine));
    $BigLife.forEach($BigLife => $BigLife.addEventListener('click', BigLifeLine));
    Vacation.addEventListener('click', VacationLine)
    Rent.addEventListener('click', RentLine)
    Investor.addEventListener('click', InvestorLine)


    console.log('lol')
}


function LifeLine() {

    var elms = document.querySelectorAll('.quiz__cont__content :not(.forLifeLineNotPrivate, .forLifeLinePrivate, h3, .quiz__cont__content__slide__grid, .quiz__cont__content__slide__grid__card, img, p, .quiz__cont__content__slide__grid__card__check)');
    for (var i = 0; i < elms.length; i++) {
        // elms[i].parentNode.removeChild(elms[i]);
        elms[i].classList.remove("quiz__cont__content__slide");
        elms[i].classList.add("quiz__cont__content__slide--hidden");
        elms[i].classList.remove("swiper-slide");
        elms[i].classList.add("swiper-hidden-slide");
        swiper.update();
        swiper.updateSlides()
    }

    // totalItems = totalItems - 5;
}


function SmallLifeLine() {

    var elms = document.querySelectorAll('.quiz__cont__content :not(.forLifeLinePrivate, .NotToDeleteForLifeLine, h3, .quiz__cont__content__slide__grid, .quiz__cont__content__slide__grid__card, img, p, .quiz__cont__content__slide__grid__card__check)');
    for (var i = 0; i < elms.length; i++) {
        // elms[i].parentNode.removeChild(elms[i]);
        elms[i].classList.remove("quiz__cont__content__slide");
        elms[i].classList.add("quiz__cont__content__slide--hidden");
        elms[i].classList.remove("swiper-slide");
        elms[i].classList.add("swiper-hidden-slide");
        swiper.update();
        swiper.updateSlides()
    }

    // totalItems = totalItems - 1;
}

function BigLifeLine() {

    var elms = document.querySelectorAll('.quiz__cont__content :not(.forLifeLineNotPrivate, .NotToDeleteForLifeLine, h3, .quiz__cont__content__slide__grid, .quiz__cont__content__slide__grid__card, img, p, .quiz__cont__content__slide__grid__card__check)');
    for (var i = 0; i < elms.length; i++) {
        // elms[i].parentNode.removeChild(elms[i]);
        elms[i].classList.remove("quiz__cont__content__slide");
        elms[i].classList.add("quiz__cont__content__slide--hidden");
        elms[i].classList.remove("swiper-slide");
        elms[i].classList.add("swiper-hidden-slide");
        swiper.update();
        swiper.updateSlides()
        // elms[i].classList.remove("quiz__cont__content__slide");
        // elms[i].classList.add("forgoten");
    }

    // totalItems = totalItems - 1;
}


function VacationLine() {

    var elms = document.querySelectorAll('.quiz__cont__content :not(.forVacationLine, h3, .quiz__cont__content__slide__grid, .quiz__cont__content__slide__grid__card, img, p, .quiz__cont__content__slide__grid__card__check)');
    for (var i = 0; i < elms.length; i++) {
        // elms[i].parentNode.removeChild(elms[i]);
        elms[i].classList.remove("quiz__cont__content__slide");
        elms[i].classList.add("quiz__cont__content__slide--hidden");
        elms[i].classList.remove("swiper-slide");
        elms[i].classList.add("swiper-hidden-slide");
        swiper.update();
        swiper.updateSlides()
        // elms[i].classList.remove("quiz__cont__content__slide");
        // elms[i].classList.add("forgoten");
    }

    // totalItems = totalItems - 4;

}

function RentLine() {

    var elms = document.querySelectorAll('.quiz__cont__content :not(.forRentLine, h3, .quiz__cont__content__slide__grid, .quiz__cont__content__slide__grid__card, img, p, .quiz__cont__content__slide__grid__card__check)');
    for (var i = 0; i < elms.length; i++) {
        // elms[i].parentNode.removeChild(elms[i]);
        elms[i].classList.remove("quiz__cont__content__slide");
        elms[i].classList.add("quiz__cont__content__slide--hidden");
        elms[i].classList.remove("swiper-slide");
        elms[i].classList.add("swiper-hidden-slide");
        swiper.update();
        swiper.updateSlides()
        // elms[i].classList.remove("quiz__cont__content__slide");
        // elms[i].classList.add("forgoten");
    }

    // totalItems = totalItems - 7;
}

function InvestorLine() {

    var elms = document.querySelectorAll('.quiz__cont__content :not(.forInvestorLine, h3, .quiz__cont__content__slide__grid, .quiz__cont__content__slide__grid__card, img, p, .quiz__cont__content__slide__grid__card__check)');
    for (var i = 0; i < elms.length; i++) {
        // elms[i].parentNode.removeChild(elms[i]);
        elms[i].classList.remove("quiz__cont__content__slide");
        elms[i].classList.add("quiz__cont__content__slide--hidden");
        elms[i].classList.remove("swiper-slide");
        elms[i].classList.add("swiper-hidden-slide");
        swiper.update();
        swiper.updateSlides()
        // elms[i].classList.remove("quiz__cont__content__slide");
        // elms[i].classList.add("forgoten");
    }
    // totalItems = totalItems - 9;
}



document.querySelector('.quiz__cont__controls__button--reset').addEventListener('click', reset);


function reset() {

    var elms = document.querySelectorAll('.swiper-hidden-slide');
    for (var i = 0; i < elms.length; i++) {
        // elms[i].parentNode.removeChild(elms[i]);
        elms[i].classList.remove("quiz__cont__content__slide--hidden");
        elms[i].classList.add("quiz__cont__content__slide");
        elms[i].classList.remove("swiper-hidden-slide");
        elms[i].classList.add("swiper-slide");
        swiper.update();
        swiper.updateSlides()
        // elms[i].classList.remove("quiz__cont__content__slide");
        // elms[i].classList.add("forgoten");
    }

    var elms2 = document.querySelectorAll('.quiz__cont__content__slide__grid__card__check');
    for (var i = 0; i < elms.length; i++) {
        elms2[i].removeAttribute('checked');
    }

    var elms3 = document.querySelectorAll('.quiz__cont__content__slide__grid__card');
    for (var i = 0; i < elms.length; i++) {
        elms3[i].classList.remove('checked');
    }


    swiper.update();
    swiper.updateSlides()
    swiper.slideTo(0);
}

// function reset() {

//     var elms = document.querySelectorAll('.quiz__cont__content__slide');
//     for (var i = 0; i < elms.length; i++) {
//         elms[i].classList.remove("next");
//         elms[i].classList.remove("prev");
//         elms[i].classList.remove("active");
//     }

//     var elms1 = document.querySelectorAll('.forgoten');
//     for (var i = 0; i < elms1.length; i++) {
//         // elms[i].parentNode.removeChild(elms[i]);
//         elms1[i].classList.add("quiz__cont__content__slide");
//         elms1[i].classList.remove("forgoten");
//     }


//     var elms2 = document.querySelectorAll('.quiz__cont__content__slide__grid__card__check');
//     for (var i = 0; i < elms.length; i++) {
//         elms2[i].removeAttribute('checked');
//     }

//     var elms3 = document.querySelectorAll('.quiz__cont__content__slide__grid__card');
//     for (var i = 0; i < elms.length; i++) {
//         elms3[i].classList.remove('checked');
//     }

//     // items = d.getElementsByClassName(itemClassName)

//     moveCarouselTo(0)
//     slide = 0;
//     // slide.classList.add('active');
//     // slide.classList.add('next');
//     newPrevious = 0 - 1,
//         newNext = 0 + 1,
//         oldPrevious = 0 - 2,
//         oldNext = 0 + 2;
// }



quizBackone()
DisableStartButton();

var up = true;
var value = 300000;
var increment = 490;
var ceiling = 100000;

function PerformCalc() {
    if (up == true && value >= ceiling) {
        value -= increment

        if (value == ceiling) {
            up = false;
        }
    } else {
        up = false
        value += increment;

        if (value == 300000) {
            up = true;
        }
    }

    document.getElementById('counter').innerHTML = value.toLocaleString() + ' ₽';
}
setInterval(PerformCalc, 1000);




document.getElementById('phone').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = '+7' + (x[2] ? '(' + x[2] : '') + (x[3] ? ')' + x[3] : '') + (x[4] ? '-' + x[4] : '');
});