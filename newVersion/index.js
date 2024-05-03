const content = document.getElementById("content");
const navMath = document.getElementById("nav-math");
const navForm = document.getElementById("nav-form");
const navRating = document.getElementById("nav-rating");
const navPhotos = document.getElementById("nav-photos");
const navCalendar = document.getElementById("nav-calendar");
const navPostal = document.getElementById("nav-postal");
navMath.addEventListener("click", showMath);
navForm.addEventListener("click", showForm);
navRating.addEventListener("click", showRating);
navPhotos.addEventListener("click", showPhotos);
navCalendar.addEventListener("click", showCalendar);
navPostal.addEventListener("click", showPostal);

function showMath() {
  const table = document.createElement("table");
  for (let j = 1; j <= 9; j++) {
    const tr = document.createElement("tr");
    for (let i = 1; i <= 9; i++) {
      const td = document.createElement("td");
      if (i * j >= 10) {
        td.innerHTML = `${i}*${j}=${i * j}`;
      } else {
        td.innerHTML = `${i}*${j}=${i * j}`;
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  // Binding
  const content = document.getElementById("content");
  content.innerHTML = "";
  const h2 = document.createElement("h2");
  h2.innerText = "九九乘法表";
  content.appendChild(h2);
  content.appendChild(table);
}
function showForm() {
  const nameInput = document.createElement("input");
  const pwdInput = document.createElement("input");
  const dateInput = document.createElement("input");
  const tipError = document.createElement("span");
  const tipGood = document.createElement("span");
  const tipPwdError = document.createElement("span");
  const tipPwdGood = document.createElement("span");
  const tipDateError = document.createElement("span");
  const tipDateGood = document.createElement("span");

  // Init
  (() => {
    const content = document.getElementById("content");
    content.innerHTML = "";
    const h2 = document.createElement("h2");
    h2.innerText = "表單製作";
    content.appendChild(h2);

    const form = document.createElement("form");
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = "Form Check";
    fieldset.appendChild(legend);
    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.textContent = "姓名";

    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "name");
    nameInput.setAttribute("id", "name");
    tipError.setAttribute("class", "tip");
    tipError.setAttribute("id", "tip-error");
    tipError.innerHTML = `<img src="Assets/icon_error.svg" alt="icon" width="15" />格式錯誤`;

    tipGood.setAttribute("class", "tip");
    tipGood.setAttribute("id", "tip-good");
    tipGood.innerHTML = `<img src="Assets/icon_good.svg" alt="icon" width="15" />格式正確`;
    const nameP = document.createElement("p");
    nameP.innerHTML = '1. 不可空白 2. 至少兩個字以上 3. 必須全”中文字"';
    fieldset.appendChild(nameLabel);
    fieldset.appendChild(nameInput);
    fieldset.appendChild(tipError);
    fieldset.appendChild(tipGood);
    fieldset.appendChild(nameP);
    fieldset.appendChild(document.createElement("hr"));
    const pwdLabel = document.createElement("label");
    pwdLabel.setAttribute("for", "pwd");
    pwdLabel.textContent = "密碼";
    pwdInput.setAttribute("type", "password");
    pwdInput.setAttribute("name", "pwd");
    pwdInput.setAttribute("id", "pwd");

    tipPwdError.setAttribute("class", "tip");
    tipPwdError.setAttribute("id", "tip-pwd-error");
    tipPwdError.innerHTML = `<img src="Assets/icon_error.svg" alt="icon" width="15" />格式錯誤`;

    tipPwdGood.setAttribute("class", "tip");
    tipPwdGood.setAttribute("id", "tip-pwd-good");
    tipPwdGood.innerHTML = `<img src="Assets/icon_good.svg" alt="icon" width="15" />格式正確`;

    const pwdP = document.createElement("p");
    pwdP.textContent =
      "1. 不可空白 2. 至少 6 個字且必須包含英數字、特殊字元 [!@#$%^&*]";
    fieldset.appendChild(pwdLabel);
    fieldset.appendChild(pwdInput);
    fieldset.appendChild(tipPwdGood);
    fieldset.appendChild(tipPwdError);

    fieldset.appendChild(pwdP);
    fieldset.appendChild(document.createElement("hr"));

    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "date");
    dateLabel.textContent = "日期";

    // 創建 input 元素（日期）
    dateInput.setAttribute("type", "text");
    dateInput.setAttribute("name", "date");
    dateInput.setAttribute("id", "date");

    // 創建 p 元素（日期）
    const dateP = document.createElement("p");
    dateP.textContent = "格式:西元年/月/日 (yyyy/mm/dd)";

    tipDateError.setAttribute("class", "tip");
    tipDateError.setAttribute("id", "tip-date-error");
    tipDateError.innerHTML = `<img src="Assets/icon_error.svg" alt="icon" width="15" />格式錯誤`;
    tipDateGood.setAttribute("class", "tip");
    tipDateGood.setAttribute("id", "tip-date-good");
    tipDateGood.innerHTML = `<img src="Assets/icon_good.svg" alt="icon" width="15" />格式正確`;

    // 將 label、input、p 添加到 fieldset 中
    fieldset.appendChild(dateLabel);
    fieldset.appendChild(dateInput);
    fieldset.appendChild(tipDateError);
    fieldset.appendChild(tipDateGood);
    fieldset.appendChild(dateP);

    // 將 fieldset 添加到 form 中
    form.appendChild(fieldset);
    content.appendChild(form);
  })();

  // 判斷
  nameInput.addEventListener("change", checkName);
  pwdInput.addEventListener("change", checkPassword);
  dateInput.addEventListener("change", checkDate);

  const namePattern = /^[\u4e00-\u9fa5]{2,}$/gu;
  const passwordPattern = /(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/gu;
  const datePattern = /\d{4}\/\d{2}\/\d{2}/;

  function checkName() {
    let name = nameInput.value;
    if (namePattern.test(name)) {
      // 顯示格式正確
      tipError.classList.remove("tip-show");
      tipGood.classList.add("tip-show");
    } else {
      tipGood.classList.remove("tip-show");
      tipError.classList.add("tip-show");
    }
  }
  function checkPassword() {
    let password = pwdInput.value;
    if (passwordPattern.test(password)) {
      tipPwdError.classList.remove("tip-show");
      tipPwdGood.classList.add("tip-show");
    } else {
      tipPwdGood.classList.remove("tip-show");
      tipPwdError.classList.add("tip-show");
    }
  }
  function checkDate() {
    let date = new Date(dateInput.value);
    let dateTransform = `${date.getFullYear()}/${
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1
    }/${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;

    console.log(dateTransform);
    if (dateTransform === dateInput.value) {
      tipDateError.classList.remove("tip-show");
      tipDateGood.classList.add("tip-show");
    } else {
      tipDateGood.classList.remove("tip-show");
      tipDateError.classList.add("tip-show");
    }
  }
}
function showRating() {
  const result = document.createElement("p");
  const star1 = document.createElement("img");
  const star2 = document.createElement("img");
  const star3 = document.createElement("img");
  const star4 = document.createElement("img");
  const star5 = document.createElement("img");
  const stars = [star1, star2, star3, star4, star5];
  // init
  (() => {
    const content = document.getElementById("content");
    content.innerHTML = "";
    const h2 = document.createElement("h2");
    h2.innerText = "評點製作";
    content.appendChild(h2);

    // 作答區
    const container = document.createElement("div");
    content.appendChild(container);

    for (let star of stars) {
      container.appendChild(star);
      star.setAttribute("src", "Assets/img_star.gif");
      star.addEventListener("mouseout", mouseOutHandler);
      star.addEventListener("mousemove", mouseMoveHandler);
      star.addEventListener("click", clickHandler);
      star.addEventListener("dblclick", dblClickHandler);
    }

    const p = document.createElement("p");
    content.appendChild(p);
    p.innerText = "單擊星星可評分，雙擊星星可重製";

    content.appendChild(result);
  })();

  function mouseMoveHandler(e) {
    for (let item of stars) {
      item.setAttribute("src", "Assets/img_stared.gif");
      if (e.target == item) break;
    }
  }
  function mouseOutHandler(e) {
    for (let item of stars) {
      item.setAttribute("src", "Assets/img_star.gif");
      if (e.target == item) break;
    }
  }
  function clickHandler(e) {
    // 註銷所有事件
    result.innerText = `評分為...${stars.indexOf(e.target) + 1}`;
    for (let item of stars) {
      item.removeEventListener("mousemove", mouseMoveHandler);
      item.removeEventListener("mouseout", mouseOutHandler);
      item.removeEventListener("click", clickHandler);
    }
  }
  function dblClickHandler(e) {
    result.innerText = "";
    for (let item of stars) {
      item.setAttribute("src", "Assets/img_star.gif");
      item.addEventListener("mousemove", mouseMoveHandler);
      item.addEventListener("mouseout", mouseOutHandler);
      item.addEventListener("click", clickHandler);
    }
  }
}

function showPhotos() {
  let indexCurrentLocation = 0;
  const Locations = ["fukuoka", "saga", "nagasaki", "kumamoto", "kagoshima"];
  const imgs = [];
  (() => {
    initializeContent("廣告輪播");
    for (let i = 0; i < 5; i++) {
      const a = document.createElement("a");
      a.href = `https://www.japan.travel/tw/destinations/kyushu/${Locations[i]}/`;
      a.target = "_blank";
      a.style.display = "none";
      if (i == 0) a.style.display = "block";
      const img = document.createElement("img");
      img.setAttribute("src", `Assets/tourImages/${Locations[i]}.jpeg`);
      img.setAttribute("width", "550px");
      img.setAttribute("height", "300px");
      a.appendChild(img);
      content.appendChild(a);
      imgs.push(a);
    }
    // 跑馬燈
    let isPaused = false;
    const btnPlay = document.createElement("button");
    let intervalChangePhoto = setInterval(function () {
      displayPhoto(toNext);
    }, 3000);

    // 分頁按鈕
    {
      const divBtns = document.createElement("div");

      divBtns.style.display = "flex";
      divBtns.style.justifyContent = "space-around";
      divBtns.style.width = "100%";
      divBtns.style.margin = "10px";
      for (let i = 0; i < 5; i++) {
        const btn = document.createElement("button");
        btn.textContent = i + 1;
        btn.style.width = "50px";
        btn.addEventListener("click", () => {
          // console.log(e.target.innerText - 1);
          displayPhoto(toId);
        });
        divBtns.appendChild(btn);
      }
      content.appendChild(divBtns);
    }
    // 選頁按鈕
    {
      const divManipulateBtns = document.createElement("div");
      divManipulateBtns.style.width = "100%";
      divManipulateBtns.style.display = "flex";
      divManipulateBtns.style.justifyContent = "space-around";

      const btnPrevious = document.createElement("button");
      btnPrevious.innerText = "上一張";
      btnPrevious.addEventListener("click", () => {
        displayPhoto(toPrevious);
      });
      btnPlay.innerText = "暫停";
      btnPlay.addEventListener("click", () => {
        if (!isPaused) {
          clearInterval(intervalChangePhoto);
          isPaused = !isPaused;
          btnPlay.innerText = "播放";
        } else {
          intervalChangePhoto = setInterval(function () {
            displayPhoto();
          }, 3000);
          isPaused = !isPaused;
          btnPlay.innerText = "暫停";
        }
      });
      const btnNext = document.createElement("button");
      btnNext.innerText = "下一張";
      btnNext.addEventListener("click", () => displayPhoto(toNext));
      divManipulateBtns.append(btnPrevious, btnPlay, btnNext);
      content.appendChild(divManipulateBtns);
    }
  })();
  function displayPhoto(callback = toNext) {
    imgs[indexCurrentLocation].style.display = "none";
    callback();
    imgs[indexCurrentLocation].style.display = "block";
  }
  function toPrevious() {
    if (indexCurrentLocation > 0) indexCurrentLocation--;
    else indexCurrentLocation = 4;
  }
  function toNext() {
    if (indexCurrentLocation < 4) indexCurrentLocation++;
    else indexCurrentLocation = 0;
  }
  function toFirst() {
    indexCurrentLocation = 0;
  }
  function toId() {
    indexCurrentLocation = event.target.innerText - 1;
  }
}

