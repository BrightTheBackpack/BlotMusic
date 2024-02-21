# All the behind the scene stuff

## Conversion of the angle to frequency and vice versa

###Step 1:

Manually figure out an octave of frequncies to notes

###Step 2:

Graph the mathmatical relationship and desmos

###Step 3:

Realize that's not gonna work and start over

###Step 1: 

Look at the firmware for blot

###Step 2:

Find a handy function called goTo

###Step 3:

Input points 1,1 in the function(this is a 45 degree line)

###Step 4:

Run the points to the function and realize that it excactly lines up with the freuncies found earlier


The function:
y=sin(angle)
x=cos(angle)
motor1Target = (x + y) - pos[0];
motor2Target = (y - x) - pos[1];
motor2Speed = abs(motor2Target) / motor1Target;
stepDuration = 500; 
motor2StepInterval = stepDuration / motor2Speed; //microseconds
//convert interval to freq
freq = 1000000/m2step

###Step 5:

reverse the function so it takes in the freq and outputs the angle

1 Complicated math later...

tan-1(2000-freq /2000+freq)
