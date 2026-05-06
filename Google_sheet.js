const scriptURL = "https://script.google.com/macros/s/AKfycbwwWqnoAFlBQoKQR1espl6T8lbHDartcs2DlIbe-yyJXrxhel9otCTqaN_yZdLHY2p-/exec";

const form = document.forms["contact-form"];
const mesaj = document.getElementById("mesaj");
const submitButton = document.getElementById("submit");
const loadingScreen = document.getElementById("loadingScreen");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(form);

  submitButton.disabled = true;
  submitButton.innerText = "Kaydediliyor...";
  mesaj.style.color = "#2563eb";
  mesaj.innerText = "Bilgileriniz kaydediliyor...";

  loadingScreen.style.display = "flex";

  fetch(scriptURL, {
    method: "POST",
    mode: "no-cors",
    body: formData
  })
  .then(function() {
    setTimeout(function() {
      window.location.href = "success.html";
    }, 1200);
  })
  .catch(function(error) {
    loadingScreen.style.display = "none";

    mesaj.style.color = "#dc2626";
    mesaj.innerText = "Kayıt sırasında hata oluştu. Lütfen tekrar deneyiniz.";

    submitButton.disabled = false;
    submitButton.innerText = "Kayıt Et";

    console.error("Error!", error.message);
  });
});
