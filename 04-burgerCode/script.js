// 1. Função para adicionar o item ao visor
function adicionarItem(item) {
  let visor = document.getElementById("visor-pedido");

  if (visor.value === "" || visor.value === "Seu pedido aparecerá aqui...") {
    visor.value = item;
  } else {
    visor.value = visor.value + " + " + item;
  }
}

// ====================================================
// EXERCÍCIO 2: Continue a lógica abaixo para calcular
// o total ou processar o pedido quando o botão for acionado
// ====================================================
function calcularTotal() {
  let visor = document.getElementById("visor-pedido");
  let textoPedido = visor.value;

  if (textoPedido.includes("Hambúrguer")) {
    // Exemplo base já pronto para ajudar
    visor.value = "Total a pagar: R$ 15.00";
  }

  // Continue a lógica para quando incluir Batata Frita ou Refrigerante...
}

// ====================================================
// EXERCÍCIO 3: Crie a função limparPedido() para resetar o visor
// ====================================================
