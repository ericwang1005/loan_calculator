//全域變數
const amountEl = document.querySelector("#amount");
const yearsEl = document.querySelector("#years");
const rateEl = document.querySelector("#rate");
const feeEl = document.querySelector("#fee");
const payment1El = document.querySelector("#payment1");
const payment2El = document.querySelector("#payment2");
const tableEl = document.querySelector("tbody");

const calculateEl = document.querySelector("#calculate");
calculateEl.addEventListener("click", calculate);
const resetEl = document.querySelector("#reset");
resetEl.addEventListener("click", reset);
console.log(tableEl, amountEl, yearsEl, rateEl, feeEl, payment1El, payment2El);

//宣告函式
function calculate() {
  let amount = amountEl.value * 10000;
  let years = yearsEl.value;
  let rate = rateEl.value;
  let fee = feeEl.checked ? 5000 : 0;
  let rule = payment1El.checked ? 0 : 1;
  let loan_result;
  if (rule == 0) {
    loan_result = rule1(amount, years, rate);
  } else {
    alert("功能製作中...");
    return;
  }
  //總金額
  let totalAmount = amount + totalInterest + fee;
  document.querySelector(".totalAmount").innerText = totalAmount +=
    fee == 0 ? "" : "(含手續費)";
  document.querySelector(".totalInterest").innerText = totalInterest;
  const resultEl = document.querySelector("#result");
  resultEl.style.display = "none";
  setTimeout(function () {
    resultEl.style.display = "block";
  }, 500);
  //console.log(amount, years, rate, fee, rule, totalInterest, totalAmount);
  console.log(loan_result[0]);
  drawTable(loan_result[0]);
}

function reset() {
  location.reload();
  console.log("Done");
}
function drawTable(loan_result) {
  let tableStr = "";
  for (let i = 0; i < loan_result.length; i++) {
    tableStr += "<tr>";
    for (let j = 0; j < loan_result[i].length; j++) {
      tableStr += `<th>${loan_result[i][j]}</th>`;
    }
    tableStr += "</tr>";
    tableEl.innerHTML = tableStr;
  }
  //   let tableStr = "<ul>";
  //   for (let i = 0; i < loan_result.length; i++) {
  //     console.log(loan_result[i].join(","));
  //     tableStr += `<li>${loan_result[i].join(",")}</li>`;
  //   }
  //   tableStr += "</ul>";
}
function rule1(total_amount, years, rate) {
  let amount = total_amount;
  let period = years * 12;
  let month_rate = rate / 100 / 12;
  let month_pay = parseInt(amount / period);

  let datas = [];
  totalInterest = 0;

  for (let i = 0; i < period; i++) {
    interest = Math.round(amount * month_rate);
    amount -= month_pay;
    /*最後一期 ?*/
    if (i == period - 1) {
      datas.push([
        i + 1,
        month_pay + amount,
        interest,
        month_pay + amount + interest,
        0,
      ]);
    } else {
      datas.push([i + 1, month_pay, interest, month_pay + interest, amount]);
    }
    totalInterest += interest;
  }
  //console.log(datas);
  return [datas, totalInterest];
}
