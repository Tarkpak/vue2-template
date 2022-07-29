const obj = {
  funcOne: hello(),
  funcTwo: function() {
    return hello();
  },
};

function hello() {
  return function() {
    console.log(123);
  };
}

// obj.funcOne();
// obj.funcTwo()();

const array = [1, 2, 3, 4, 5];

array.forEach((element) => {
  setTimeout(() => {
    console.log(element);
  }, 1000);
});
