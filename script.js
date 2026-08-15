const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function heart1(M) {
    return 15 * Math.sin(M) ** 3;
}

function heart2(M) {
    return 12 * Math.cos(M)
        - 5 * Math.cos(2 * M)
        - 2 * Math.cos(3 * M)
        - Math.cos(4 * M);
}

let i = 0;

function drawHeart() {
    if (i < 710) {

        let x = heart1(i) * 18;
        let y = heart2(i) * 18;

        let centerX = canvas.width / 2;
        let centerY = canvas.height / 2;

        ctx.beginPath();

        ctx.moveTo(centerX, centerY);

        ctx.lineTo(centerX + x, centerY - y);

        ctx.strokeStyle = "#d81b60";
        ctx.lineWidth = 1;

        ctx.stroke();

        i++;

        requestAnimationFrame(drawHeart);
    }
}

drawHeart();

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    i = 0;

    drawHeart();
});