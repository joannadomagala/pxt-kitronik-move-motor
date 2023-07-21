function square () {
	
}
function cirkle1 () {
    Kitronik_Move_Motor.turnRadius(Kitronik_Move_Motor.TurnRadii.Standard)
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Right, 74)
    basic.pause(4000)
    Kitronik_Move_Motor.stop()
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 74)
        basic.pause(500)
        Kitronik_Move_Motor.stop()
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 45)
    }
    Kitronik_Move_Motor.stop()
})
function cirkle2 () {
    Kitronik_Move_Motor.turnRadius(Kitronik_Move_Motor.TurnRadii.Tight)
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Left, 74)
    basic.pause(3000)
    Kitronik_Move_Motor.stop()
}
function triangle () {
    for (let index = 0; index < 3; index++) {
    	
    }
    Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 60)
}
