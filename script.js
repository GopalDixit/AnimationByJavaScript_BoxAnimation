let direction = true;

function move() {
    let childElement = document.getElementById('child');
    let positionOfElement = 0;
    setInterval(animation, 5);

    function animation() {
        positionOfElement++;
        if (positionOfElement <= 450) {
            childElement.style.top = positionOfElement + 'px';
            childElement.style.left = positionOfElement + 'px';
        }
    }
    direction = false;

    updateButtonZIndex();
}

function moveBackward() {
    let childElement = document.getElementById('child');
    let positionOfElement = 450;
    setInterval(animation, 5);

    function animation() {
        positionOfElement--;
        if (positionOfElement >= 0) {
            childElement.style.top = positionOfElement + 'px';
            childElement.style.left = positionOfElement + 'px';
        }
    }
    direction = true;

    updateButtonZIndex();
}

function updateButtonZIndex() {
    if (direction) {
        let btnElement = document.getElementById('reverseBtn');
        let btnElementForward = document.getElementById('forwardBtn');
        btnElementForward.style.zIndex = 0;
        btnElement.style.zIndex = -1;
    } else {
        let btnElement = document.getElementById('forwardBtn');
        let btnElementReverse = document.getElementById('reverseBtn');
        btnElementReverse.style.zIndex = 0;
        btnElement.style.zIndex = -1;
    }
}
