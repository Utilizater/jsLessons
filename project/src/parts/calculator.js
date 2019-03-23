function calculator() {
  let persons = document.querySelectorAll(".counter-block-input")[0],
    restDays = document.querySelectorAll(".counter-block-input")[1],
    place = document.getElementById("select"),
    totalValue = document.getElementById("total"),
    pesonsSum = 0,
    daysSum = 0,
    total = 0;

  totalValue.innerHTML = total;

  persons.addEventListener('input', function (e) {
    let st = this.value;
    if (!Number.isInteger(+st[st.length - 1])) {
      this.value = st.substring(0, st.length - 1);
      return null;
    }

    pesonsSum = +this.value;
    total = (daysSum + pesonsSum) * 4000;
    if (persons.value == "" || +persons.value == 0 || restDays.value == "" || +restDays.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });

  restDays.addEventListener('input', function (e) {

    let st = this.value;
    if (!Number.isInteger(+st[st.length - 1])) {
      this.value = st.substring(0, st.length - 1);
      return null;
    }

    daysSum = +this.value;
    total = (daysSum + pesonsSum) * 4000;
    if (persons.value == "" || +persons.value == 0 || restDays.value == "" || +restDays.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });

  place.addEventListener('change', function () {
    if (restDays.value == "" || persons.value == "" || +persons.value == 0 || +restDays.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      let a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });
};

module.exports = calculator;

