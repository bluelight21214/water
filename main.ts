function update () {
    intensity = Math.sqrt(input.acceleration(Dimension.X) ** 2 + input.acceleration(Dimension.Y) ** 2 + input.acceleration(Dimension.Z) ** 2) / 1024
    if (intensity > 3) {
        intensity = 3
    }
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            led.plotBrightness(i, j, Math.randomRange(0, 255 * intensity))
        }
    }
}
let intensity = 0
let x = 2
let y = 2
basic.forever(function () {
    led.unplot(x, y)
    x = Math.randomRange(0, 4)
    y = Math.randomRange(0, 4)
    led.plot(x, y)
    update()
    basic.pause(100)
})
