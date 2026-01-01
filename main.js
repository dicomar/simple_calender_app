const p_Month = document.getElementById("prev_Month"),
  n_Month = document.getElementById("next_Month"),
  m_Name = document.getElementById("month_Name"),
  y_Dsp = document.getElementById("year_Display"),
  cal_Dates = document.getElementById("calender_Dates");

let cur_Date = new Date(),
  y_No = cur_Date.getFullYear(),
  m_No = cur_Date.getMonth();

var generateCalender = (y, m) => {
  cal_Dates.innerHTML = "";
  fs_Day = new Date(y, m).getDay();
  ls_Date = new Date(y, m + 1, 0).getDate();

  for (let d = 1; d <= fs_Day; d++) {
    cal_Dates.innerHTML += `<div class="month-date dummy-date">${"null"}</div>`;
  }

  for (let d = 1; d <= ls_Date; d++) {
    d === new Date().getDate()
      ? (cal_Dates.innerHTML += `<div class="month-date current-date">${d}</div>`)
      : (cal_Dates.innerHTML += `<div class="month-date">${d}</div>`);
  }

  m_Name.textContent = new Date(y, m + 1, 1)
    .toLocaleString(0, { month: "long" })
    .toUpperCase();
  y_Dsp.textContent = new Date(y, m + 1, 1).toLocaleString(0, {
    year: "numeric",
  });
};

generateCalender(y_No, m_No);

p_Month.onclick = () => {
  m_No--;
  generateCalender(y_No, m_No);
};

n_Month.onclick = () => {
  m_No++;
  generateCalender(y_No, m_No);
};
