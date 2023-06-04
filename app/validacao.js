function verificarChuteValida(chute) {
  const numero = +chute;

  if (seChuteInvalido(numero)) {
    elementoChute.innerHTML += `<div class="invalido">Valor inválido: Diga um número.</div>`;
  }

  if (seNumeroMaiorOuMenor(numero)) {
    elementoChute.innerHTML += `<div class="invalido">Valor inválido: O valor está entre ${menorValor} e ${maiorValor}.</div>`;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número secreto era: <span class="box2">${numeroSecreto}</span></h3>

    <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div class="invalido">
        Dica: O número secreto é menor! <i class="fa-sharp fa-solid fa-arrow-down"></i>
    </div>
      `;
  } else if (numero < numeroSecreto) {
    elementoChute.innerHTML += `
    <div class="invalido">
        Dica: O número secreto é maior! <i class="fa-sharp fa-solid fa-arrow-up"></i>
    </div>
      `;
  }
}

function seChuteInvalido(numero) {
  return Number.isNaN(numero);
}

function seNumeroMaiorOuMenor(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "jogar-novamente") {
    window.location.reload();
  }
});
