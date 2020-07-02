/*
create function throttle
that takes in a function
that returns a function
that when that function CAN only run every 800ms
*/

//avoid setTimeout b/c of eventLoop timing issue

function throttle(func) {
  let time = Date.now();
  let result;
  return function(...args) {
    if (Date.now() - time >= 800) {
      result = func(...args);
      time = Date.now();
      return result;
    } else {
      return result;
    }
  };
}

throttle(() => {
  console.log("hi");
});
