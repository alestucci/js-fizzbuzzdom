let output = document.querySelector(".container");

// 1st solution
/*for (let i = 1; i <= 100; i++) {
  switch (i % 15) {
    case 0:
      output.innerHTML += `<div class="square sky-blue">fizzbuzz</div>`;
      break;
    case 3:
    case 6:
    case 9:
    case 12:
      output.innerHTML += `<div class="square grey-green">fizz</div>`;
      break;
    case 5:
    case 10:
      output.innerHTML += `<div class="square green">buzz</div>`;
      break;
    default:
      output.innerHTML += `<div class="square sea">${i}</div>`;
      break;
  }
}*/

// 2nd solution
// for (let i = 1; i <= 100; i++) {
//   let box = document.createElement("div");
//   box.classList.add("square");

//   switch (i % 15) {
//     case 0:
//       box.classList.add("sky-blue");
//       box.innerHTML = "fizzbuzz";
//       output.append(box);
//       break;
//     case 3:
//     case 6:
//     case 9:
//     case 12:
//         box.classList.add("grey-green");
//         box.innerHTML = "fizz";
//         output.append(box);
//       break;
//     case 5:
//     case 10:
//         box.classList.add("green");
//         box.innerHTML = "buzz";
//         output.append(box);
//       break;
//     default:
//         box.classList.add("sea");
//         box.innerHTML = i;
//         output.append(box);
//       break;
//   }
// }

// 3rd solution
for (let i = 1; i <= 100; i++) {
  let box = document.createElement("div");
  box.classList.add("square");

  if (i % 15 == 0) {
    box.classList.add("sky-blue");
    box.innerHTML = "fizzbuzz";
  } else if (i % 3 == 0) {
    box.classList.add("grey-green");
    box.innerHTML = "fizz";
  } else if (i % 5 == 0) {
    box.classList.add("green");
    box.innerHTML = "buzz";
  } else {
    box.classList.add("sea");
    box.innerHTML = i;
  }
  output.append(box);
}