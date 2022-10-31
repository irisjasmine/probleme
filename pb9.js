window.addEventListener("load", function () {
  var button = document.querySelector(".button");
  button.addEventListener("click", function () {
    let today = new Date();
    let xmas = new Date("12/25/2022");
    const days = (today, xmas) => {
      let daysLeft = xmas.getTime() - today.getTime();
      let totalDaysLeft = Math.ceil(daysLeft / (1000 * 60 * 60 * 24));
      return totalDaysLeft;
    };
    console.log(days(today, xmas));
  });
});
