// If the wind vane is between the 8 reading directions, use the last known direction.
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
