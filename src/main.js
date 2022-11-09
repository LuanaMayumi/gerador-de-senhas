import { nanoid } from "nanoid";
import "./style.css";
import copy from "clipboard-copy"

const passwordBtn = document.querySelector("button");
// console.log(passwordBtn);
const displayPassword = document.querySelector("h2");
// console.log(displayPassword);

passwordBtn.addEventListener("click", () => { // console.log('clicou no botão');
  // console.log(nanoid());
  const randomPassword = nanoid();
  displayPassword.innerHTML = randomPassword;
});

displayPassword.addEventListener("click", async (event) => {
  await copy(event.target.innerHTML);
  alert('Senha copiada');
});
