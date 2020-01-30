# node-red-contrib-transitTime
Transit Time Palette for Node-Red

## Input / Output

### inputs :

msg.payload.distance: trip distance in km.
msg.payload.config: the required vehicle and trip information : 
- speed in km/min
- drivingTime in minutes
- maxDrivingTime in minutes
- breakTime in minutes
- restTime in minutes

Example : ```{speed: 1.16, drivingTime: 240, maxDrivingTime: 720, breakTime:30, restTime:480}```

### output :

return msg.payloed.transitTime in minutes.

## Test

You can check the flow in the sample directory to have a better understanding of the input and output.
It provides 2 examples :
- timestamp with predefined set of data
- api get/post to input values

## Contributors and Thanks

Thank you

@misterbh for the first version, test and algorythm

LaV.