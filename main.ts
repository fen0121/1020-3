basic.forever(function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            if ((x + y) % 2 == 0) {
                led.plot(x, y)
            } else {
                led.unplot(x, y)
            }
        }
    }
})
