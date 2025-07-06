//SELEÇÃO DE ELEMENTOS
const btnGerarSenha = document.querySelector("#gerar-senha");
const elementoGerarSenha = document.querySelector("#gerador-senha");

const abreGerador = document.querySelector("#abrir-gerar-senha");
const containerGerador = document.querySelector("#gerar-opcoes");
const lengthInput = document.querySelector("#tamanho");
const letrasInput = document.querySelector("#letras");
const numeroInput = document.querySelector("#numeros");
const simbolosInput = document.querySelector("#simbolos");
const copy = document.querySelector("#copy");

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
  const senhaLength = +lengthInput.value;

  const gerador = [];

  if (letrasInput.checked) {
    gerador.push(pegaLetraMinuscula, pegaLetraMaiuscula);
  }
  if (numeroInput.checked) {
    gerador.push(pegaNumero);
  }
  if (simbolosInput.checked) {
    gerador.push(pegaSimbolo);
  }
  if (gerador.length === 0) {
    alert("Selecione pelo menos uma opção (letras, números ou símbolos)!");
    return;
  }

  for (i = 0; i < senhaLength; i = i + gerador.length) {
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

abreGerador.addEventListener("click", (e) => {
  containerGerador.classList.toggle("hide");
});

copy.addEventListener("click", (e) => {
  e.preventDefault();

  const senha = elementoGerarSenha.querySelector("h4").innerText;

  navigator.clipboard.writeText(senha).then(() => {
    copy.innerText = "Copiado!";
    setTimeout(() => {  
      copy.innerText = "Copiar";
    }, 2000);
  });
});
