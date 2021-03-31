var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(gambarJam, 1000);

function gambarJam() {
    gambarTampilan(ctx, radius);
    gambarAngka(ctx, radius);
    gambarWaktu(ctx, radius);
}

function gambarTampilan(ctx, radius) {
    var grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'White';
    ctx.fill();
    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'White');
    grad.addColorStop(1, '#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}

function gambarAngka(ctx, radius) {
    var ang;
    var num;
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (num = 1; num < 13; num++) {
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
    }
}

function gambarWaktu(ctx, radius) {
    var now = new Date();
    var jam = now.getHours();
    var menit = now.getMinutes();
    var detik = now.getSeconds();

    jam = jam % 12;
    jam = (jam * Math.PI / 6) +
        (menit * Math.PI / (6 * 60)) +
        (detik * Math.PI / (360 * 60));
    gambarJarum(ctx, jam, radius * 0.5, radius * 0.07);

    menit = (menit * Math.PI / 30) + (detik * Math.PI / (30 * 60));
    gambarJarum(ctx, menit, radius * 0.8, radius * 0.07);

    detik = (detik * Math.PI / 30);
    gambarJarum(ctx, detik, radius * 0.9, radius * 0.02);
}

function gambarJarum(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}
//Created by dagowaksdev 2021