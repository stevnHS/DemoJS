const content = document.getElementById("content");
content.innerHTML = "";
const h2 = document.createElement("h2");
h2.innerText = "表單製作";

// Start

// ( 1. 不可空白 2. 至少兩個字以上 3. 必須全”中文字"
const namePattern = /^[\u4e00-\u9fa5]{2,}$/gu;
// ( 1. 不可空白 2. 至少 6 個字且必須包含英數字、特殊字元 [!@#$%^&*]
const passwordPattern = /(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/gu;
// 格式:西元年/月/日 (yyyy/mm/dd)
const datePattern = /\d{4}\/\d{2}\/\d{2}/;

const Access = document.createElement("p");
const Error = document.createElement("p");

function checkName() {
  let name = document.getElementById("name").value;
  const tipGood = document.getElementById("tip-good");
  const tipError = document.getElementById("tip-error");
  if (namePattern.test(name)) {
    // 顯示成功
    tipError.classList.remove("tip-show");
    tipGood.classList.add("tip-show");
  } else {
    tipGood.classList.remove("tip-show");
    tipError.classList.add("tip-show");
  }
}
function checkPassword() {
  let password = document.getElementById("pwd").value;
  if (!passwordPattern.test(password)) {
    return;
  }
}
function checkDate() {
  let date = document.getElementById("date").value;
  console.log(datePattern.test(date));
  if (!datePattern.test(date)) {
    return;
  }
}

// End
content.appendChild(h2);
content.appendChild(table);
