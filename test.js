function facebook(names) {
    if (!names.length) return 'no one likes this';
    return `${names[0]}${names[1] ? (names.length == 2 ? ' and ' + names[1] : ',' + names[1]) : ''}${names.length < 4 ? (names[2] ? ' and ' + names[2] : '') : (' and ' + (names.length - 2) + ' others')} ${names.length == 1 ? 'likes' : 'like'} this`
  }
  
  let names = ["Peter"];
  let names1 = ["Jacob", "Alex"];
  let names2 = ["Max", "John", "Mark"];
  let names3 = ["Alex", "Jacob", "Mark", "Max"];
  
  console.log(facebook(names));
  console.log(facebook(names1));
  console.log(facebook(names2));
  console.log(facebook(names3));

//   [6] Who likes it?         https://www.codewars.com/kata/5266876b8f4bf2da9b000362


  

