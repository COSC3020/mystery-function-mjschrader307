function mystery(a) {
  if (a.length == 1) return a[0];

  var foo = mystery(a.slice(1, a.length));

  if (foo > a[0]) return foo;
  else return a[0];
}

const arr = [-1, -2, -3, -4, -5];

console.log("Result of function: ", mystery(arr));
