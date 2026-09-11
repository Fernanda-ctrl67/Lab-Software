function adicionar(valor) {
  let visor = document.getElementById("visor");

  if (visor.value === "0") {
    visor.value = valor;
  } else {
    visor.value = visor.value + valor;
  }
}

// 2. Funções matemáticas isoladas
function somar(a, b) {
  return a + b;
}
function subtrair(c, d) {
  return c - d;
}
function multiplicacao(e, f) {
  return e * f;
}
function divisao(g, h) {
  return g / h;
}
function limpar2() {
  return 0;
}

// 3. Função para identificar a conta e calcular
function calcular() {
  let visor = document.getElementById("visor");
  let texto = visor.value;

  if (texto.includes("+")) {
    let partes = texto.split("+");

    let num1 = parseFloat(partes[0]);
    let num2 = parseFloat(partes[1]);

    visor.value = somar(num1, num2);
  } else if (texto.includes("-")) {
    let partes = texto.split("-");

    let nume1 = parseFloat(partes[0]);
    let nume2 = parseFloat(partes[1]);

    visor.value = subtrair(nume1, nume2);
  } else if (texto.includes("*")) {
    let partes = texto.split("*");

    let numer1 = parseFloat(partes[0]);
    let numer2 = parseFloat(partes[1]);

    visor.value = multiplicacao(numer1, numer2);
  } else if (texto.includes("/")) {
    let partes = texto.split("/");

    let numero1 = parseFloat(partes[0]);
    let numero2 = parseFloat(partes[1]);

    visor.value = divisao(numero1, numero2);
  }
}

// ====================================================
// DESAFIO 3: Crie a função limpar()
// ====================================================
function limpar() {
  visor.value = limpar2();
}
