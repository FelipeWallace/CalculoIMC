function calculaIMC () {
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);
  let IMC = (peso/(altura ** 2));
  IMC = IMC.toFixed(1);
  document.getElementById("resp").innerHTML = "IMC: " + IMC;
}