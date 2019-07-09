function outer(){
var a = 'string';
var b = {};
console.log(a);
console.log(b);

  function inner(a, b) {
   a = 43;
   b = [];
  
  console.log('inner', a, b);
  }

  inner(a, b);
  console.log('outer', a, b);
}

outer();
