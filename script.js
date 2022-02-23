let output = document.querySelector(".container");

for (let i = 1; i <= 100; i++) {
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
}
