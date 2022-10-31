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
var period = hour >= 12 ? "PM" : "AM";
hour = hour >= 12 ? hour - 12 : hour;

if (hour === 0 && period === " AM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    period = " AM";
  }
}

if (hour === 0 && period === " PM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    period = " PM";
  }
}

console.log("Today is: " + weekDays[day]);
console.log(
  "Current time is: " + hour + " " + period + " : " + minute + " : " + second
);
