//全域變數
const amountEl = document.querySelector('#amount');
const yearsEl = document.querySelector('#years');
const rateEl = document.querySelector('#rate');
const feeEl = document.querySelector('#fee');
const payment1El = document.querySelector('#payment1');
const payment2El = document.querySelector('#payment2');


const calculateEl = document.querySelector('#calculate');
calculateEl.addEventListener('click',calculate);
const resetEl = document.querySelector('#reset');
resetEl.addEventListener('click',reset);
console.log(amountEl,yearsEl,rateEl,feeEl,payment1El,payment2El);

//宣告函式
function calculate(){
    let amount = amountEl.value*10000;
    let years = yearsEl.value;
    let rate = rateEl.value/100;
    fee = feeEl.checked ? 5000:0;
    let rule = payment1El.checked ? 0:1;
    //利息
    let totalInterest = amount*rate*years;
    //總金額
    let totalAmount = amount+totalInterest+fee;
    document.querySelector('.totalAmount').innerText=totalAmount+=fee==0 ? '':'(含手續費)';
    document.querySelector('.totalInterest').innerText=totalInterest;
    const resultEl = document.querySelector('#result');
    resultEl.style.display = 'none';
    setTimeout(
        function(){
            resultEl.style.display = 'block';
        },
        500
    )
    console.log(amount,years,rate,fee,rule,totalInterest,totalAmount);
}
function reset(){
    amountEl.value = '';
    console.log('Done');
}