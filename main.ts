let Temps = 0
input.onButtonPressed(Button.A, function () {
    while (!(input.buttonIsPressed(Button.B))) {
        basic.pause(80)
        Temps += 1
        basic.showNumber(Temps)
    }
    basic.showNumber(Temps)
})
input.onButtonPressed(Button.AB, function () {
    Temps = 0
    basic.showNumber(Temps)
})
