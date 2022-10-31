var currentDate = function () {
  current = new Date();
  var day = current.getDate();
  var month = current.getMonth() + 1; //incepe de la 0
  var year = current.getFullYear();
  var slash = "/";
  return day + slash + month + slash + year;
};
document.write(currentDate());
console.log(currentDate());
