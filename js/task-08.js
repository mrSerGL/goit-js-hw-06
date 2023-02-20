//todo: Напиши скрипт управления формой логина.

/* <form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>

Обработка отправки формы form.login-form должна быть по событию submit.

При отправке формы страница не должна перезагружаться.

Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.

Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.

Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset. */

const refs = {
  form: document.querySelector(".login-form"),
  inputEmail: document.querySelector('input[name="email"]'),
  inputName: document.querySelector('input[name="password"]'),
  btnSubmitLogin: document.querySelector("button"),
};

refs.form.addEventListener("submit", pressOnSubmit);

function pressOnSubmit(event) {
  event.preventDefault();

  // console.dir(refs.form.elements);
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Все поля должны быть заполнены!");
  }

  let out = {};
  out.email = `${email.value}`;
  out.password = `${password.value}`;

  console.log(out);

  event.currentTarget.reset();
}
