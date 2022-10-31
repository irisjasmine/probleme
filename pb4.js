var firstSide = 5;
var secondSide = 6;
var thirdSide = 7;
var semiperimeter = (firstSide + secondSide + thirdSide) / 2;
var area = Math.sqrt(
  semiperimeter *
    ((semiperimeter - firstSide) *
      (semiperimeter - secondSide) *
      (semiperimeter - thirdSide))
);
console.log(area);
