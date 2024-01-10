function calculaIMC () {
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);
  let IMC = (peso/(altura ** 2));
  IMC = IMC.toFixed(1);
  document.getElementById("resp").innerHTML = "IMC: " + IMC;
  destaca(IMC);
}

function destaca(IMC) {
  if (IMC <= 18.5) {
    const destaque = document.getElementById("1");
    destaque.classList.add("resultado");
    destaque.innerHTML = "Abaixo do peso "+"<i class='fa-solid fa-mosquito'></i>"
    limparResultado(destaque);
  }
  else if (IMC > 18.5 && IMC <= 24.9) {
    const destaque = document.getElementById("2");
    destaque.classList.add("resultado");
    destaque.innerHTML = "Peso ideal " + "<i class='fa-solid fa-fish'></i>"
    limparResultado(destaque);
  }
  else if (IMC > 24.9 && IMC <= 29.9) {
    const destaque = document.getElementById("3");
    destaque.classList.add("resultado");
    destaque.innerHTML = "Levemente acima do peso " + "<i class='fa-solid fa-crow'></i>"
    limparResultado(destaque);
  }
  else if (IMC > 29.9 && IMC <= 34.9) {
    const destaque = document.getElementById("4");
    destaque.classList.add("resultado");
    destaque.innerHTML = "Obesidade grau I " + "<i class='fa-solid fa-otter'></i>"
    limparResultado(destaque);
  }
  else if (IMC > 34.9 && IMC <= 39.9) {
    const destaque = document.getElementById("5");
    destaque.classList.add("resultado");
    destaque.innerHTML = "Obesidade grau II " + "<i class='fa-solid fa-cow'></i>"
    limparResultado(destaque);
  }
  else {
    const destaque = document.getElementById("6");
    destaque.classList.add("resultado");
    destaque.innerHTML = "Obesidade grau III " + "<i class='fa-solid fa-hippo'></i>"
    limparResultado(destaque);
  }
}

function limparResultado(destaque)
{
  setTimeout(
    ()=>{
      destaque.classList.remove("resultado");
    },
    3000
  )
}