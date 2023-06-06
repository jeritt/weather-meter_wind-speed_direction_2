function lastWindDir () {
    if (weatherbit.windDirection() != "???") {
        oldWindDir = weatherbit.windDirection()
        curentWindDir = weatherbit.windDirection()
    } else {
        curentWindDir = oldWindDir
    }
}
input.onButtonPressed(Button.B, function () {
    serial.writeLine("Wind Speed (mph): " + Math.trunc(weatherbit.windSpeed()) + " , " + "Wind Direction: " + curentWindDir)
})
let curentWindDir = ""
let oldWindDir = ""
serial.redirectToUSB()
weatherbit.startWindMonitoring()
basic.forever(function () {
	
})