function showCalendar() {
  const selectYear = document.createElement("select");
  const selectMonth = document.createElement("select");
  const selectDate = document.createElement("select");
  const pInfo = document.createElement("p");
  let timeSelected = new Date();
  const table = document.createElement("table");
  (() => {
    initializeContent("日曆製作");
    const divSelects = document.createElement("div");

    // 生成日期選項
    for (let i = 2010; i <= 2030; i++) {
      selectYear.appendChild(new Option(i, i));
    }
    for (let i = 1; i <= 12; i++) {
      selectMonth.appendChild(new Option(i, i));
    }
    for (let i = 1; i <= 31; i++) {
      //如果有效才出現在選單，只判斷 29,30,31
      if (i <= 28) {
        selectDate.appendChild(new Option(i, i));
        continue;
      }
      if (
        new Date(
          `${timeSelected.getFullYear()}-${timeSelected.getMonth() + 1}-${i}`
        ).getMonth() == timeSelected.getMonth()
      )
        selectDate.appendChild(new Option(i, i));
    }

    selectYear.value = timeSelected.getFullYear();
    selectMonth.value = timeSelected.getMonth() + 1;
    selectDate.value = timeSelected.getDate();
    divSelects.append(selectYear, "年", selectMonth, "月", selectDate, "日");
    selectYear.addEventListener("change", (e) => changeTimeSelected(e));
    selectMonth.addEventListener("change", (e) => changeTimeSelected(e));
    selectDate.addEventListener("change", (e) => changeTimeSelected(e));

    pInfo.innerText = `您選擇的日期是 ${timeSelected.getFullYear()} 年 ${
      timeSelected.getMonth() + 1
    } 月 ${timeSelected.getDate()} 日`;
    content.append(divSelects, pInfo);
    // TODO畫出當月的月曆
    displayCalendar();
  })();
  function changeTimeSelected(e) {
    timeSelected = new Date(
      parseInt(selectYear.value),
      parseInt(selectMonth.value - 1),
      parseInt(selectDate.value)
    );
    // 判斷日期是否有效，重畫日期選單
    if (e.target != selectDate) {
      selectDate.innerHTML = "";
      for (let i = 1; i <= 31; i++) {
        //如果有效才出現在選單，只判斷 29,30,31
        if (i <= 28) {
          selectDate.appendChild(new Option(i, i));
          continue;
        }
        if (
          new Date(
            `${timeSelected.getFullYear()}-${timeSelected.getMonth() + 1}-${i}`
          ).getMonth() == timeSelected.getMonth()
        ) {
          selectDate.appendChild(new Option(i, i));
        }
      }
      timeSelected = new Date(
        parseInt(selectYear.value),
        parseInt(selectMonth.value - 1),
        1
      );
    }

    pInfo.innerText = `您選擇的日期是 ${timeSelected.getFullYear()} 年 ${
      timeSelected.getMonth() + 1
    } 月 ${timeSelected.getDate()} 日`;
    displayCalendar();
  }
  function displayCalendar() {
    table.innerHTML = "";
    {
      const tr = document.createElement("tr");
      const th0 = document.createElement("th");
      const th1 = document.createElement("th");
      const th2 = document.createElement("th");
      const th3 = document.createElement("th");
      const th4 = document.createElement("th");
      const th5 = document.createElement("th");
      const th6 = document.createElement("th");
      th0.innerText = "Sun";
      th1.innerText = "Mon";
      th2.innerText = "Tue";
      th3.innerText = "Wed";
      th4.innerText = "Thu";
      th5.innerText = "Fri";
      th6.innerText = "Sat";
      tr.append(th0, th1, th2, th3, th4, th5, th6);

      table.append(tr);
      content.appendChild(table);
    }
    let currentMonth = new Date(
      timeSelected.getFullYear(),
      timeSelected.getMonth()
    );

    let tr = document.createElement("tr");
    tr.style.borderBottom = "2px solid #2a2f4f";
    const prefixTd = document.createElement("td");
    prefixTd.style.backgroundColor = "gray";
    prefixTd.colSpan = currentMonth.getDay();
    tr.appendChild(prefixTd);
    table.appendChild(tr);
    let day = 0;
    day += currentMonth.getDay();
    for (let i = 1; i <= 31; i++) {
      //如果有效才出現在選單，只判斷 29,30,31
      const normalTd = document.createElement("td");
      normalTd.style.textAlign = "center";
      if (i == timeSelected.getDate()) {
        normalTd.style.backgroundColor = "#CC6CE7";
      }
      if (i <= 28) {
        normalTd.innerText = i;
        tr.appendChild(normalTd);
        if (day == 6) {
          day = 0;
          tr = document.createElement("tr");
          tr.style.borderBottom = "2px solid #2a2f4f";
          table.appendChild(tr);
        } else day++;
        continue;
      }
      if (
        new Date(
          `${timeSelected.getFullYear()}-${timeSelected.getMonth() + 1}-${i}`
        ).getMonth() != timeSelected.getMonth()
      )
        break;
      // 增加一個td
      normalTd.innerText = i;
      tr.appendChild(normalTd);
      if (day == 6) {
        day = 0;
        tr = document.createElement("tr");
        table.appendChild(tr);
      } else day++;
    }
    const postfixTd = document.createElement("td");
    postfixTd.colSpan = 7 - day;
    postfixTd.style.backgroundColor = "gray";
    tr.appendChild(postfixTd);
  }
}
function showPostal() {
  let cityIndex = 0;
  let districtIndex = 0;
  let tdsCity = [];
  let tdsDistirict = [];
  const elSelectCities = document.createElement("select");
  const elSelectDistricts = document.createElement("select");

  (() => {
    initializeContent("郵遞區號");

    data.forEach((city, index) => {
      elSelectCities.append(new Option(city.name, index));
    });
    showCityDistricts();
    //--- City 被選中後 ---
    //1.清空目前的區域  2.顯示有哪些鄉鎮市區可選擇
    elSelectCities.addEventListener("change", (e) => {
      cityIndex = e.target.value;
      cancelFocusDistrict();
      focusCity();
      showCityDistricts();
    });
    // District 被選中後
    elSelectDistricts.addEventListener("change", (e) => {
      districtIndex = e.target.value;
      console.log(
        data[cityIndex].name +
          " " +
          data[cityIndex].districts[districtIndex].name
      );
      focusDistrict();
    });

    // 畫出表格
    const elTable = document.createElement("table");
    data.forEach((city) => {
      const elTdCName = document.createElement("td");
      elTdCName.innerText = city.name;
      elTdCName.setAttribute("rowspan", city.districts.length);
      tdsCity.push(elTdCName);
      let cityDistricts = [];
      city.districts.forEach((dist, i) => {
        let districts = [];
        const elTr = document.createElement("tr");
        const elTdName = document.createElement("td");
        districts.push(elTdName);
        const elTdZip = document.createElement("td");
        districts.push(elTdZip);
        elTdName.innerText = dist.name;
        elTdZip.innerText = dist.zip;
        elTdName.style.borderBottom = "1px solid #000";
        elTdZip.style.borderBottom = "1px solid #000";
        elTdCName.style.borderBottom = "1px solid #000";
        if (i === 0) elTr.appendChild(elTdCName);
        elTr.append(elTdZip, elTdName);
        elTable.appendChild(elTr);
        cityDistricts.push(districts);
      });
      tdsDistirict.push(cityDistricts);
    });

    content.append(elSelectCities);
    content.append(elSelectDistricts);
    content.appendChild(elTable);
  })();
  function showCityDistricts() {
    elSelectDistricts.innerHTML = "";
    data[cityIndex].districts.forEach((dist, index) => {
      elSelectDistricts.appendChild(
        new Option(`(${dist.zip})${dist.name}`, index),
        index
      );
    });
  }
  function focusCity() {
    tdsCity.forEach((city) => {
      city.classList.remove("focus");
    });
    tdsCity[cityIndex].classList.add("focus");
    //focus first district
    tdsDistirict[cityIndex][0].forEach((x) => x.classList.add("focus"));
  }
  function focusDistrict() {
    focusCity();
    cancelFocusDistrict();
    tdsDistirict[cityIndex][districtIndex].forEach((x) =>
      x.classList.add("focus")
    );
  }
  function cancelFocusDistrict() {
    tdsDistirict.forEach((pd) => {
      pd.forEach((td) => {
        td[0].classList.remove("focus");
        td[1].classList.remove("focus");
      });
    });
  }
}
function initializeContent(title) {
  content.innerHTML = "";
  const h2 = document.createElement("h2");
  h2.innerText = title;
  content.appendChild(h2);
}
