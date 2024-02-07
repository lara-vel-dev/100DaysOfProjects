const sliders = document.querySelectorAll("input[type='range']");
sliders.forEach((slider) => {
  slider.addEventListener("input", calculateTip);
});

const billInput = document.getElementById("bill");
billInput.addEventListener("change", calculateTip);

function calculateTip() {
    let bill = parseFloat(billInput.value);
    let tipPercent = document.getElementById("tip").value;
    let numOfPeople = document.getElementById("no-of-people").value;

    billInput.value = bill.toFixed(2);

    let totalTip = parseFloat((bill * (tipPercent/100)).toFixed(2));
    let total = parseFloat((bill + totalTip).toFixed(2));
    let tipPerPerson = (totalTip / numOfPeople).toFixed(2);
    let totalPerPerson = (total / numOfPeople).toFixed(2);

    document.getElementById("tip-amount").textContent = `\$ ${totalTip}`;
    document.getElementById("total-amount").textContent = `\$ ${total}`;
    document.getElementById("tip-percent").textContent = `${tipPercent}%`;
    document.getElementById("split-num").textContent = `${numOfPeople}`;
    document.getElementById("tip-per-person").textContent = `\$ ${tipPerPerson}`;
    document.getElementById("total-per-person").textContent = `\$ ${totalPerPerson}`;

}

