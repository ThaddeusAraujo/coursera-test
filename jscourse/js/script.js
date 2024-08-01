var a = { x:7};
var b = a;
console.log(a);
console.log(b);


b.x = 5;
console.log("after b.x update:");
console.log(a);
console.log(b);