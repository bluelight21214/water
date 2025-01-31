ledBrightness = [[0, 32, 64, 128, 255],
    [255, 128, 64, 32, 0],
    [64, 32, 0, 32, 64],
    [0, 255, 32, 128, 64],
    [32, 64, 128, 255, 0]]
for y in range(5):
    for x in range(5):
        led.plot_brightness(x, y, ledBrightness[y][x])