document.getElementById('pickButton').addEventListener('click', function() {
    const numberDisplay = document.getElementById('numberDisplay');
    const duration = 5000;
    const interval = 50;
    const endTime = Date.now() + duration;

    let animationInterval = setInterval(() => {
        let randomNumber = Math.floor(Math.random() * 400) + 1;

        if (randomNumber < 10) {
            randomNumber = `00${randomNumber}`;
        } else if (randomNumber >= 10 && randomNumber < 100) {
            randomNumber = `0${randomNumber}`;
        }        
        numberDisplay.textContent = randomNumber;

        if (Date.now() >= endTime) {
            clearInterval(animationInterval);
            let finalNumber = Math.floor(Math.random() * 400) + 1;

            if (finalNumber < 10) {
                finalNumber = `00${finalNumber}`;
            } else if (finalNumber >= 10 && finalNumber < 100) {
                finalNumber = `0${finalNumber}`;
            };
            numberDisplay.textContent = finalNumber;
        }
    }, interval);
});
