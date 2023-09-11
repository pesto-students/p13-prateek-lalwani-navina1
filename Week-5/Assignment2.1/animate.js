
document.addEventListener('DOMContentLoaded', function () {
    const heart = document.getElementById("heart");
    console.log(heart);
    let currentX = 0;
    let currentY = 0;
    let timerId = null;
    document.addEventListener('click', function (event) {
        const x = event.clientX;
        const y = event.clientY;
        startAnimation(x, y); // Call startAnimation with the clicked coordinates
    });
    
    function startAnimation(targetX, targetY) {
        if (timerId !== null) {
            clearInterval(timerId);
            timerId = null;
        }
        timerId = setInterval(function () {
            moveImage(targetX, targetY); // Use targetX and targetY
        }, 10);
    }
    
    function moveImage(targetX, targetY) {
        const deltaX = targetX - currentX;
        const deltaY = targetY - currentY;
    
        const angle = Math.atan2(deltaY, deltaX);
        const distance = 1;
    
        const newX = currentX + distance * Math.cos(angle);
        const newY = currentY + distance * Math.sin(angle);
    
        heart.style.left = newX + 'px';
        heart.style.top = newY + 'px';
    
        // You need to specify the coordinates to stop the animation
        if (newX === targetX && newY === targetY) {
            // Stop the timer and set timerId to null
            clearInterval(timerId);
            timerId = null;
        }
    
        currentX = newX;
        currentY = newY;
    }
});


