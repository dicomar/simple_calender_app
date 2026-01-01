const p_Month = document.getElementById("prev_Month"),
    n_Month = document.getElementById("next_Month"),
    m_Name = document.getElementById("month_Name"),
    y_Dsp = document.getElementById("year_Display");

let y_No = 0,
    m_No = 0,
    cur_Date = new Date(), ls_Date = new Date(cur_Date.getFullYear(), cur_Date.getMonth+1, 0),
    fs_Day = new Date(cur_Date.getFullYear(), cur_Date.getMonth, 1).getDay();



y_Dsp.textContent = cur_Date.getFullYear();
m_Name.textContent = new Date(cur_Date.getFullYear(), cur_Date.getMonth())
    .toLocaleString(0, { month: "long" })
    .toUpperCase();
