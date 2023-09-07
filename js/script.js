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