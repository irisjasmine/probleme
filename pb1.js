var weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];
var today = new Date();
var day = today.getDay();

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var period = hour;
if ( hour >= 12 ) { 
  period = "PM";
} else period = "AM";

if (hour >= 12) {
  hour = hour - 12;
} 

if (hour === 0 && period === "AM" && minute === 0 && second === 0) {
    hour = 12;
  }
}

if (hour === 0 && period === "PM" && minute === 0 && second === 0) {
    hour = 12;
  }
}

console.log("Today is: " + weekDays[day]);
console.log(
  "Current time is: " + hour + " " + period + " : " + minute + " : " + second
);
