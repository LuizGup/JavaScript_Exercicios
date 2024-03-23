function exibeNome() {
  let email = document.getElementById("email").value
  let nome = document.getElementById("nome").value
  document.getElementById("app").innerHTML = `${email} <br> ${nome}`;
}

document.getElementById("btn-nome").addEventListener("click", function () {
  let email = document.getElementById("email").value
  let nome = document.getElementById("nome").value

  document.getElementById("app").innerHTML = `${email} <br> ${nome}`;
  document.getElementById("app").setAttribute("class", "eita")

})

document.getElementById("email").addEventListener("change", function () {
  document.getElementById("app").innerHTML = this.value
})

