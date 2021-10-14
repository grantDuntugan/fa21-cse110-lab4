let myFunction = function () {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
};
var intervalID = setInterval(myFunction, 1000);
