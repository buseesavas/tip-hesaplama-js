calculateBtn.addEventListener("click", calculate);
resetBtn.addEventListener("click", reset);

function calculate() {
  const bill = Number(billInput.value.trim());
  const tipRate = Number(selectTip.value.trim());
  const peoples = Number(numberOfPeople.value.trim());

  if (bill > 0 && tipRate > 0 && peoples > 0) {
    const tipAmount = ((bill * tipRate) / 100) / peoples;
    const total = (((bill * tipRate) / 100) + bill) / peoples;
    tipAmountText.innerHTML = tipAmount.toFixed(2);
    totalText.innerHTML = total.toFixed(2);
    console.log(tipAmount);
    console.log(total)
  }else {
    alert('Geçerli bir değer giriniz. Veya tüm alanları doldurduğunuzdan emin olun.');
  }
}

function reset() {
    tipAmountText.innerHTML = 0;
    totalText.innerHTML = 0;
    billInput.value = '';
    selectTip.value = '';
    numberOfPeople.value = '';
}