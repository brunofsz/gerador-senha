//SELEÇÃO DE ELEMENTOS
const btnGerarSenha = document.querySelector("#gerar-senha");
const elementoGerarSenha = document.querySelector("#gerador-senha");

//FUNCTIONS

const pegaLetraMinuscula = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const pegaLetraMaiuscula = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const pegaNumero = () => {
  return Math.floor(Math.random() * 10).toString();
};

const pegaSimbolo = () => {
  const simbolos = "{}()[]=<>.,/!?&*:;/|%$#@'-+";
  return simbolos[Math.floor(Math.random() * simbolos.length)];
};

const geraSenha = (
  pegaLetraMinuscula,
  pegaLetraMaiuscula,
  pegaNumero,
  pegaSimbolo
) => {
  let senha = "";
  const senhaLength = 10;

  const gerador = [
    pegaLetraMinuscula,
    pegaLetraMaiuscula,
    pegaNumero,
    pegaSimbolo,
  ];

  for (i = 0; i < senhaLength; i = i + 4) {
    gerador.forEach(() => {
      const randomValue = gerador[Math.floor(Math.random() * gerador.length)]();
      senha += randomValue;
    });
  }

  senha = senha.slice(0, senhaLength);
  console.log(senha);

  elementoGerarSenha.style.display = "Block";
  elementoGerarSenha.querySelector("h4").innerText = senha;
};

//EVENTOS

btnGerarSenha.addEventListener("click", (e) => {
  geraSenha(pegaLetraMinuscula, pegaLetraMaiuscula, pegaNumero, pegaSimbolo);
});
