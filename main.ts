input.onButtonPressed(Button.B, function () {
    serial.writeLine("Wind Speed (mph): " + Math.trunc(weatherbit.windSpeed()) + "," + "Wind Direction" + weatherbit.windDirection())
})
serial.redirectToUSB()
weatherbit.startWindMonitoring()
basic.forever(function () {
	
})
