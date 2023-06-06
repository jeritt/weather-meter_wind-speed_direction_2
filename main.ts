function lastWindDir () {
    if (weatherbit.windDirection() != "???") {
        curentWindDir = weatherbit.windDirection()
    }
}
input.onButtonPressed(Button.B, function () {
    lastWindDir()
    serial.writeLine("Wind Speed (mph): " + Math.trunc(weatherbit.windSpeed()) + " , " + "Wind Direction: " + curentWindDir)
})
let curentWindDir = ""
serial.redirectToUSB()
weatherbit.startWindMonitoring()
basic.forever(function () {
	
})
