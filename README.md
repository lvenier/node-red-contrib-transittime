# node-red-contrib-transittime

[![Build Status](https://api.travis-ci.org/lvenier/node-red-contrib-transittime.svg?branch=master)](https://travis-ci.org/lvenier/node-red-contrib-transitTime)
[![npm version](http://img.shields.io/npm/v/node-red-contrib-transittime.svg?style=flat)](https://npmjs.org/package/node-red-contrib-transittime "View this project on npm")
[![Github Issues](http://img.shields.io/github/issues/lvenier/node-red-contrib-transitTime)](https://github.com/lvenier/node-red-contrib-transitTime/issues)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

Transit Time Palette for Node-Red

## Input / Output

### inputs :

msg.payload.distance: trip distance in kms.

msg.payload.config: the required vehicle and trip information : 
- speed in km/hours
- drivingTime in hours
- maxDrivingTime in hours
- breakTime in hours
- restTime in hours

Example : 

```{speed: 1.16, drivingTime: 240, maxDrivingTime: 720, breakTime:30, restTime:480}```

### output :

return msg.payload.transitTime in hours.

## Test

You can check the flow in the sample directory to have a better understanding of the input and output.
It provides 2 examples :
- timestamp with predefined set of data
- api get/post to input values

## Contributors and Thanks

Thank you

@misterbh for the first version, test and algorythm

LaV.
