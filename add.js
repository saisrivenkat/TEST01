function display(sum) {
  console.log(sum);
}
function add(n1, n2, callback) {
  let s = n1 + n2;
  callback(s);
}
console.log("start")
add(5, 5, display)
console.log("end")