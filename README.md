# Lap Timer

#### Create a LapTimer using useEffect hook and other hooks of React to get output as shown below

<img src='https://storage.googleapis.com/acciojob-open-file-collections/lap-timer_AdobeExpress.gif' height='250px' alt='output'/>


## lets start making the project.

--> first thing to know is format of time

100 centisecond means 1 second.
so using this.

1 minute = centisecond / 6000; 
 60 second 1 minute 
 1 second means 100 centisecond.
 100 * 60= 6000 centisecond means 1 minute.
so when we want minute out of centisecond. we do (centisecond/6000);

for ex: 7543 centisecond means (7543/6000)  1 minute. 

## Minute
centisecond / 6000

## second
(centisecond % 6000) we separate the minute from it so remaining / 100 is second. because 1 sec is 100 centisecond.

(centisecond % 6000) / 1000;

## centisecond 
centisecond % 100 

