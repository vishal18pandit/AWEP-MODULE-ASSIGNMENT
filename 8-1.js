//Global Functions

setInterval(function () {
    console.log("Time Interval");
}, 1000);

//OUTPUT: 5
//9 Time Interval


setInterval(() => {

    console.log("Time Interval");
}, 1000);


let arrw = function () {

    console.log("Time Interval");
};
setInterval(arrw, 1000);



setTimeout(() => {

    console.log("Time Interval");
}, 1000);
//OUTPUT: 5
 //Time Interval