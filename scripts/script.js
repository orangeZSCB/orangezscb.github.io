// Typed.js
  const options = {
    strings: [
          "是橙子🍊",
          "来自橙星🍊",
          "是一个 MtF 🏳️‍⚧️",
          "是一个 FW 中学生🤓",
          "是一个临近退役边缘的 OIer🤓",
          "是一个啥也不会的蒟蒻大佬横跳玛卡巴卡🤔",
          "是......?"
    ],
    typeSpeed: 100,
    loop: true,
    startDelay: 500,
  };

  const typed = new Typed('#typed', options);

// 随机年龄
// 使用 Fitten Code 人工智能编写
document.addEventListener('DOMContentLoaded', function () {
  let timer;  // 声明一个变量来保存定时器ID
  function updateRandomAge() {
    var randomAge = Math.floor(Math.random() * 90) + 10;
    document.getElementById("randomAge").textContent = randomAge;
    clearTimeout(timer);  // 清除之前的定时器
    timer = setTimeout(updateRandomAge, 50);  // 更新定时器
  }

  updateRandomAge();  // 首次调用
});
