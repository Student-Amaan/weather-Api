let array = [1, 2, 3, 5, 3, 4, 6, 7];

function multiplyArr() {
  return array.map((num) => num * 2);
}

console.log(multiplyArr(array));

const arr = [1, [2, 3, [4, 5, [6, 7]]]];

function flatenArr(arr) {
  const result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatenArr(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flatenArr(arr));

// let search = document.getElementById("#search");

// search.addEventListener(
//   "input",
//   debounce(function (e) {
//     console.log("searching", e.target.value);
//   }, 500),
// );

// function searchfnc(query) {
//   console.log("api calls from", query);
// }

// const finalRes = debounce(search, 1000);

// finalRes("R");
// finalRes("Re");
// finalRes("Res");
// finalRes("Resu");
// finalRes("Result");

let product = [
  { name: "coralla", quantity: 1, price: 50000 },
  { name: "honda", quantity: 2, price: 500000 },
  { name: "sarf", quantity: 1, price: 1000000 },
  { name: "BM2", quantity: 2, price: 5500000 },
];

// product.forEach((less, grater) => less + grater > 50000 )

// console.log(product)

function totalItem(product){
    return product
    .filter(product => product.price > 50000)
    .sort((a,b) => a.price - b.price)
    .map(product => product.name)
}

const realResult = totalItem(product)
console.log(realResult)