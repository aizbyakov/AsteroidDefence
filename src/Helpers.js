// The maximum is exclusive and the minimum is inclusive
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min);
}

function checkBounds(vector, x, y, w, h) {
    return (vector.x >= x) && (vector.x <= (x + w)) && (vector.y > y) && (vector.y <= (y + h));
}