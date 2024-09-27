document.addEventListener('DOMContentLoaded', function() {
    const simulation = document.getElementById('simulation');
    const ball = document.createElement('div');
    ball.style.width = '50px';
    ball.style.height = '50px';
    ball.style.backgroundColor = 'red';
    ball.style.borderRadius = '50%';
    ball.style.position = 'absolute';
    ball.style.top = '0';
    simulation.appendChild(ball);

    let position = 0;
    let velocity = 0;
    const acceleration = 9.8; // Gia tốc rơi tự do (m/s^2)
    const timeInterval = 0.02; // Khoảng thời gian giữa các lần cập nhật (s)

    function update() {
        velocity += acceleration * timeInterval;
        position += velocity * timeInterval;
        if (position + 50 > simulation.clientHeight) {
            position = simulation.clientHeight - 50;
            velocity = 0;
        }
        ball.style.top = position + 'px';
        requestAnimationFrame(update);
    }

    update();
});
