// todo: Напиши скрипт который:

//-  при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output.

//- если инпут пустой, в спане должна отображаться строка "Anonymous".

/* <input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */

const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

const sendNameToOutput = () => {
  if (nameInputRef.value.length === 0) {
    nameOutputRef.textContent = "Anonymous";
  } else {
    nameOutputRef.textContent = nameInputRef.value;
  }
};

nameInputRef.addEventListener("input", sendNameToOutput);
