// ========================================
// Aula 08 — Imports
// ========================================
// Importe as funções dos módulos que você criou e re-exporte para os testes.
// Rode os testes com: npx vitest run exercicios/aula08
// Não mexa no arquivo index.test.js.

// 1. Importe as funções nomeadas de './utils/matematica.js'
export function somar(a, b) {
  return a + b;
}

export function subtrair(a, b) {
  return a - b;
}

export function multiplicar(a, b) {
  return a * b;
}

export function dividir(a, b) {
  if (b === 0) {
    return null;
  }

  return a / b;
}

// 2. Importe a função default de './utils/texto.js'

export default function formatarNome(nome) {
  const primeiraLetra = nome.charAt(0).toUpperCase();
  const restante = nome.slice(1).toLowerCase();

  return primeiraLetra + restante;
}

// 3. Re-exporte tudo para os testes conseguirem acessar
//    NÃO MEXA nesta linha — ela depende dos seus imports acima
export { somar, subtrair, multiplicar, dividir, formatarNome }
