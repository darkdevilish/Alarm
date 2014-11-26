function $(id){
    return document.getElementById(id);
}

window.addEventListener('load', init, false);

function init() {
    $('switch_button').addEventListener('click', switch_button, false);
    clock();
}

function switch_button() {
    if ( $('switch_button').value == "OFF" ) {
        $('switch_button').value = "ON";
        $('switch_button').style.backgroundColor = "limegreen";
    } else {
        $('switch_button').value = "OFF";
        $('switch_button').style.backgroundColor = "steelblue";
    }

}

var song = new Audio();
song.src = 'song.mp3';
song.loop = true;
var ctx = $('canvas').getContext('2d');
ctx.lineWidth = 23;
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.font = '25px Trebuchet MS';
ctx.fillStyle = 'white';

function draw(radius, percentage, color) {
    var start = 1.5 * Math.PI; // Start circle from top
    var end = (2 * Math.PI) / 100; // One percent of circle
    percentage = percentage || 100; // When time is '00' we show full circle
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(175, 175, radius, start, percentage * end + start, false);
    ctx.stroke();

}

function clock() {
    requestAnimationFrame(clock);

    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    // Calculate percentage to be drawn
    var hp = 100 / 12 * (h % 12);
    var mp = 100 / 60 * m;
    var sp = 100 / 60 * s;
    // Ensure double digits
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    ctx.clearRect(0, 0, 350, 350);
    ctx.fillText(h + ':' + m + ':' + s, 175, 175);
    draw(75, hp, 'black');
    draw(100, mp, 'white');
    draw(125, sp, 'red');

    //Play Song when button is ON
    if ( $('switch_button').value == "ON" ) {
        var hours = $('hours').value;
        var minutes = $('minutes').value;
        // Ensure double digits
        if ( hours < 10 && hours.length < 2 ) {
            hours = '0' + hours;
        } else {
            hours = hours;
        }

        if ( minutes < 10 && minutes.length < 2 ) {
            minutes = '0' + minutes;
        } else {
            minutes = minutes;
        }

        if( h == hours && m == minutes ) {
            song.play();
        }

    } else {
        song.pause();
    }

}