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
  (() => {
    initializeContent("廣告輪播");

    const img = document.createElement("img");
    img.setAttribute("src", "Assets/山.jpg");
    content.appendChild(img);
  })();
}

function showCalendar() {
  (() => {
    initializeContent("日曆製作");
  })();
}
function showPostal() {
  let cityIndex = 0;
  let districtIndex = 0;
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
      showCityDistricts();
    });
    // District 被選中後
    elSelectDistricts.addEventListener("input", (e) => {
      districtIndex = e.target.value;
      console.log(
        data[cityIndex].name +
          " " +
          data[cityIndex].districts[districtIndex].name
      );
    });

    const elTable = document.createElement("table");
    data.forEach((city) => {
      const elTdCName = document.createElement("td");
      elTdCName.innerText = city.name;
      elTdCName.setAttribute("rowspan", city.districts.length);

      city.districts.forEach((dist, i) => {
        const elTr = document.createElement("tr");
        const elTdName = document.createElement("td");
        const elTdZip = document.createElement("td");
        elTdName.innerText = dist.name;
        elTdZip.innerText = dist.zip;
        elTdName.style.borderBottom = "1px solid #000";
        elTdZip.style.borderBottom = "1px solid #000";
        if (i === 0) elTr.appendChild(elTdCName);
        if (i === city.districts.length - 1) {
          elTdCName.style.borderBottom = "1px solid #000";
        }
        elTr.append(elTdZip, elTdName);
        elTable.appendChild(elTr);
      });
    });

    // todo:排版
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
}
function initializeContent(title) {
  content.innerHTML = "";
  const h2 = document.createElement("h2");
  h2.innerText = title;
  content.appendChild(h2);
}
