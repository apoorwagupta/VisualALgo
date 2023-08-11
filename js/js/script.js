// ------------------create letters array-----------------------
// -------------------------------------------------------------
let letters = [];
for (let i = 65; i <= 90; i++) {
    letters.push(String.fromCharCode(i));
}
for (let i = 0; i < 10; i++) {
    letters.push(i);
}

//-------------coding Header Animation-------------------
// ------------------------------------------------------
let coding = document.querySelectorAll('.head-text span');

function codingAnimation(letterIdx) {
    // generate random character-------------------------
    let idx = Math.floor(Math.random() * 10) + 1;

    // set animation interval-----------------------------
    let id = setInterval(function() {
        coding[letterIdx].classList.remove('visualalgo');
        coding[letterIdx].innerText = letters[idx];
        idx = (idx + 1) % letters.length;
    }, 50);

    // --------clear intervals of respective element--------
    if (letterIdx == 0) {
        clearAnimation(id, "V", 1500, 0);
    }
    if (letterIdx == 1) {
        clearAnimation(id, "I", 2500, 1);
    }
    if (letterIdx == 2) {
        clearAnimation(id, "S", 3500, 2);
    }
    if (letterIdx == 3) {
        clearAnimation(id, "U", 4500, 3);
    }
    if (letterIdx == 4) {
        clearAnimation(id, "A", 5500, 4);
    }
    if (letterIdx == 5) {
        clearAnimation(id, "L", 6500, 5);
    }
    if (letterIdx == 6) {
        clearAnimation(id, "A", 7500, 6);
    }
    if (letterIdx == 7) {
        clearAnimation(id, "L", 8500, 7);
    }
    if (letterIdx == 8) {
        clearAnimation(id, "G", 9500, 8);
    }
    if (letterIdx == 9) {
        clearAnimation(id, "O", 10500, 9);
    }
}

// -------------------Stop-Animation-------------------
// ----------------------------------------------------
function clearAnimation(id, character, time, letterIdx) {
    setTimeout(function() {
        clearInterval(id);
        coding[letterIdx].innerText = character;
        coding[letterIdx].classList.add('visualalgo');
    }, time);
}

// --------------------Initailly--------------------------
// --------------------------------------------------------
document.addEventListener('DOMContentLoaded', function(e) {
    for (let i = 0; i < coding.length; i++) {
        codingAnimation(i);
    }
    setInterval(function() {
        for (let i = 0; i < coding.length; i++) {
            codingAnimation(i);
        }
    }, 12000);
})


//--------------------construct array-------------------------
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100));
}

let selectedAlgo;

let cardBtns = document.querySelectorAll('.algo-card-content button');

for (let i = 0; i < cardBtns.length; i++) {
    console.log(cardBtns[i].getAttribute('data-type'));
    let goTourl = cardBtns[i].getAttribute('data-type');
    cardBtns[i].addEventListener('click', function() {

        selectedAlgo = cardBtns[i].getAttribute('data-type');
        localStorage.setItem('selectedAlgo', selectedAlgo);

        if (i < 5)
            window.location.assign(`Sort.html`);
        else {
            window.location.assign(`grid.html`);
        }
    })
}

// // animate on scroll library
AOS.init();