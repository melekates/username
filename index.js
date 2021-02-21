const form = document.getElementById("form");
const inputAd = document.getElementById("inputAd");
const inputSoyad = document.getElementById("inputSoyad");
const inputUsername = document.getElementById("inputUsername");
const inputPassword = document.getElementById("inputPassword");
const inputPasswordRepeat = document.getElementById(
  "inputPasswordRepeat"
);
const divResult = document.getElementById("divResult");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmitForm();
});

function handleSubmitForm() {
  const ad = inputAd.value.trim();
  const soyad = inputSoyad.value.trim();

  inputUsername.value =
    ad.toLocaleLowerCase() + soyad.toLocaleLowerCase();

  const password = inputPassword.value;
  const passwordVerify = inputPasswordRepeat.value;

  if (password === passwordVerify && password.length >= 8) {
    divResult.textContent = `Hoşgeldin @${inputUsername.value}`;
    divResult.classList.remove("error");
    divResult.classList.add("success");
  } else {
    divResult.textContent = "Parolanız 8 karakterden ya da eşleşmiyor";
    divResult.classList.remove("success");
    divResult.classList.add("error");
  }
}